import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  form: FormGroup;
  loading = false;
  error = '';
  showPassword = false;

  // Brute-force protection
  private readonly MAX_ATTEMPTS = 5;
  private readonly LOCKOUT_SECONDS = 60;
  failedAttempts = 0;
  lockedUntil: number | null = null;
  countdown = 0;
  private countdownTimer: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    if (this.auth.isLoggedIn()) this.router.navigate(['/admin']);
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get isLocked(): boolean {
    if (!this.lockedUntil) return false;
    if (Date.now() >= this.lockedUntil) { this.unlock(); return false; }
    return true;
  }

  private unlock(): void {
    this.lockedUntil = null;
    this.failedAttempts = 0;
    this.countdown = 0;
    clearInterval(this.countdownTimer);
  }

  private startLockout(): void {
    this.lockedUntil = Date.now() + this.LOCKOUT_SECONDS * 1000;
    this.countdown = this.LOCKOUT_SECONDS;
    clearInterval(this.countdownTimer);
    this.countdownTimer = setInterval(() => {
      this.countdown = Math.max(0, Math.ceil((this.lockedUntil! - Date.now()) / 1000));
      if (this.countdown === 0) this.unlock();
    }, 500);
  }

  onSubmit(): void {
    if (this.form.invalid || this.loading || this.isLocked) return;
    this.loading = true;
    this.error = '';

    this.auth.login(this.form.value.username, this.form.value.password).subscribe({
      next: res => {
        this.loading = false;
        if (res.success) {
          this.failedAttempts = 0;
          this.router.navigate(['/admin']);
        } else {
          this.onLoginFailed();
        }
      },
      error: () => {
        this.loading = false;
        this.onLoginFailed();
      }
    });
  }

  private onLoginFailed(): void {
    this.failedAttempts++;
    const remaining = this.MAX_ATTEMPTS - this.failedAttempts;
    if (this.failedAttempts >= this.MAX_ATTEMPTS) {
      this.startLockout();
      this.error = `กรอกรหัสผ่านผิดเกินกำหนด กรุณารอ ${this.LOCKOUT_SECONDS} วินาที`;
    } else {
      this.error = `ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง (เหลืออีก ${remaining} ครั้ง)`;
    }
  }

  ngOnDestroy(): void { clearInterval(this.countdownTimer); }
}
