import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.scss']
})
export class MovieRowComponent {
  @Input() rowTitle = '';
  @Input() courses: Course[] = [];
  @Input() loading = false;
  @Input() compareList: Course[] = [];
  @Output() cardClick = new EventEmitter<Course>();
  @Output() compareToggle = new EventEmitter<Course>();

  skeletonItems = Array(8).fill(0);

  isInCompare(course: Course): boolean {
    return this.compareList.some(c => c.id === course.id);
  }

  toggleCompare(event: Event, course: Course): void {
    event.stopPropagation();
    this.compareToggle.emit(course);
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
