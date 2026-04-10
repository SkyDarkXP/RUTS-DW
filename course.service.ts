<div class="faculties-page">
  <app-three-bg></app-three-bg>
  <div class="overlay-gradient"></div>

  <div class="content">
    <!-- NAV -->
    <header class="nav">
      <div class="nav-left">
        <a routerLink="/" class="logo">RUTS-DW</a>
        <nav class="nav-links">
          <a routerLink="/" class="nav-link">หน้าแรก</a>
          <a routerLink="/search" class="nav-link">ค้นหาหลักสูตร</a>
          <a routerLink="/faculties" class="nav-link active">คณะทั้งหมด</a>
        </nav>
      </div>
      <div class="nav-right">
        <div class="avatar" (click)="goToAdmin()">{{ auth.isLoggedIn() ? 'A' : 'S' }}</div>
      </div>
    </header>

    <!-- HEADING -->
    <section class="page-header">
      <h1>คณะทั้งหมด</h1>
      <p class="subtitle">มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย</p>
    </section>

    <!-- LOADING -->
    <div class="loading-state" *ngIf="loading">
      <div class="spinner"></div>
    </div>

    <!-- FACULTY GRID -->
    <div class="faculty-grid" *ngIf="!loading">
      <div class="faculty-card" *ngFor="let f of faculties" (click)="browseFaculty(f)">
        <div class="faculty-icon">🏫</div>
        <div class="faculty-body">
          <h2 class="faculty-name">{{ f.name_th }}</h2>
          <p class="faculty-name-en" *ngIf="f.name_en">{{ f.name_en }}</p>
          <p class="faculty-desc" *ngIf="f.description">{{ f.description | slice:0:80 }}{{ (f.description?.length || 0) > 80 ? '...' : '' }}</p>
        </div>
        <div class="faculty-footer">
          <span class="course-count">{{ getCourseCount(f.id) }} หลักสูตร</span>
          <span class="browse-link">ดูหลักสูตร →</span>
        </div>
      </div>

      <div class="empty-state" *ngIf="faculties.length === 0">
        <p>ยังไม่มีข้อมูลคณะในระบบ</p>
      </div>
    </div>

    <!-- ALL COURSES SHORTCUT -->
    <div class="shortcut-row">
      <a routerLink="/search" class="btn primary">ดูหลักสูตรทั้งหมด →</a>
    </div>

    <footer class="footer">
      <p class="footer-copy">© 2026 RUTS Digital World. All rights reserved.</p>
    </footer>
  </div>
</div>
