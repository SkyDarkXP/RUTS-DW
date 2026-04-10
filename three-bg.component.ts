.row-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
  z-index: 2;
}

.row-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: .7rem;
}

.row-title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 .5rem .5rem;
}

.row-scroll {
  display: flex;
  gap: .75rem;
  overflow-x: auto;
  padding: .5rem .5rem .8rem;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar { height: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 999px; }
}

.movie-card {
  flex: 0 0 auto;
  width: 170px;
  border-radius: .75rem;
  overflow: hidden;
  background: rgba(20,20,20,0.9);
  cursor: pointer;
  transform: translateY(0);
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
  scroll-snap-align: start;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 14px 40px rgba(0,0,0,0.7);
    background: rgba(40,40,40,0.95);
  }
}

.thumb {
  width: 100%;
  padding-top: 150%;
  background-size: cover;
  background-position: center;
  background-color: #1a1a2e;
  position: relative;

  &.thumb-placeholder {
    background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
  }
}

.detail-btn {
  position: absolute;
  bottom: .4rem;
  right: .4rem;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255,255,255,.15);
  color: #fff;
  text-decoration: none;
  font-size: .9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity .2s, background .2s;

  .movie-card:hover & {
    opacity: 1;
  }

  &:hover {
    background: rgba(229,57,53,.8);
  }
}

.info {
  padding: .4rem .5rem .5rem;
  color: #fff;
}

.title {
  font-size: .8rem;
  font-weight: 500;
  line-height: 1.1rem;
  margin-bottom: .25rem;
}

.meta {
  font-size: .7rem;
  display: flex;
  align-items: center;
  gap: .35rem;
  opacity: .8;
  flex-wrap: wrap;
}

.badge {
  padding: .05rem .35rem;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.5);
}

@media (max-width: 1024px) {
  .row-title { font-size: 1rem; margin-left: .25rem; }
  .movie-card { width: 150px; }
}

@media (max-width: 768px) {
  .row-wrapper { margin-bottom: 1.2rem; }
  .row-title { font-size: .95rem; margin-left: .2rem; }
  .row-scroll { gap: .6rem; padding-inline: .2rem; }
  .movie-card { width: 130px; }
  .title { font-size: .75rem; }
  .meta { font-size: .65rem; }
}

@media (max-width: 480px) {
  .movie-card { width: 115px; }
  .row-title { font-size: .9rem; }
}

/* ── SKELETON ── */
@keyframes shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
.shimmer {
  background: linear-gradient(90deg, rgba(255,255,255,.04) 25%, rgba(255,255,255,.1) 50%, rgba(255,255,255,.04) 75%);
  background-size: 800px 100%;
  animation: shimmer 1.5s infinite;
}
.skeleton-card {
  flex: 0 0 auto;
  width: 170px;
  border-radius: .75rem;
  overflow: hidden;
  background: rgba(20,20,20,.9);
  scroll-snap-align: start;
}
.skeleton-thumb { width: 100%; padding-top: 150%; }
.skeleton-info { padding: .4rem .5rem .5rem; }
.skeleton-line {
  height: 10px;
  border-radius: 5px;
  margin-bottom: 6px;
  &.long { width: 85%; }
  &.short { width: 55%; }
}

/* ── COMPARE BUTTON ── */
.thumb { position: relative; }
.compare-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,.6);
  background: rgba(0,0,0,.55);
  color: #fff;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity .15s, background .15s;
  &.active { opacity: 1; background: #e53935; border-color: #e53935; }
}
.movie-card:hover .compare-btn { opacity: 1; }
.movie-card.compare-selected { outline: 2px solid #e53935; outline-offset: 2px; }

@media (max-width: 768px) {
  .skeleton-card { width: 130px; }
  .compare-btn { opacity: 1; }
}
@media (max-width: 480px) {
  .skeleton-card { width: 115px; }
}
