:host { display: block; min-height: 100vh; color: #fff; font-family: 'IBM Plex Sans Thai', system-ui, sans-serif; }
.faculties-page { position: relative; min-height: 100vh; background: #000; }
.overlay-gradient { position: fixed; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,.7) 0%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.7) 80%, #000); z-index: 1; pointer-events: none; }
.content { position: relative; z-index: 3; max-width: 1000px; margin: 0 auto; padding: 0 1.5rem 3rem; }

.nav { display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 0 .5rem; }
.logo { font-size: 1.3rem; font-weight: 800; color: #e50914; text-decoration: none; letter-spacing: .08em; }
.nav-left { display: flex; align-items: center; gap: 1.5rem; }
.nav-links { display: flex; gap: 1rem; }
.nav-link { color: rgba(255,255,255,.6); text-decoration: none; font-size: .9rem; &:hover, &.active { color: #fff; } }
.avatar { width: 36px; height: 36px; border-radius: 50%; background: #e53935; display: flex; align-items: center; justify-content: center; font-weight: 700; cursor: pointer; }

.page-header { padding: 2.5rem 0 2rem; }
.page-header h1 { font-size: 2.2rem; font-weight: 700; margin-bottom: .4rem; }
.subtitle { color: rgba(255,255,255,.5); }

.loading-state { display: flex; justify-content: center; padding: 4rem 0; }
.spinner { width: 36px; height: 36px; border: 3px solid rgba(255,255,255,.1); border-top-color: #e53935; border-radius: 50%; animation: spin .7s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

.faculty-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
.empty-state { grid-column: 1/-1; text-align: center; padding: 4rem 0; color: rgba(255,255,255,.4); }

.faculty-card { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 14px; padding: 1.5rem; cursor: pointer; transition: all .2s; display: flex; flex-direction: column; gap: 1rem;
  &:hover { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.18); transform: translateY(-2px); }
}
.faculty-icon { font-size: 2.5rem; }
.faculty-body { flex: 1; }
.faculty-name { font-size: 1.05rem; font-weight: 700; line-height: 1.4; margin-bottom: .25rem; }
.faculty-name-en { font-size: .8rem; color: rgba(255,255,255,.4); margin-bottom: .5rem; }
.faculty-desc { font-size: .83rem; color: rgba(255,255,255,.5); line-height: 1.6; }

.faculty-footer { display: flex; justify-content: space-between; align-items: center; padding-top: .75rem; border-top: 1px solid rgba(255,255,255,.07); }
.course-count { font-size: .8rem; font-weight: 600; color: #e53935; background: rgba(229,57,53,.1); padding: .25rem .65rem; border-radius: 999px; }
.browse-link { font-size: .83rem; color: rgba(255,255,255,.45); }

.shortcut-row { display: flex; justify-content: center; margin: 2.5rem 0 1rem; }
.btn { display: inline-flex; align-items: center; gap: .4rem; padding: .7rem 1.8rem; border-radius: 10px; font-size: .95rem; font-weight: 600; cursor: pointer; text-decoration: none; border: none; font-family: inherit; transition: all .2s; }
.btn.primary { background: #e53935; color: #fff; &:hover { background: #ff5252; } }

.footer { text-align: center; padding: 2rem 0 1rem; }
.footer-copy { font-size: .8rem; color: rgba(255,255,255,.3); }

@media (max-width: 600px) { .nav-links { display: none; } }
