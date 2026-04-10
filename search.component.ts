:host { display: block; min-height: 100vh; color: #fff; font-family: 'IBM Plex Sans Thai', system-ui, sans-serif; }

.detail-page { position: relative; min-height: 100vh; background: #000; }
.overlay-gradient { position: fixed; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,.7) 0%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.7) 80%, #000); z-index: 1; pointer-events: none; }
.content { position: relative; z-index: 3; max-width: 960px; margin: 0 auto; padding: 0 1.5rem 3rem; }

/* NAV */
.nav { display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 0 .5rem; }
.logo { font-size: 1.3rem; font-weight: 800; color: #e50914; text-decoration: none; letter-spacing: .08em; }
.nav-left { display: flex; align-items: center; gap: 1.5rem; }
.nav-links { display: flex; gap: 1rem; }
.nav-link { color: rgba(255,255,255,.7); text-decoration: none; font-size: .9rem; transition: color .2s; &:hover { color: #fff; } }
.avatar { width: 36px; height: 36px; border-radius: 50%; background: #e53935; display: flex; align-items: center; justify-content: center; font-weight: 700; cursor: pointer; font-size: .9rem; }

/* LOADING */
.loading-state { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; gap: 1rem; color: rgba(255,255,255,.5); }
.spinner { width: 40px; height: 40px; border: 3px solid rgba(255,255,255,.1); border-top-color: #e53935; border-radius: 50%; animation: spin .7s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

/* NOT FOUND */
.not-found-state { text-align: center; padding: 6rem 0; }
.nf-icon { font-size: 4rem; margin-bottom: 1rem; }
.not-found-state h2 { font-size: 1.8rem; margin-bottom: .5rem; }
.not-found-state p { color: rgba(255,255,255,.5); margin-bottom: 2rem; }

/* BREADCRUMB */
.breadcrumb { font-size: .85rem; color: rgba(255,255,255,.5); margin: 1rem 0 1.5rem; display: flex; align-items: center; flex-wrap: wrap; gap: .35rem; }
.breadcrumb a { color: rgba(255,255,255,.5); text-decoration: none; &:hover { color: #fff; } }
.sep { opacity: .4; }

/* HERO */
.detail-hero { position: relative; border-radius: 16px; overflow: hidden; min-height: 320px; background: #12121f; margin-bottom: 2rem; display: flex; align-items: flex-end; }
.detail-hero.no-image { background: linear-gradient(135deg, #1a1a2e, #0f0f1a); }
.hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .35; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,.95) 0%, rgba(0,0,0,.4) 60%, transparent 100%); }
.hero-content { position: relative; padding: 2rem; width: 100%; }
.faculty-label { font-size: .85rem; color: rgba(255,255,255,.6); margin-bottom: .5rem; }
.course-title { font-size: clamp(1.5rem, 4vw, 2.2rem); font-weight: 700; line-height: 1.3; margin-bottom: .4rem; }
.course-title-en { font-size: 1rem; color: rgba(255,255,255,.6); margin-bottom: 1rem; }
.badges { display: flex; gap: .5rem; flex-wrap: wrap; margin-bottom: 1.2rem; }
.badge { padding: .3rem .8rem; border-radius: 999px; font-size: .8rem; font-weight: 600; }
.badge.red { background: rgba(229,57,53,.2); color: #ff6b6b; border: 1px solid rgba(229,57,53,.4); }
.badge.gray { background: rgba(255,255,255,.08); color: rgba(255,255,255,.7); border: 1px solid rgba(255,255,255,.1); }
.hero-actions { display: flex; gap: .75rem; flex-wrap: wrap; }

/* BUTTONS */
.btn { display: inline-flex; align-items: center; gap: .4rem; padding: .6rem 1.4rem; border-radius: 8px; font-size: .9rem; font-weight: 600; cursor: pointer; text-decoration: none; border: none; transition: all .2s; }
.btn.primary { background: #e53935; color: #fff; &:hover { background: #ff5252; } }
.btn.secondary { background: rgba(255,255,255,.1); color: #fff; &:hover { background: rgba(255,255,255,.15); } }
.btn.share { background: rgba(255,255,255,.08); color: rgba(255,255,255,.8); border: 1px solid rgba(255,255,255,.15); &:hover { background: rgba(255,255,255,.12); } }
.btn.outline { background: transparent; color: rgba(255,255,255,.7); border: 1px solid rgba(255,255,255,.2); &:hover { border-color: rgba(255,255,255,.4); color: #fff; } }

/* SECTIONS GRID */
.sections-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; }
.section-card { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 12px; padding: 1.5rem; }
.section-card.full { grid-column: 1 / -1; }
.section-title { font-size: 1rem; font-weight: 700; color: rgba(255,255,255,.9); margin-bottom: 1rem; padding-bottom: .6rem; border-bottom: 1px solid rgba(255,255,255,.07); }
.section-text { font-size: .92rem; line-height: 1.7; color: rgba(255,255,255,.7); }

/* DEGREE TABLE */
.degree-table { display: flex; flex-direction: column; gap: .6rem; }
.degree-row { display: flex; gap: .75rem; align-items: baseline; font-size: .88rem; }
.degree-label { flex-shrink: 0; color: rgba(255,255,255,.45); width: 110px; font-size: .8rem; }
.degree-value { color: rgba(255,255,255,.85); }

/* PROGRAM FORMAT */
.pf-table { display: flex; flex-direction: column; gap: .5rem; }
.pf-row { display: flex; gap: .75rem; font-size: .88rem; }
.pf-label { flex-shrink: 0; color: rgba(255,255,255,.45); width: 120px; font-size: .8rem; }
.pf-value { color: rgba(255,255,255,.85); }

/* CAREER LIST */
.career-list { padding-left: 1.2rem; display: flex; flex-direction: column; gap: .4rem; }
.career-list li { font-size: .88rem; color: rgba(255,255,255,.75); line-height: 1.6; }

/* LINKS */
.link-list { display: flex; flex-direction: column; gap: .6rem; }
.link-item { display: flex; align-items: center; gap: .85rem; padding: .85rem 1rem; background: rgba(255,255,255,.05); border-radius: 8px; text-decoration: none; color: #fff; transition: background .2s; width: 100%; border: none; cursor: pointer; text-align: left; font-family: inherit; }
.link-item:hover { background: rgba(255,255,255,.09); }
.link-icon { font-size: 1.4rem; flex-shrink: 0; }
.link-item > div { flex: 1; }
.link-item strong { font-size: .9rem; }
.link-item small { font-size: .78rem; color: rgba(255,255,255,.5); }
.link-arrow { color: rgba(255,255,255,.4); }

/* MODAL */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.75); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 1rem; backdrop-filter: blur(4px); }
.modal-box { background: #111; border: 1px solid rgba(255,255,255,.1); border-radius: 16px; width: 100%; max-width: 900px; max-height: 90vh; display: flex; flex-direction: column; overflow: hidden; }
.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 1.2rem 1.5rem; border-bottom: 1px solid rgba(255,255,255,.08); flex-shrink: 0; }
.modal-title { font-size: 1rem; font-weight: 700; color: #fff; margin: 0; line-height: 1.4; }
.modal-close { background: none; border: none; color: rgba(255,255,255,.5); font-size: 1.2rem; cursor: pointer; padding: .3rem .5rem; border-radius: 6px; transition: all .2s; &:hover { background: rgba(255,255,255,.08); color: #fff; } }
.modal-body { flex: 1; position: relative; min-height: 400px; overflow: hidden; }
.modal-loading { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; color: rgba(255,255,255,.5); }
.modal-iframe { width: 100%; height: 100%; min-height: 500px; border: none; background: #fff; }
.modal-footer { display: flex; align-items: center; justify-content: flex-end; gap: .75rem; padding: 1rem 1.5rem; border-top: 1px solid rgba(255,255,255,.08); flex-shrink: 0; }

@media (max-width: 640px) {
  .modal-box { max-height: 95vh; border-radius: 12px; }
  .modal-iframe { min-height: 400px; }
}

/* CONTACT */
.contact-list { display: flex; flex-direction: column; gap: .45rem; }
.contact-item { display: flex; align-items: center; gap: .6rem; padding: .55rem .85rem; background: rgba(255,255,255,.04); border-radius: 7px; color: rgba(255,255,255,.8); text-decoration: none; font-size: .88rem; &:not(.no-link):hover { background: rgba(255,255,255,.08); } }

/* BACK ROW */
.back-row { display: flex; gap: .75rem; margin-top: 2rem; }

/* FOOTER */
.footer { text-align: center; padding: 2rem 0 1rem; }
.footer-copy { font-size: .8rem; color: rgba(255,255,255,.3); }

@media (max-width: 640px) {
  .sections-grid { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .hero-content { padding: 1.2rem; }
}
