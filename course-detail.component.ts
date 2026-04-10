<div class="admin-layout">

  <!-- ORB BACKGROUNDS -->
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>
  <div class="orb orb-4"></div>

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div>
      <!-- Brand / Logo -->
      <div class="sidebar-logo" data-tooltip="RUTS-DW">
        <span class="logo-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
        </span>
        <span class="logo-text"><span class="logo-r">RUTS</span><span class="logo-dash">-</span><span class="logo-dw">DW</span></span>
      </div>

      <!-- User Info -->
      <div class="sidebar-user" *ngIf="user" data-tooltip="ผู้ใช้">
        <div class="user-avatar">{{ (user.full_name || user.username)[0] }}</div>
        <div class="user-info">
          <p class="user-name">{{ user.full_name || user.username }}</p>
          <p class="user-role">{{ user.role }}</p>
        </div>
      </div>

      <!-- Nav -->
      <nav class="sidebar-nav">
        <button class="nav-item" [class.active]="activeTab === 'dashboard'" (click)="activeTab = 'dashboard'" data-tooltip="ภาพรวม">
          <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
          </span>
          <span class="nav-label">ภาพรวม</span>
        </button>
        <button class="nav-item" [class.active]="activeTab === 'courses'" (click)="activeTab = 'courses'" data-tooltip="จัดการหลักสูตร">
          <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </span>
          <span class="nav-label">จัดการหลักสูตร</span>
          <span class="nav-count">{{ courses.length }}</span>
        </button>
        <button class="nav-item" [class.active]="activeTab === 'faculties'" (click)="activeTab = 'faculties'" data-tooltip="จัดการคณะ">
          <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </span>
          <span class="nav-label">จัดการคณะ</span>
          <span class="nav-count">{{ faculties.length }}</span>
        </button>
        <button class="nav-item" [class.active]="activeTab === 'users'" (click)="activeTab = 'users'" data-tooltip="จัดการผู้ใช้" *ngIf="user?.role === 'admin'">
          <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </span>
          <span class="nav-label">จัดการผู้ใช้</span>
        </button>
      </nav>
    </div>

    <!-- Bottom Links -->
    <div class="sidebar-bottom">
      <a routerLink="/" class="sidebar-link" data-tooltip="ดูหน้าผู้ใช้">
        <span class="nav-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </svg>
        </span>
        <span class="nav-label">ดูหน้าผู้ใช้</span>
      </a>
      <button class="sidebar-link logout" (click)="logout()" data-tooltip="ออกจากระบบ">
        <span class="nav-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </span>
        <span class="nav-label">ออกจากระบบ</span>
      </button>
    </div>
  </aside>

  <!-- MAIN PANEL -->
  <main class="admin-main">

    <!-- DASHBOARD TAB -->
    <section *ngIf="activeTab === 'dashboard'">
      <div class="panel-header">
        <div>
          <h1 class="panel-title">ภาพรวมระบบ</h1>
          <p class="panel-sub">ยินดีต้อนรับ, {{ user?.full_name || user?.username }}</p>
        </div>
      </div>
      <app-admin-dashboard [courses]="courses" [faculties]="faculties"></app-admin-dashboard>
    </section>

    <!-- USERS TAB -->
    <section *ngIf="activeTab === 'users'">
      <app-admin-users></app-admin-users>
    </section>

    <!-- COURSES TAB -->
    <section *ngIf="activeTab === 'courses'">
      <div class="panel-header">
        <div>
          <h1 class="panel-title">จัดการหลักสูตร</h1>
          <p class="panel-sub">{{ courses.length }} หลักสูตรทั้งหมด</p>
        </div>
        <button class="btn-primary" (click)="openAddCourse()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M12 5v14m-7-7h14"/>
          </svg>
          เพิ่มหลักสูตร
        </button>
      </div>


      <!-- Dashboard Stats -->
      <div class="stats-grid" *ngIf="!loading">
        <div class="stat-card">
          <div class="stat-val">{{ courses.length }}</div>
          <div class="stat-label">หลักสูตรทั้งหมด</div>
        </div>
        <div class="stat-card active">
          <div class="stat-val">{{ statsActive }}</div>
          <div class="stat-label">เปิดใช้งาน</div>
        </div>
        <div class="stat-card featured">
          <div class="stat-val">{{ statsFeatured }}</div>
          <div class="stat-label">หลักสูตรแนะนำ</div>
        </div>
        <div class="stat-card faculty-list">
          <div class="stat-label" style="margin-bottom:6px">หลักสูตรต่อคณะ</div>
          <div *ngFor="let s of statsByFaculty" class="stat-faculty-row">
            <span class="stat-faculty-name">{{ s.name }}</span>
            <span class="stat-faculty-count">{{ s.count }}</span>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div *ngIf="loading" class="loading-state">
        <div class="spinner"></div>
        <p>กำลังโหลด...</p>
      </div>

      <!-- Search & Export -->
      <div class="admin-toolbar" *ngIf="!loading">
        <input type="text" [(ngModel)]="adminSearch" (input)="onAdminSearch()"
          placeholder="ค้นหาหลักสูตร..." class="admin-search-input">
        <select class="status-filter-select" [(ngModel)]="statusFilter" (change)="currentPage=1">
          <option value="all">ทุกสถานะ</option>
          <option value="active">เปิดใช้งาน</option>
          <option value="inactive">ปิดใช้งาน</option>
          <option value="featured">หลักสูตรแนะนำ</option>
        </select>
        <span class="admin-count">{{ filteredAdminCourses.length }} รายการ</span>
        <button class="btn-outline export-btn" (click)="exportCSV()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Export CSV
        </button>
      </div>


      <!-- Bulk action bar -->
      <div class="bulk-bar" *ngIf="selectedIds.size > 0">
        <span class="bulk-count">เลือก {{ selectedIds.size }} รายการ</span>
        <button class="bulk-btn activate" (click)="bulkSetActive(true)">เปิดใช้งาน</button>
        <button class="bulk-btn deactivate" (click)="bulkSetActive(false)">ปิดใช้งาน</button>
        <button class="bulk-btn danger" (click)="bulkDelete()">ลบ</button>
        <button class="bulk-btn clear" (click)="clearSelection()">ยกเลิก</button>
      </div>

      <!-- Courses Table -->
      <div class="table-wrap" *ngIf="!loading">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width:32px">
                <input type="checkbox" (change)="toggleSelectAll()"
                  [checked]="selectedIds.size === pagedCourses.length && pagedCourses.length > 0">
              </th>
              <th style="width:28px"></th>
              <th>รูปภาพ</th>
              <th>ชื่อหลักสูตร</th>
              <th>คณะ</th>
              <th>ระดับ</th>
              <th>สถานะ</th>
              <th>แนะนำ</th>
              <th>จัดการ</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let course of pagedCourses; let i = index"
              draggable="true"
              [class.drag-over]="dragOverIndex === (currentPage-1)*pageSize+i"
              [class.dragging]="dragIndex === (currentPage-1)*pageSize+i"
              (dragstart)="onDragStart((currentPage-1)*pageSize+i)"
              (dragover)="onDragOver($event,(currentPage-1)*pageSize+i)"
              (drop)="onDrop($event,(currentPage-1)*pageSize+i)"
              (dragend)="onDragEnd()">
              <td class="check-cell">
                <input type="checkbox" [checked]="selectedIds.has(course.id!)"
                  (change)="toggleSelect(course.id!)">
              </td>
              <td class="drag-handle" title="ลากเพื่อเรียงลำดับ">⠿</td>
              <td>
                <div class="table-img">
                  <img [src]="course.image_url || 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=80&q=60'"
                    [alt]="course.title_th"
                    (error)="onImgError($event)">
                </div>
              </td>
              <td>
                <p class="course-name-th">{{ course.title_th }}</p>
                <p *ngIf="course.title_en" class="course-name-en">{{ course.title_en }}</p>
              </td>
              <td>
                <span class="table-faculty">{{ getFacultyName(course.faculty_id) }}</span>
              </td>
              <td>
                <span class="badge badge-gray">{{ course.degree_th }} {{ course.duration_years }} ปี</span>
              </td>
              <td>
                <span class="status-dot" [class.active]="course.is_active" [class.inactive]="!course.is_active">
                  {{ course.is_active ? 'เปิดใช้งาน' : 'ปิดใช้งาน' }}
                </span>
              </td>
              <td>
                <span class="feature-star" [class.on]="course.is_featured">
                  {{ course.is_featured ? '⭐' : '☆' }}
                </span>
              </td>
              <td>
                <div class="action-btns">
                  <button class="btn-icon duplicate" (click)="duplicateCourse(course)" title="คัดลอก">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                  </button>
                  <button class="btn-icon edit" (click)="openEditCourse(course)" title="แก้ไข">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </button>
                  <button class="btn-icon delete" (click)="confirmDelete('course', course.id!, course.title_th)" title="ลบ">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6m4-6v6"/><path d="M9 6V4h6v2"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr *ngIf="courses.length === 0">
              <td colspan="9" class="empty-row">ยังไม่มีหลักสูตร กด "เพิ่มหลักสูตร" เพื่อเริ่มต้น</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="pagination" *ngIf="!loading && totalPages > 1">
        <button class="page-btn" [disabled]="currentPage===1" (click)="currentPage=currentPage-1">‹</button>
        <button class="page-btn" *ngFor="let p of pageNumbers" [class.active]="p===currentPage" (click)="currentPage=p">{{ p }}</button>
        <button class="page-btn" [disabled]="currentPage===totalPages" (click)="currentPage=currentPage+1">›</button>
        <span class="page-info">หน้า {{ currentPage }} / {{ totalPages }}</span>
      </div>

    </section>

    <!-- FACULTIES TAB -->
    <section *ngIf="activeTab === 'faculties'">
      <div class="panel-header">
        <div>
          <h1 class="panel-title">จัดการคณะ / ภาควิชา</h1>
          <p class="panel-sub">{{ faculties.length }} คณะทั้งหมด</p>
        </div>
        <button class="btn-primary" (click)="openAddFaculty()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M12 5v14m-7-7h14"/>
          </svg>
          เพิ่มคณะ
        </button>
      </div>

      <div class="faculty-grid">
        <div class="faculty-card" *ngFor="let f of faculties">
          <div class="faculty-card-head">
            <div class="faculty-icon">{{ (f.name_th || 'F')[0] }}</div>
            <div class="faculty-actions">
              <button class="btn-icon edit" (click)="openEditFaculty(f)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </button>
              <button class="btn-icon delete" (click)="confirmDelete('faculty', f.id!, f.name_th)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                </svg>
              </button>
            </div>
          </div>
          <h3 class="faculty-name">{{ f.name_th }}</h3>
          <p *ngIf="f.name_en" class="faculty-name-en">{{ f.name_en }}</p>
          <p *ngIf="f.code" class="faculty-code">{{ f.code }}</p>
          <p *ngIf="f.description" class="faculty-desc">{{ f.description }}</p>
          <p class="faculty-course-count">
            {{ getCourseCountByFaculty(f.id) }} หลักสูตร
          </p>
        </div>
        <div class="faculty-card add-card" (click)="openAddFaculty()">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 5v14m-7-7h14"/>
          </svg>
          <p>เพิ่มคณะใหม่</p>
        </div>
      </div>
    </section>

  </main>
</div>

<!-- COURSE MODAL -->
<div class="modal-overlay" *ngIf="showModal" (click)="showModal = false">
  <div class="form-modal" (click)="$event.stopPropagation()">
    <div class="form-modal-header">
      <h2>{{ modalMode === 'add' ? 'เพิ่มหลักสูตรใหม่' : 'แก้ไขหลักสูตร' }}</h2>
      <button class="modal-close" (click)="showModal = false">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <form [formGroup]="courseForm" (ngSubmit)="saveCourse()" class="form-body">
      <div class="form-cols">
        <div class="form-group">
          <label>ชื่อหลักสูตร (ไทย) <span class="required">*</span></label>
          <input type="text" formControlName="title_th" placeholder="วิศวกรรมคอมพิวเตอร์">
        </div>
        <div class="form-group">
          <label>ชื่อหลักสูตร (อังกฤษ)</label>
          <input type="text" formControlName="title_en" placeholder="Computer Engineering">
        </div>
      </div>

      <div class="form-cols">
        <div class="form-group">
          <label>คณะ / ภาควิชา</label>
          <select formControlName="faculty_id">
            <option [value]="null">-- ไม่ระบุ --</option>
            <option *ngFor="let f of faculties" [value]="f.id">{{ f.name_th }}</option>
          </select>
        </div>
        <div class="form-group">
          <label>ระดับปริญญา</label>
          <select formControlName="degree_th">
            <option value="ปริญญาตรี">ปริญญาตรี</option>
            <option value="ปริญญาโท">ปริญญาโท</option>
            <option value="ปริญญาเอก">ปริญญาเอก</option>
          </select>
        </div>
      </div>

      <div class="form-cols">
        <div class="form-group">
          <label>จำนวนปี</label>
          <input type="number" formControlName="duration_years" min="1" max="8">
        </div>
        <div class="form-group">
          <label>แท็กระดับ</label>
          <input type="text" formControlName="level" placeholder="ป.ตรี ม.6">
        </div>
      </div>


      <div class="form-group">
        <label>URL รูปภาพ</label>
        <input type="text" formControlName="image_url" placeholder="https://...">
        <div class="image-upload-row">
          <label class="upload-btn">
            {{ imageUploading ? 'กำลังโหลด...' : '📁 อัปโหลดจากเครื่อง' }}
            <input type="file" accept="image/*" (change)="onImageFileChange($event)" style="display:none">
          </label>
          <img *ngIf="courseForm.get('image_url')?.value" [src]="courseForm.get('image_url')?.value"
            class="img-thumb" (error)="onImgError($event)">
        </div>
      </div>

      <div class="form-group">
        <label>คำอธิบายหลักสูตร</label>
        <textarea formControlName="description" rows="3" placeholder="รายละเอียดของหลักสูตร..."></textarea>
      </div>

      <div class="form-cols">
        <div class="form-group">
          <label>จำนวนหน่วยกิต</label>
          <input type="number" formControlName="total_credits" placeholder="130" min="0">
        </div>
        <div class="form-group">
          <label>ระดับปริญญา (อังกฤษ)</label>
          <input type="text" formControlName="degree_en" placeholder="Bachelor">
        </div>
      </div>

      <div class="form-section-label">ชื่อปริญญาและสาขาวิชา</div>
      <div class="form-cols">
        <div class="form-group">
          <label>ชื่อเต็ม (ไทย)</label>
          <input type="text" formControlName="degree_full_th" placeholder="วิศวกรรมศาสตรบัณฑิต (วิศวกรรมคอมพิวเตอร์)">
        </div>
        <div class="form-group">
          <label>ชื่อย่อ (ไทย)</label>
          <input type="text" formControlName="degree_abbr_th" placeholder="วศ.บ. (วิศวกรรมคอมพิวเตอร์)">
        </div>
      </div>
      <div class="form-cols">
        <div class="form-group">
          <label>ชื่อเต็ม (อังกฤษ)</label>
          <input type="text" formControlName="degree_full_en" placeholder="Bachelor of Engineering (Computer Engineering)">
        </div>
        <div class="form-group">
          <label>ชื่อย่อ (อังกฤษ)</label>
          <input type="text" formControlName="degree_abbr_en" placeholder="B.Eng. (Computer Engineering)">
        </div>
      </div>
      <div class="form-group">
        <label>วิชาเอก</label>
        <input type="text" formControlName="major" placeholder="เช่น วิศวกรรมคอมพิวเตอร์">
      </div>

      <div class="form-group">
        <label>คุณสมบัติผู้สมัคร</label>
        <textarea formControlName="requirements" rows="3" placeholder="คุณสมบัติที่ต้องการ..."></textarea>
      </div>

      <div class="form-group">
        <label>อาชีพที่สามารถประกอบได้</label>
        <textarea formControlName="career_path" rows="2" placeholder="วิศวกรคอมพิวเตอร์, นักพัฒนาซอฟต์แวร์..."></textarea>
      </div>

      <div class="form-group">
        <label>รูปแบบของหลักสูตร</label>
        <textarea formControlName="program_format" rows="3" placeholder="หลักสูตรระดับปริญญาตรี 4 ปี ประเภทหลักสูตรวิชาชีพ..."></textarea>
      </div>

      <div class="form-group">
        <label>อาจารย์ประจำหลักสูตร</label>
        <div class="link-field-group">
          <input type="text" formControlName="faculty_staff_label" placeholder="ข้อความที่แสดง เช่น บุคลากรประจำหลักสูตร...">
          <input type="url" formControlName="faculty_staff" placeholder="URL ลิงก์ เช่น https://...">
        </div>
      </div>

      <div class="form-group">
        <label>แผนการศึกษา</label>
        <div class="link-field-group">
          <input type="text" formControlName="study_plan_label" placeholder="ข้อความที่แสดง เช่น แผนการศึกษาหลักสูตร...">
          <input type="url" formControlName="study_plan_url" placeholder="URL ลิงก์ เช่น https://...">
        </div>
      </div>

      <div class="form-group">
        <label>ช่องทางติดต่อ</label>
        <textarea formControlName="contact_info" rows="2" placeholder="ที่อยู่ โทร. อีเมล..."></textarea>
      </div>

      <div class="form-cols">
        <div class="form-group checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" formControlName="is_featured">
            <span>⭐ หลักสูตรแนะนำ</span>
          </label>
        </div>
        <div class="form-group checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" formControlName="is_active">
            <span>✓ เปิดใช้งาน</span>
          </label>
        </div>
      </div>


      <!-- Preview Panel -->
      <div class="preview-panel" *ngIf="showPreview">
        <p class="preview-label">Preview — หน้าผู้ใช้</p>
        <div class="preview-card">
          <img *ngIf="previewCourse.image_url" [src]="previewCourse.image_url" class="preview-img" (error)="onImgError($event)">
          <div class="preview-body">
            <p class="preview-faculty">{{ previewCourse.faculty_name_th || 'ไม่ระบุคณะ' }}</p>
            <h3 class="preview-title-text">{{ previewCourse.title_th || '(ชื่อหลักสูตร)' }}</h3>
            <p *ngIf="previewCourse.title_en" class="preview-en">{{ previewCourse.title_en }}</p>
            <div class="preview-badges">
              <span class="preview-badge" [style.background]="previewCourse.badge_color || '#e53935'">{{ previewCourse.degree_th }} {{ previewCourse.duration_years }} ปี</span>
              <span *ngIf="previewCourse.level" class="preview-badge gray">{{ previewCourse.level }}</span>
              <span *ngIf="previewCourse.total_credits" class="preview-badge gray">{{ previewCourse.total_credits }} หน่วยกิต</span>
            </div>
            <p *ngIf="previewCourse.description" class="preview-desc">{{ previewCourse.description }}</p>
          </div>
        </div>
      </div>

      <div class="form-actions">
        <button type="button" class="btn-outline preview-toggle" (click)="showPreview=!showPreview">
          {{ showPreview ? '✏ แก้ไข' : '👁 Preview' }}
        </button>
        <button type="button" class="btn-outline" (click)="showModal = false">ยกเลิก</button>
        <button type="submit" class="btn-primary" [disabled]="courseForm.invalid">
          {{ modalMode === 'add' ? 'เพิ่มหลักสูตร' : 'บันทึกการแก้ไข' }}
        </button>
      </div>
    </form>
  </div>
</div>

<!-- FACULTY MODAL -->
<div class="modal-overlay" *ngIf="showFacultyModal" (click)="showFacultyModal = false">
  <div class="form-modal form-modal-sm" (click)="$event.stopPropagation()">
    <div class="form-modal-header">
      <h2>{{ facultyModalMode === 'add' ? 'เพิ่มคณะใหม่' : 'แก้ไขคณะ' }}</h2>
      <button class="modal-close" (click)="showFacultyModal = false">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    </div>
    <form [formGroup]="facultyForm" (ngSubmit)="saveFaculty()" class="form-body">
      <div class="form-group">
        <label>ชื่อคณะ (ไทย) <span class="required">*</span></label>
        <input type="text" formControlName="name_th" placeholder="คณะวิศวกรรมศาสตร์">
      </div>
      <div class="form-group">
        <label>ชื่อคณะ (อังกฤษ)</label>
        <input type="text" formControlName="name_en" placeholder="Faculty of Engineering">
      </div>
      <div class="form-group">
        <label>รหัสคณะ</label>
        <input type="text" formControlName="code" placeholder="ENG">
      </div>
      <div class="form-group">
        <label>คำอธิบาย</label>
        <textarea formControlName="description" rows="2"></textarea>
      </div>
      <div class="form-actions">
        <button type="button" class="btn-outline" (click)="showFacultyModal = false">ยกเลิก</button>
        <button type="submit" class="btn-primary" [disabled]="facultyForm.invalid">
          {{ facultyModalMode === 'add' ? 'เพิ่มคณะ' : 'บันทึก' }}
        </button>
      </div>
    </form>
  </div>
</div>

<!-- DELETE CONFIRM -->
<div class="modal-overlay" *ngIf="deleteTarget" (click)="deleteTarget = null">
  <div class="confirm-modal" (click)="$event.stopPropagation()">
    <div class="confirm-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e53935" stroke-width="2">
        <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6m4-6v6"/><path d="M9 6V4h6v2"/>
      </svg>
    </div>
    <h3>ยืนยันการลบ</h3>
    <p>คุณต้องการลบ <strong>"{{ deleteTarget?.name }}"</strong> ใช่หรือไม่?</p>
    <div class="confirm-actions">
      <button class="btn-outline" (click)="deleteTarget = null">ยกเลิก</button>
      <button class="btn-primary danger" (click)="doDelete()">ลบ</button>
    </div>
  </div>
</div>

<!-- TOASTS -->
<div class="toast-container">
  <div *ngFor="let t of toasts" class="toast" [class.toast-success]="t.type === 'success'" [class.toast-error]="t.type === 'error'">
    {{ t.message }}
  </div>
</div>
