<div class="row-wrapper">
  <div class="row-header">
    <h2 class="row-title">{{ rowTitle }}</h2>
  </div>

  <!-- Skeleton loading -->
  <div class="row-scroll" *ngIf="loading">
    <div class="skeleton-card" *ngFor="let i of skeletonItems">
      <div class="skeleton-thumb shimmer"></div>
      <div class="skeleton-info">
        <div class="skeleton-line long shimmer"></div>
        <div class="skeleton-line short shimmer"></div>
      </div>
    </div>
  </div>

  <!-- Actual cards -->
  <div class="row-scroll" *ngIf="!loading">
    <div
      class="movie-card"
      *ngFor="let course of courses"
      (click)="cardClick.emit(course)"
      [class.compare-selected]="isInCompare(course)"
      [title]="course.title_th">
      <div
        class="thumb"
        [style.backgroundImage]="course.image_url ? 'url(' + course.image_url + ')' : 'none'"
        [class.thumb-placeholder]="!course.image_url">
        <button
          class="compare-btn"
          [class.active]="isInCompare(course)"
          (click)="toggleCompare($event, course)"
          [title]="isInCompare(course) ? 'ยกเลิกเปรียบเทียบ' : 'เพิ่มเปรียบเทียบ'">
          {{ isInCompare(course) ? '✓' : '+' }}
        </button>
        <a class="detail-btn" [routerLink]="['/course', course.id]" (click)="$event.stopPropagation()" title="ดูรายละเอียด">→</a>
      </div>
      <div class="info">
        <div class="title">{{ course.title_th }}</div>
        <div class="meta">
          <span>{{ course.degree_th || 'ปริญญาตรี' }}</span>
          <span>{{ course.duration_years || 4 }} ปี</span>
          <span *ngIf="course.level" class="badge">{{ course.level }}</span>
        </div>
      </div>
    </div>
  </div>
</div>
