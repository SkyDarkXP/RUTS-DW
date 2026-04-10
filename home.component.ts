import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Course, Faculty } from '../../models/course.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnChanges {
  @Input() courses: Course[] = [];
  @Input() faculties: Faculty[] = [];

  stats = { total: 0, active: 0, inactive: 0, featured: 0, faculties: 0 };
  recentCourses: Course[] = [];
  coursesByFaculty: { name: string; count: number; pct: number }[] = [];

  constructor(private router: Router) {}

  ngOnChanges(): void {
    this.stats = {
      total: this.courses.length,
      active: this.courses.filter(c => c.is_active !== 0 && c.is_active !== false).length,
      inactive: this.courses.filter(c => c.is_active === 0 || c.is_active === false).length,
      featured: this.courses.filter(c => c.is_featured !== 0 && c.is_featured !== false).length,
      faculties: this.faculties.length
    };

    this.recentCourses = [...this.courses]
      .sort((a, b) => new Date(b.updated_at || b.created_at || '').getTime() - new Date(a.updated_at || a.created_at || '').getTime())
      .slice(0, 5);

    this.coursesByFaculty = this.faculties.map(f => ({
      name: f.name_th,
      count: this.courses.filter(c => c.faculty_id === f.id).length,
      pct: this.courses.length ? Math.round(this.courses.filter(c => c.faculty_id === f.id).length / this.courses.length * 100) : 0
    })).sort((a, b) => b.count - a.count);
  }

  goToSearch(): void { this.router.navigate(['/search']); }
  goToFaculties(): void { this.router.navigate(['/faculties']); }
}
