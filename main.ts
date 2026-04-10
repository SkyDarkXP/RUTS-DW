<div class="app-home-main">
  <app-three-bg></app-three-bg>
  <div class="overlay-gradient"></div>

<!-- COMPARE BAR -->
<div class="compare-bar" *ngIf="compareList.length > 0" [class.visible]="compareList.length > 0">
  <span class="compare-bar-label">เปรียบเทียบ ({{ compareList.length }}/3)</span>
  <div class="compare-bar-items">
    <div class="compare-bar-item" *ngFor="let c of compareList">
      <span class="compare-bar-name">{{ c.title_th }}</span>
      <button class="compare-bar-remove" (click)="removeFromCompare(c)">✕</button>
    </div>
  </div>
  <button class="compare-bar-btn" (click)="openCompare()" [disabled]="compareList.length < 2">
    เปรียบเทียบ {{ compareList.length < 2 ? '(เลือกอีก ' + (2 - compareList.length) + ')' : '' }}
  </button>
  <button class="compare-bar-clear" (click)="compareList = []">ล้าง</button>
</div>

<!-- COMPARE MODAL -->
<div class="compare-overlay" *ngIf="showCompare" (click)="closeCompare()">
  <div class="compare-modal" (click)="$event.stopPropagation()">
    <div class="compare-modal-header">
      <h2>เปรียบเทียบหลักสูตร</h2>
      <button class="modal-close" (click)="closeCompare()">✕</button>
    </div>
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th class="compare-field-col">ข้อมูล</th>
            <th *ngFor="let c of compareList" class="compare-course-col">
              <p class="compare-th-faculty">{{ c.faculty_name_th || 'ไม่ระบุคณะ' }}</p>
              <p class="compare-th-title">{{ c.title_th }}</p>
              <button class="compare-remove-btn" (click)="removeFromCompare(c)">✕ นำออก</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let field of compareFields">
            <td class="compare-label-cell">{{ field.label }}</td>
            <td *ngFor="let c of compareList" class="compare-value-cell">
              {{ getCompareField(c, field.key) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

  <div class="content">

    <!-- NAV -->
    <header class="nav">
      <div class="nav-left">
        <div class="logo">RUTS-DW</div>
        <button type="button" aria-label="Toggle menu" class="menu-toggle" (click)="menuOpen = !menuOpen">
          ☰
        </button>
        <nav class="nav-links" [class.open]="menuOpen">
          <a routerLink="/" class="active">หน้าแรก</a>
          <a routerLink="/search" routerLinkActive="active">ค้นหาหลักสูตร</a>
          <a routerLink="/faculties" routerLinkActive="active">คณะทั้งหมด</a>
          <a href="https://www.rmutsv.ac.th/ruts/" target="_blank">สงขลา</a>
          <a href="https://www.youtube.com/@RMUTSVtv" target="_blank">Youtube</a>
        </nav>
      </div>
      <div class="nav-right">
        <input
          type="text"
          placeholder="ค้นหา..."
          class="search"
          [(ngModel)]="searchQuery"
          (input)="onSearch()">
        <div class="avatar" (click)="goToAdmin()" title="{{ auth.isLoggedIn() ? 'Admin' : 'เข้าสู่ระบบ' }}">
          {{ auth.isLoggedIn() ? 'A' : 'S' }}
        </div>
      </div>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-text">
        <div class="tag">NEW</div>
        <h1>หลักสูตรที่เปิดรับ</h1>
        <p class="subtitle">เริ่มอนาคตที่ดี เริ่มที่ มทร.ศรีวิชัย</p>
        <p class="desc">ยินดีต้อนรับเข้ามาศึกษาต่อกับมหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย</p>
        <div class="hero-actions">
          <a href="https://admission.rmutsv.ac.th/" target="_blank" class="btn primary">
            ▶ สมัครเข้าเรียน
          </a>
          <a href="https://admission.rmutsv.ac.th/register.php" target="_blank" class="btn secondary">
            ℹ โคต้าพิเศษ
          </a>
        </div>
      </div>
    </section>

    <!-- DEGREE FILTER -->
    <div class="degree-filter-bar">
      <button *ngFor="let deg of degreeOptions" class="degree-chip"
        [class.active]="(deg === 'ทั้งหมด' && !selectedDegree) || deg === selectedDegree"
        (click)="filterByDegree(deg)">{{ deg }}</button>
    </div>


    <!-- FACULTY FILTER -->
    <div class="faculty-filter-bar" *ngIf="faculties.length > 0">
      <button class="faculty-chip" [class.active]="selectedFaculty === null" (click)="filterByFaculty(null)">ทุกคณะ</button>
      <button class="faculty-chip" *ngFor="let f of faculties"
        [class.active]="selectedFaculty === f.id"
        (click)="filterByFaculty(f.id!)">{{ f.name_th }}</button>
    </div>

    <!-- FILTER RESULT COUNT -->
    <div class="filter-result-bar" *ngIf="hasActiveFilter">
      <span class="result-count">พบ <strong>{{ filteredCourses.length }}</strong> หลักสูตร</span>
      <button class="clear-filter" (click)="clearFilters()">✕ ล้างตัวกรอง</button>
    </div>

    <!-- ROWS -->
    <main class="rows">
      <div *ngIf="!loading && filteredCourses.length === 0" class="empty-state">
        <div class="empty-icon">🔍</div>
        <p class="empty-title">ไม่พบหลักสูตรที่ค้นหา</p>
        <p class="empty-sub">ลองเปลี่ยนคำค้นหาหรือเลือกระดับปริญญาอื่น</p>
        <button class="empty-reset" (click)="searchQuery=''; selectedDegree=''; applyFilters()">ล้างตัวกรอง</button>
      </div>

      <app-movie-row
        [loading]="loading"
        rowTitle="หลักสูตรทั้งหมด"
        [courses]="filteredCourses"
        [compareList]="compareList"
        (cardClick)="openModal($event)"
        (compareToggle)="toggleCompare($event)">
      </app-movie-row>

      <app-movie-row
        *ngIf="!selectedDegree && !searchQuery.trim() && selectedFaculty === null && featuredCourses.length > 0"
        rowTitle="หลักสูตรแนะนำ"
        [courses]="featuredCourses"
        [compareList]="compareList"
        (cardClick)="openModal($event)"
        (compareToggle)="toggleCompare($event)">
      </app-movie-row>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-main">
        <div class="footer-left">
          <div class="footer-logo">RUTS-DW <small style="font-size:x-small">V2.5</small></div>
          <p class="footer-text">ระบบแนะนำหลักสูตรและข้อมูลการศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย</p>
          <p class="footer-copy">© 2026 RUTS Digital World. All rights reserved.</p>
        </div>
      </div>
    </footer>

  </div>
</div>

<!-- MODAL -->
<div class="modal-overlay" *ngIf="selectedCourse" (click)="closeModal()">
  <div class="modal-box" (click)="$event.stopPropagation()">
    <button class="modal-close" (click)="closeModal()">✕</button>

    <div class="modal-image" *ngIf="selectedCourse.image_url">
      <img [src]="selectedCourse.image_url" [alt]="selectedCourse.title_th" (error)="onImgError($event)">
      <div class="modal-img-overlay"></div>
    </div>

    <div class="modal-content">
      <p class="modal-faculty">{{ selectedCourse.faculty_name_th || 'ไม่ระบุคณะ' }}</p>
      <h2 class="modal-title">{{ selectedCourse.title_th }}</h2>
      <p *ngIf="selectedCourse.title_en" class="modal-title-en">{{ selectedCourse.title_en }}</p>

      <div class="modal-badges">
        <span class="badge badge-red">{{ selectedCourse.degree_th || 'ปริญญาตรี' }} {{ selectedCourse.duration_years || 4 }} ปี</span>
        <span *ngIf="selectedCourse.level" class="badge badge-gray">{{ selectedCourse.level }}</span>
        <span *ngIf="selectedCourse.total_credits" class="badge badge-gray">{{ selectedCourse.total_credits }} หน่วยกิต</span>
      </div>

      <!-- ชื่อปริญญาและสาขาวิชา — แสดงเสมอ พร้อม placeholder ถ้าไม่มีข้อมูล -->
      <div class="modal-section">
        <h4 class="modal-section-title">ชื่อปริญญาและสาขาวิชา</h4>
        <ng-container *ngIf="selectedCourse.degree_full_th || selectedCourse.degree_abbr_th || selectedCourse.degree_full_en || selectedCourse.degree_abbr_en || selectedCourse.major; else noDegree">
          <div class="modal-degree-table">
            <div *ngIf="selectedCourse.degree_full_th" class="degree-row">
              <span class="degree-label">ชื่อเต็ม (ไทย)</span>
              <span class="degree-value">{{ selectedCourse.degree_full_th }}</span>
            </div>
            <div *ngIf="selectedCourse.degree_abbr_th" class="degree-row">
              <span class="degree-label">ชื่อย่อ (ไทย)</span>
              <span class="degree-value">{{ selectedCourse.degree_abbr_th }}</span>
            </div>
            <div *ngIf="selectedCourse.degree_full_en" class="degree-row">
              <span class="degree-label">ชื่อเต็ม (Eng)</span>
              <span class="degree-value">{{ selectedCourse.degree_full_en }}</span>
            </div>
            <div *ngIf="selectedCourse.degree_abbr_en" class="degree-row">
              <span class="degree-label">ชื่อย่อ (Eng)</span>
              <span class="degree-value">{{ selectedCourse.degree_abbr_en }}</span>
            </div>
            <div *ngIf="selectedCourse.major" class="degree-row">
              <span class="degree-label">วิชาเอก</span>
              <span class="degree-value">{{ selectedCourse.major }}</span>
            </div>
          </div>
        </ng-container>
        <ng-template #noDegree>
          <p class="modal-text modal-placeholder">ไม่พบข้อมูลปริญญา</p>
        </ng-template>
      </div>

      <!-- คุณสมบัติผู้สมัคร — แสดงเสมอ -->
      <div class="modal-section">
        <h4 class="modal-section-title">คุณสมบัติผู้สมัคร</h4>
        <p class="modal-text" *ngIf="selectedCourse.requirements; else noReq">{{ selectedCourse.requirements }}</p>
        <ng-template #noReq><p class="modal-text modal-placeholder">ไม่พบข้อมูล</p></ng-template>
      </div>

      <!-- รายละเอียดเพิ่มเติม (toggle) -->
      <div class="detail-expand" *ngIf="showDetail">

        <div class="modal-section" *ngIf="selectedCourse.career_path">
          <h4 class="modal-section-title">อาชีพที่สามารถประกอบได้</h4>
          <ol class="career-list">
            <li *ngFor="let item of getCareerList(selectedCourse.career_path)">{{ item }}</li>
          </ol>
        </div>

        <div class="modal-section" *ngIf="selectedCourse.description">
          <h4 class="modal-section-title">เกี่ยวกับหลักสูตร</h4>
          <p class="modal-text">{{ selectedCourse.description }}</p>
        </div>

        <div class="modal-section" *ngIf="selectedCourse.program_format">
          <h4 class="modal-section-title">รูปแบบของหลักสูตร</h4>
          <div class="program-format-table">
            <ng-container *ngFor="let row of getProgramFormatRows(selectedCourse.program_format)">
              <div class="pf-row" *ngIf="row.label">
                <span class="pf-label">{{ row.label }}</span>
                <span class="pf-value">{{ row.value }}</span>
              </div>
              <p class="modal-text" *ngIf="!row.label && row.value">{{ row.value }}</p>
            </ng-container>
          </div>
        </div>

        <div class="modal-section" *ngIf="selectedCourse.faculty_staff">
          <h4 class="modal-section-title">อาจารย์ประจำหลักสูตร</h4>
          <a [href]="selectedCourse.faculty_staff" target="_blank" class="modal-link">
            {{ selectedCourse.faculty_staff_label || 'ดูรายชื่ออาจารย์ประจำหลักสูตร' }} →
          </a>
        </div>

        <div class="modal-section" *ngIf="selectedCourse.study_plan_url">
          <h4 class="modal-section-title">แผนการศึกษา</h4>
          <a [href]="selectedCourse.study_plan_url" target="_blank" class="modal-link">
            {{ selectedCourse.study_plan_label || 'ดูแผนการศึกษา' }} →
          </a>
        </div>

        <div class="modal-section" *ngIf="selectedCourse.contact_info">
          <h4 class="modal-section-title">ช่องทางติดต่อ</h4>
          <div class="contact-list">
            <ng-container *ngFor="let item of getContactItems(selectedCourse.contact_info)">
              <a *ngIf="item.href" [href]="item.href" target="_blank" class="contact-item">
                <span class="contact-icon">{{ item.icon }}</span>{{ item.label }}
              </a>
              <span *ngIf="!item.href" class="contact-item no-link">
                <span class="contact-icon">{{ item.icon }}</span>{{ item.label }}
              </span>
            </ng-container>
          </div>
        </div>

      </div>

      <div class="modal-actions">
        <button class="btn primary small" (click)="showDetail = !showDetail">
          {{ showDetail ? '▲ ซ่อนรายละเอียด' : '▼ รายละเอียด' }}
        </button>
        <button class="btn share small" (click)="copyLink()">
          {{ linkCopied ? '✓ คัดลอกแล้ว' : '🔗 แชร์' }}
        </button>
        <button class="btn secondary small" (click)="closeModal()">ปิด</button>
      </div>
    </div>
  </div>
</div>