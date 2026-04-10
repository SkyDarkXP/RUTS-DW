import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
<div class="nf-page">
  <div class="nf-content">
    <div class="nf-code">404</div>
    <h1>ไม่พบหน้านี้</h1>
    <p>หน้าที่คุณค้นหาอาจถูกย้ายหรือไม่มีในระบบ</p>
    <div class="nf-actions">
      <a routerLink="/" class="btn primary">กลับหน้าแรก</a>
      <a routerLink="/search" class="btn secondary">ค้นหาหลักสูตร</a>
    </div>
  </div>
</div>
  `,
  styles: [`
    :host { display: block; min-height: 100vh; background: #080810; color: #fff; font-family: 'IBM Plex Sans Thai', system-ui, sans-serif; }
    .nf-page { display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .nf-content { text-align: center; padding: 2rem; }
    .nf-code { font-size: 8rem; font-weight: 900; color: #e53935; line-height: 1; margin-bottom: .5rem; opacity: .8; }
    h1 { font-size: 2rem; margin-bottom: .75rem; }
    p { color: rgba(255,255,255,.5); margin-bottom: 2rem; }
    .nf-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .btn { display: inline-flex; align-items: center; padding: .65rem 1.4rem; border-radius: 8px; font-size: .9rem; font-weight: 600; text-decoration: none; border: none; cursor: pointer; transition: all .2s; }
    .btn.primary { background: #e53935; color: #fff; }
    .btn.primary:hover { background: #ff5252; }
    .btn.secondary { background: rgba(255,255,255,.08); color: #fff; }
    .btn.secondary:hover { background: rgba(255,255,255,.13); }
  `]
})
export class NotFoundComponent {}
