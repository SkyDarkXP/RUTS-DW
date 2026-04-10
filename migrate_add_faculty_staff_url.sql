.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.bg-deco {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;

  &.c1 {
    width: 400px;
    height: 400px;
    background: var(--accent-red);
    top: -100px;
    left: -100px;
  }
  &.c2 {
    width: 300px;
    height: 300px;
    background: #9c27b0;
    bottom: -80px;
    right: -80px;
  }
}

.login-box {
  width: 100%;
  max-width: 420px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 40px;
  position: relative;
  z-index: 1;
}

.login-logo {
  display: flex;
  align-items: baseline;
  margin-bottom: 24px;

  .logo-text { color: var(--accent-red); font-weight: 800; font-size: 22px; font-family: var(--font-en); }
  .logo-dash { color: var(--accent-red); font-weight: 800; font-size: 22px; }
  .logo-dw { color: var(--text-primary); font-weight: 800; font-size: 22px; font-family: var(--font-en); }
}

.login-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.login-sub {
  font-size: 13px;
  color: var(--text-muted);
  font-family: var(--font-en);
  margin-bottom: 28px;
}

.login-error {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(229,57,53,0.1);
  border: 1px solid rgba(229,57,53,0.3);
  border-radius: 8px;
  padding: 10px 14px;
  color: #ff6b6b;
  font-size: 13px;
  margin-bottom: 20px;
}

.input-wrap {
  position: relative;
  display: flex;
  align-items: center;

  .input-icon {
    position: absolute;
    left: 14px;
    color: var(--text-muted);
    pointer-events: none;
  }

  input {
    width: 100%;
    padding: 11px 44px 11px 44px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-primary);
    font-family: var(--font-thai);
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;

    &:focus { border-color: var(--accent-red); }
    &::placeholder { color: var(--text-muted); }
  }
}

.toggle-pw {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover { color: var(--text-primary); }
}

.btn-login {
  width: 100%;
  padding: 13px;
  background: var(--accent-red);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--font-thai);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 8px;

  &:hover:not(:disabled) {
    background: var(--accent-red-hover);
    box-shadow: 0 4px 20px var(--accent-red-glow);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.loading-dots span {
  animation: blink 1.2s infinite;
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }
}

@keyframes blink {
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 13px;
  margin-top: 20px;
  transition: color 0.2s;

  &:hover { color: var(--text-primary); }
}

.login-hint {
  margin-top: 16px;
  font-size: 11px;
  color: var(--text-muted);
  text-align: center;
  padding: 8px;
  background: var(--bg-secondary);
  border-radius: 6px;
  border: 1px solid var(--border-color);
}

/* ── BRUTE FORCE PROTECTION ── */
.lockout-bar {
  position: relative;
  width: 100%;
  height: 6px;
  background: rgba(229,57,53,.2);
  border-radius: 3px;
  margin: 8px 0 4px;
  overflow: hidden;
}
.lockout-progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #e53935;
  border-radius: 3px;
  transition: width .5s linear;
}
.lockout-text {
  display: block;
  font-size: 12px;
  color: rgba(255,255,255,.5);
  text-align: center;
  margin-top: 4px;
}
.attempt-warn {
  font-size: 12px;
  color: #ff9800;
  text-align: center;
  margin-bottom: 8px;
}
