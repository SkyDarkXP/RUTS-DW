.users-panel { display: flex; flex-direction: column; gap: 1.2rem; }

.panel-header { display: flex; justify-content: space-between; align-items: flex-start; }
.panel-title { font-size: 1.4rem; font-weight: 700; margin-bottom: .2rem; }
.panel-sub { font-size: .85rem; color: rgba(255,255,255,.45); }

.info-note { display: flex; align-items: center; gap: .6rem; font-size: .82rem; color: rgba(255,255,255,.5); background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 8px; padding: .7rem 1rem; strong { color: rgba(255,255,255,.75); } }

.loading-row { display: flex; justify-content: center; padding: 2rem; }
.mini-spinner { width: 28px; height: 28px; border: 2.5px solid rgba(255,255,255,.1); border-top-color: #e53935; border-radius: 50%; animation: spin .7s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

.table-wrap { overflow-x: auto; border-radius: 12px; border: 1px solid rgba(255,255,255,.08); }
.users-table { width: 100%; border-collapse: collapse; font-size: .88rem; }
.users-table thead tr { background: rgba(255,255,255,.05); border-bottom: 1px solid rgba(255,255,255,.08); }
.users-table th { padding: .75rem 1rem; text-align: left; font-size: .75rem; font-weight: 600; color: rgba(255,255,255,.45); letter-spacing: .05em; text-transform: uppercase; }
.users-table tbody tr { border-bottom: 1px solid rgba(255,255,255,.05); transition: background .15s;
  &:last-child { border-bottom: none; }
  &:hover { background: rgba(255,255,255,.03); }
  &.me { background: rgba(99,102,241,.05); }
}
.users-table td { padding: .8rem 1rem; color: rgba(255,255,255,.8); }

.user-cell { display: flex; align-items: center; gap: .7rem; }
.user-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,.1); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: .85rem; flex-shrink: 0;
  &.admin-av { background: rgba(229,57,53,.25); color: #ff6b6b; }
}
.user-fullname { font-weight: 500; }
.me-tag { font-size: .68rem; background: rgba(99,102,241,.2); color: #818cf8; padding: .15rem .5rem; border-radius: 999px; }
.username-code { font-family: 'Space Mono', monospace; font-size: .82rem; background: rgba(255,255,255,.07); padding: .2rem .55rem; border-radius: 5px; color: rgba(255,255,255,.7); }
.role-badge { font-size: .75rem; font-weight: 600; padding: .25rem .65rem; border-radius: 999px;
  &.admin { background: rgba(229,57,53,.15); color: #ff6b6b; border: 1px solid rgba(229,57,53,.25); }
  &.editor { background: rgba(46,160,67,.12); color: #3fb950; border: 1px solid rgba(46,160,67,.2); }
}
.date-cell { font-size: .8rem; color: rgba(255,255,255,.4); }
.row-actions { display: flex; gap: .4rem; }
.icon-btn { width: 30px; height: 30px; border-radius: 6px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.04); color: rgba(255,255,255,.5); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all .15s;
  &.edit:hover { background: rgba(99,102,241,.15); color: #818cf8; border-color: rgba(99,102,241,.3); }
  &.delete:hover:not(:disabled) { background: rgba(229,57,53,.15); color: #ff6b6b; border-color: rgba(229,57,53,.3); }
  &:disabled { opacity: .3; cursor: not-allowed; }
}
.empty-users { text-align: center; padding: 3rem; color: rgba(255,255,255,.3); font-size: .88rem; }

/* TOAST */
.toast-stack { position: fixed; bottom: 1.5rem; right: 1.5rem; display: flex; flex-direction: column; gap: .5rem; z-index: 9999; pointer-events: none; }
.toast { padding: .7rem 1.2rem; border-radius: 8px; font-size: .88rem; font-weight: 500; animation: fadeIn .2s ease;
  &.success { background: rgba(46,160,67,.9); color: #fff; }
  &.error { background: rgba(229,57,53,.9); color: #fff; }
}
@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

/* MODAL */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.7); z-index: 1000; display: flex; align-items: center; justify-content: center; }
.modal-box { background: #1a1a2e; border: 1px solid rgba(255,255,255,.1); border-radius: 14px; padding: 1.8rem; width: 100%; max-width: 440px; }
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.4rem; }
.modal-header h3 { font-size: 1.1rem; font-weight: 700; }
.modal-close { background: none; border: none; color: rgba(255,255,255,.5); cursor: pointer; font-size: 1.1rem; &:hover { color: #fff; } }

.user-form { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.4rem; }
.form-group { display: flex; flex-direction: column; gap: .4rem; }
.form-group label { font-size: .8rem; color: rgba(255,255,255,.5); }
.form-group input, .form-group select { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12); border-radius: 8px; color: #fff; padding: .65rem .9rem; font-size: .9rem; font-family: inherit; outline: none; transition: border-color .2s;
  &:focus { border-color: rgba(229,57,53,.5); }
  &[readonly] { opacity: .5; cursor: not-allowed; }
}
.form-group select option { background: #1a1a2e; }
.pw-wrap { position: relative; }
.pw-wrap input { width: 100%; padding-right: 2.8rem; }
.pw-toggle { position: absolute; right: .7rem; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: .95rem; }

.modal-footer { display: flex; justify-content: flex-end; gap: .75rem; }

/* CONFIRM BOX */
.confirm-box { max-width: 380px; text-align: center; }
.confirm-icon { font-size: 2.5rem; margin-bottom: .75rem; }
.confirm-box h3 { font-size: 1.15rem; margin-bottom: .5rem; }
.confirm-box p { font-size: .88rem; color: rgba(255,255,255,.6); margin-bottom: 1.5rem; strong { color: #fff; } }

/* BUTTONS */
.btn-primary { display: inline-flex; align-items: center; gap: 6px; padding: 9px 20px; background: #e53935; color: #fff; border: none; border-radius: 8px; font-size: .88rem; font-weight: 600; cursor: pointer; font-family: inherit; transition: background .2s;
  &:hover:not(:disabled) { background: #ff5252; }
  &:disabled { opacity: .5; cursor: not-allowed; }
}
.btn-cancel { padding: 9px 20px; background: rgba(255,255,255,.07); color: rgba(255,255,255,.7); border: 1px solid rgba(255,255,255,.12); border-radius: 8px; font-size: .88rem; cursor: pointer; font-family: inherit; &:hover { background: rgba(255,255,255,.11); } }
.btn-danger { padding: 9px 20px; background: rgba(229,57,53,.2); color: #ff6b6b; border: 1px solid rgba(229,57,53,.3); border-radius: 8px; font-size: .88rem; font-weight: 600; cursor: pointer; font-family: inherit; &:hover { background: rgba(229,57,53,.35); } }
