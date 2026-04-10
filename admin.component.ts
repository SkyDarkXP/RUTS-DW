import {
  Component, Input, OnChanges, SimpleChanges,
  AfterViewInit, OnDestroy, ElementRef, ViewChild, NgZone
} from '@angular/core';
import { Course } from '../../models/course.model';

/* ── tiny helpers (ported from script.js) ── */
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

class Vec2 {
  constructor(public x = 0, public y = 0) {}
  lerp(v: Vec2, t: number) { this.x = lerp(this.x, v.x, t); this.y = lerp(this.y, v.y, t); }
  set(x: number, y: number) { this.x = x; this.y = y; }
}

interface TiltHandle { destroy: () => void; }

@Component({
  selector: 'app-parallax-slider',
  templateUrl: './parallax-slider.component.html',
  styleUrls: ['./parallax-slider.component.scss']
})
export class ParallaxSliderComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() courses: Course[] = [];
  @ViewChild('sliderEl') sliderRef!: ElementRef<HTMLElement>;

  slides: Course[] = [];          // exactly 3 items: [prev, current, next]
  currentIdx = 0;

  private rafId = 0;
  private tiltHandles: TiltHandle[] = [];
  private touchStartX = 0;
  private isMobile = false;

  constructor(private zone: NgZone) {}

  /* ── lifecycle ── */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['courses'] && this.courses.length > 0) {
      this.currentIdx = 0;
      this.buildSlides();
    }
  }

  ngAfterViewInit() {
    this.isMobile = window.matchMedia('(pointer: coarse)').matches;
    // wait one tick for *ngFor to render
    setTimeout(() => this.initTilt(), 0);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
    this.tiltHandles.forEach(h => h.destroy());
  }

  /* ── data helpers ── */
  buildSlides() {
    const n = this.courses.length;
    if (n === 0) { this.slides = []; return; }
    const prev = this.courses[(this.currentIdx - 1 + n) % n];
    const cur  = this.courses[this.currentIdx];
    const next = this.courses[(this.currentIdx + 1) % n];
    this.slides = [prev, cur, next];   // index 0=prev, 1=current, 2=next
  }

  get current(): Course { return this.slides[1]; }
  get prev(): Course    { return this.slides[0]; }
  get next(): Course    { return this.slides[2]; }

  fallback = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=70';
  imgSrc(c: Course) { return c?.image_url || this.fallback; }

  /* ── navigation ── */
  goPrev() { this.navigate(-1); }
  goNext() { this.navigate(1); }

  navigate(dir: 1 | -1) {
    const n = this.courses.length;
    if (n < 2) return;
    this.currentIdx = (this.currentIdx + dir + n) % n;
    this.buildSlides();
    this.zone.runOutsideAngular(() => setTimeout(() => this.initTilt(), 50));
  }

  /* ── swipe ── */
  onTouchStart(e: TouchEvent) { this.touchStartX = e.changedTouches[0].screenX; }
  onTouchEnd(e: TouchEvent) {
    const dx = e.changedTouches[0].screenX - this.touchStartX;
    if (dx < -50) this.zone.run(() => this.goNext());
    if (dx >  50) this.zone.run(() => this.goPrev());
  }

  /* ── tilt ── */
  initTilt() {
    // destroy old handles
    this.tiltHandles.forEach(h => h.destroy());
    this.tiltHandles = [];
    cancelAnimationFrame(this.rafId);

    if (this.isMobile || !this.sliderRef) return;

    const slideEls = this.sliderRef.nativeElement.querySelectorAll<HTMLElement>('.ps-slide');
    slideEls.forEach(slide => {
      const inner = slide.querySelector<HTMLElement>('.ps-slide__inner');
      if (!inner) return;
      this.tiltHandles.push(this.makeTilt(slide, inner));
    });
  }

  private makeTilt(trigger: HTMLElement, inner: HTMLElement): TiltHandle {
    let lerpAmt = 0.06;
    const rot = { cur: new Vec2(), tgt: new Vec2() };
    const bg  = { cur: new Vec2(), tgt: new Vec2() };
    let raf = 0;

    const tick = () => {
      rot.cur.lerp(rot.tgt, lerpAmt);
      bg.cur.lerp(bg.tgt, lerpAmt);
      inner.style.setProperty('--rotX', rot.cur.y.toFixed(2) + 'deg');
      inner.style.setProperty('--rotY', rot.cur.x.toFixed(2) + 'deg');
      inner.style.setProperty('--bgPosX', bg.cur.x.toFixed(2) + '%');
      inner.style.setProperty('--bgPosY', bg.cur.y.toFixed(2) + '%');
      raf = requestAnimationFrame(tick);
    };

    const onMove = ({ offsetX, offsetY }: MouseEvent) => {
      lerpAmt = 0.1;
      const ox =  (offsetX - inner.clientWidth  * 0.5) / (Math.PI * 3);
      const oy = -(offsetY - inner.clientHeight * 0.5) / (Math.PI * 4);
      rot.tgt.set(ox, oy);
      bg.tgt.set(-ox * 0.3, oy * 0.3);
    };
    const onLeave = () => {
      lerpAmt = 0.06;
      rot.tgt.set(0, 0);
      bg.tgt.set(0, 0);
    };

    trigger.addEventListener('mousemove', onMove);
    trigger.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return {
      destroy: () => {
        cancelAnimationFrame(raf);
        trigger.removeEventListener('mousemove', onMove);
        trigger.removeEventListener('mouseleave', onLeave);
      }
    };
  }
}
