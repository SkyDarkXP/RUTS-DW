<div class="search-page">
  <app-three-bg></app-three-bg>
  <div class="overlay-gradient"></div>

  <div class="content">
    <!-- NAV -->
    <header class="nav">
      <div class="nav-left">
        <a routerLink="/" class="logo">RUTS-DW</a>
        <nav class="nav-links">
          <a routerLink="/" class="nav-link">หน้าแรก</a>
          <a routerLink="/search" class="nav-link active">ค้นหาหลักสูตร</a>
          <a routerLink="/faculties" class="nav-link">คณะทั้งหมด</a>
        </nav>
      </div>
      <div class="nav-right">
        <div class="avatar" (click)="goToAdmin()">{{ auth.isLoggedIn() ? 'A' : 'S' }}</div>
      </div>
    </header>

    <!-- SEARCH HEADER -->
    <section class="search-header">
      <h1>ค้นหาหลักสูตร</h1>
      <p class="subtitle">{{ courses.length }} หลักสูตร จาก {{ faculties.length }} คณะ</p>

      <div class="search-box-wrap">
        <span class="search-icon">🔍</span>
        <input
          class="search-box"
          type="text"
          placeholder="ชื่อหลักสูตร, สาขาวิชา, คณะ..."
          [(ngModel)]="searchQuery"
          (input)="applyFilters()">
        <button *ngIf="searchQuery" class="search-clear" (click)="searchQuery=''; applyFilters()">✕</button>
      </div>
    </section>

    <!-- FILTERS -->
    <div class="filters-bar">
      <div class="filter-group">
        <label class="filter-label">ระดับปริญญา</label>
        <div class="chip-row">
          <button class="chip" [class.active]="!selectedDegree" (click)="selectedDegree=''; applyFilters()">ทั้งหมด</button>
          <button class="chip" *ngFor="let deg of degreeOptions"
            [class.active]="selectedDegree === deg"
            (click)="selectedDegree = selectedDegree === deg ? '' : deg; applyFilters()">{{ deg }}</button>
        </div>
      </div>

      <div class="filter-group" *ngIf="faculties.length">
        <label class="filter-label">คณะ</label>
        <div class="chip-row">
          <button class="chip" [class.active]="selectedFaculty === null" (click)="selectedFaculty=null; applyFilters()">ทุกคณะ</button>
          <button class="chip" *ngFor="let f of faculties"
            [class.active]="selectedFaculty === f.id"
            (click)="selectedFaculty = selectedFaculty === f.id ? null : f.id!; applyFilters()">{{ f.name_th }}</button>
        </div>
      </div>
    </div>

    <!-- RESULTS INFO -->
    <div class="results-bar">
      <span class="results-count" *ngIf="!loading">
        พบ <strong>{{ filteredCourses.length }}</strong> หลักสูตร
        <span *ngIf="hasFilter"> (กรองจาก {{ courses.length }})</span>
      </span>
      <button class="clear-btn" *ngIf="hasFilter" (click)="clearFilters()">✕ ล้างตัวกรอง</button>
    </div>

    <!-- LOADING -->
    <div class="loading-state" *ngIf="loading">
      <div class="spinner"></div>
    </div>

    <!-- RESULTS GRID -->
    <div class="results-grid" *ngIf="!loading">

      <!-- Empty state -->
      <div class="empty-state" *ngIf="filteredCourses.length === 0">
        <div class="empty-icon">📭</div>
        <p>ไม่พบหลักสูตรที่ตรงกับการค้นหา</p>
        <button class="btn secondary" (click)="clearFilters()">ล้างตัวกรอง</button>
      </div>

      <!-- Course Cards -->
      <a class="course-card" *ngFor="let c of filteredCourses"
        [routerLink]="['/course', c.id]">
        <div class="card-img-wrap">
          <img *ngIf="c.image_url" [src]="c.image_url" [alt]="c.title_th" (error)="onImgError($event)">
          <div class="card-img-placeholder" *ngIf="!c.image_url">🎓</div>
        </div>
        <div class="card-body">
          <p class="card-faculty">{{ c.faculty_name_th || 'ไม่ระบุคณะ' }}</p>
          <h3 class="card-title">{{ c.title_th }}</h3>
          <p class="card-en" *ngIf="c.title_en">{{ c.title_en }}</p>
          <div class="card-badges">
            <span class="badge red">{{ c.degree_th || 'ป.ตรี' }}</span>
            <span class="badge gray" *ngIf="c.level">{{ c.level }}</span>
            <span class="badge gray" *ngIf="c.duration_years">{{ c.duration_years }} ปี</span>
          </div>
          <p class="card-desc" *ngIf="c.description">{{ c.description | slice:0:80 }}{{ (c.description?.length || 0) > 80 ? '...' : '' }}</p>
        </div>
        <div class="card-arrow">→</div>
      </a>
    </div>

    <!-- FOOTER -->
    <footer class="footer">
      <p class="footer-copy">© 2026 RUTS Digital World. All rights reserved.</p>
    </footer>
  </div>
</div>
