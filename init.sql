<div class="login-page">
  <!-- Background decoration -->
  <div class="bg-deco">
    <div class="deco-circle c1"></div>
    <div class="deco-circle c2"></div>
  </div>

  <div class="login-box">
    <!-- Logo -->
    <div class="login-logo">
      <span class="logo-text">RUTS</span><span class="logo-dash">-</span><span class="logo-dw">DW</span>
    </div>
    <h2 class="login-title">เข้าสู่ระบบผู้ดูแล</h2>
    <p class="login-sub">Admin Panel · Course Management System</p>

    <!-- Error -->
    <div class="login-error" *ngIf="error">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>
      </svg>
      {{ error }}
    </div>

    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label>ชื่อผู้ใช้</label>
        <div class="input-wrap">
          <svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          <input type="text" formControlName="username" placeholder="กรอกชื่อผู้ใช้" autocomplete="username">
        </div>
      </div>

      <div class="form-group">
        <label>รหัสผ่าน</label>
        <div class="input-wrap">
          <svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <input [type]="showPassword ? 'text' : 'password'" formControlName="password" placeholder="กรอกรหัสผ่าน" autocomplete="current-password">
          <button type="button" class="toggle-pw" (click)="showPassword = !showPassword">
            <svg *ngIf="!showPassword" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
            <svg *ngIf="showPassword" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>
            </svg>
          </button>
        </div>
      </div>

      <p *ngIf="failedAttempts > 0 && !isLocked" class="attempt-warn">
          พยายามเข้าสู่ระบบผิด {{ failedAttempts }}/5 ครั้ง
        </p>
        <button type="submit" class="btn-login" [disabled]="form.invalid || loading || isLocked">
        <span *ngIf="!loading">เข้าสู่ระบบ</span>
        <span *ngIf="loading" class="loading-dots">กำลังเข้าสู่ระบบ<span>.</span><span>.</span><span>.</span></span>
      </button>
    </form>

    <a routerLink="/" class="back-link">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5m7-7-7 7 7 7"/>
      </svg>
      กลับหน้าหลัก
    </a>

    <p class="login-hint">Default: admin / admin123</p>
  </div>
</div>
