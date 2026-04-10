import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { AuthService } from '../../services/auth.service';
import { Course, Faculty } from '../../models/course.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  courses: Course[] = [];
  faculties: Faculty[] = [];
  filteredCourses: Course[] = [];
  loading = true;

  searchQuery = '';
  selectedDegree = '';
  selectedFaculty: number | null = null;

  degreeOptions = ['ปริญญาตรี', 'ปริญญาโท', 'ปริญญาเอก', 'ปวส.', 'ปวช.'];

  constructor(
    private courseService: CourseService,
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] || '';
      this.selectedDegree = params['degree'] || '';
      this.selectedFaculty = params['faculty'] ? +params['faculty'] : null;
    });

    this.courseService.getFaculties().subscribe({
      next: res => { this.faculties = res.data || []; }
    });

    this.courseService.getCourses().subscribe({
      next: res => {
        this.courses = res.data || [];
        this.applyFilters();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilters(): void {
    let result = this.courses;
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(c =>
        c.title_th.toLowerCase().includes(q) ||
        (c.title_en || '').toLowerCase().includes(q) ||
        (c.faculty_name_th || '').toLowerCase().includes(q) ||
        (c.description || '').toLowerCase().includes(q)
      );
    }
    if (this.selectedDegree) {
      result = result.filter(c =>
        (c.degree_th || '').includes(this.selectedDegree) ||
        (c.level || '').includes(this.selectedDegree)
      );
    }
    if (this.selectedFaculty !== null) {
      result = result.filter(c => c.faculty_id === this.selectedFaculty);
    }
    this.filteredCourses = result;
    this.updateUrl();
  }

  updateUrl(): void {
    const queryParams: any = {};
    if (this.searchQuery.trim()) queryParams['q'] = this.searchQuery;
    if (this.selectedDegree) queryParams['degree'] = this.selectedDegree;
    if (this.selectedFaculty !== null) queryParams['faculty'] = this.selectedFaculty;
    this.router.navigate([], { queryParams, replaceUrl: true });
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedDegree = '';
    this.selectedFaculty = null;
    this.applyFilters();
  }

  get hasFilter(): boolean {
    return !!(this.searchQuery.trim() || this.selectedDegree || this.selectedFaculty !== null);
  }

  openCourse(course: Course): void {
    this.router.navigate(['/course', course.id]);
  }

  goToAdmin(): void {
    this.auth.isLoggedIn() ? this.router.navigate(['/admin']) : this.router.navigate(['/login']);
  }

  onImgError(event: Event): void { (event.target as HTMLImageElement).style.display = 'none'; }

  getFacultyName(id: number | null | undefined): string {
    if (!id) return 'ไม่ระบุคณะ';
    return this.faculties.find(f => f.id === id)?.name_th || 'ไม่ระบุคณะ';
  }
}
