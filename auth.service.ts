import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseService } from '../../services/course.service';
import { AuthService } from '../../services/auth.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;
  loading = true;
  notFound = false;
  linkCopied = false;

  modalOpen = false;
  modalTitle = '';
  modalUrl = '';
  modalSafeUrl: SafeResourceUrl = '';
  modalLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    public auth: AuthService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (!id) { this.notFound = true; this.loading = false; return; }
      this.courseService.getCourse(id).subscribe({
        next: res => {
          this.course = res.data || null;
          this.loading = false;
          this.notFound = !this.course;
          if (this.course) {
            document.title = this.course.title_th + ' — RUTS-DW';
          }
        },
        error: () => { this.loading = false; this.notFound = true; }
      });
    });
  }

  copyLink(): void {
    navigator.clipboard.writeText(window.location.href).then(() => {
      this.linkCopied = true;
      setTimeout(() => this.linkCopied = false, 2000);
    });
  }

  goToAdmin(): void {
    this.auth.isLoggedIn() ? this.router.navigate(['/admin']) : this.router.navigate(['/login']);
  }

  onImgError(event: Event): void { (event.target as HTMLImageElement).style.display = 'none'; }

  openModal(title: string, url: string): void {
    this.modalTitle = title;
    this.modalUrl = url;
    this.modalSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.modalLoading = true;
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.modalOpen = false;
    this.modalUrl = '';
    this.modalSafeUrl = '';
    document.body.style.overflow = '';
  }

  onIframeLoad(): void { this.modalLoading = false; }
  onIframeError(): void { this.modalLoading = false; }

  getCareerList(text: string | undefined): string[] {
    if (!text) return [];
    return text.split('\n').map(s => s.trim()).filter(s => s.length > 0);
  }

  getProgramFormatRows(text: string | undefined): { label: string; value: string }[] {
    if (!text) return [];
    return text.split('\n').map(line => {
      const idx = line.indexOf(':');
      if (idx === -1) return { label: '', value: line.trim() };
      return { label: line.substring(0, idx).trim(), value: line.substring(idx + 1).trim() };
    }).filter(row => row.label || row.value);
  }

  getContactItems(text: string | undefined): { label: string; href: string; icon: string }[] {
    if (!text) return [];
    return text.split('\n').map(l => l.trim()).filter(Boolean).map(line => {
      if (/^https?:\/\//i.test(line)) return { label: line, href: line, icon: '🔗' };
      const tel = line.match(/^(tel:|โทร\.?|phone:?)\s*(.*)/i);
      if (tel) return { label: 'โทร. ' + tel[2], href: 'tel:' + tel[2].replace(/\s/g, ''), icon: '📞' };
      const mail = line.match(/^(mailto:|อีเมล:?|email:?)\s*(.*)/i);
      if (mail) return { label: mail[2], href: 'mailto:' + mail[2], icon: '✉' };
      if (/@/.test(line) && !/\s/.test(line)) return { label: line, href: 'mailto:' + line, icon: '✉' };
      if (/^\+?[\d\s\-()]{7,}$/.test(line)) return { label: line, href: 'tel:' + line.replace(/\s/g, ''), icon: '📞' };
      return { label: line, href: '', icon: '📍' };
    });
  }
}
