/* ============================================================
   NoteVerse — app logic
   Theme, navigation, scroll effects, typewriter, tilt,
   flashcard deck, notes accordion, toasts
   ============================================================ */

(() => {
  'use strict';

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  /* ---------- Toasts ---------- */
  const toastContainer = $('#toastContainer');
  function toast(message, type = '') {
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.textContent = message;
    toastContainer.appendChild(el);
    setTimeout(() => {
      el.classList.add('hide');
      setTimeout(() => el.remove(), 450);
    }, 3200);
  }

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('noteverse-theme');
  if (savedTheme) root.dataset.theme = savedTheme;

  $('#themeToggle').addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('noteverse-theme', next);
    toast(next === 'dark' ? '🌙 Dark mode on — easy on the eyes' : '☀️ Light mode on — fresh start', 'success');
  });

  /* ---------- Navbar ---------- */
  const navbar = $('#navbar');
  const navLinks = $('#navLinks');
  const hamburger = $('#hamburger');
  const toTop = $('#toTop');

  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 30);
    toTop.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  $$('.nav-link', navLinks).forEach(l => l.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }));

  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Scrollspy ---------- */
  const spySections = ['home', 'features', 'subjects', 'flashcards', 'notes']
    .map(id => document.getElementById(id));
  const spyObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        $$('.nav-link').forEach(l =>
          l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  spySections.forEach(s => s && spyObserver.observe(s));

  /* ---------- Reveal on scroll (staggered) ---------- */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  function observeReveals(scope = document) {
    $$('.reveal:not(.visible)', scope).forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${(i % 6) * 90}ms`);
      revealObserver.observe(el);
    });
  }
  observeReveals();

  /* ---------- Animated counters ---------- */
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      counterObserver.unobserve(el);
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const dur = 1600;
      const start = performance.now();
      (function tick(now) {
        const p = clamp((now - start) / dur, 0, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(start);
    });
  }, { threshold: 0.5 });
  $$('[data-count]').forEach(el => counterObserver.observe(el));

  /* ---------- Typewriter ---------- */
  const typeEl = $('#typewriter');
  const phrases = ['actually feels good.', 'sticks in your memory.', 'makes exams easy.', 'scores you top grades.'];
  let phraseIdx = 0, charIdx = 0, deleting = false;

  function typeTick() {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      charIdx++;
      typeEl.textContent = phrase.slice(0, charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        return setTimeout(typeTick, 2100);
      }
      return setTimeout(typeTick, 55);
    }
    charIdx--;
    typeEl.textContent = phrase.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      return setTimeout(typeTick, 400);
    }
    setTimeout(typeTick, 28);
  }
  setTimeout(typeTick, 900);

  /* ---------- Cursor glow & parallax ---------- */
  const cursorGlow = $('.cursor-glow');
  const floatSyms = $$('.float-sym');
  let mx = window.innerWidth / 2, my = window.innerHeight / 2, gx = mx, gy = my;

  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    floatSyms.forEach(sym => {
      const d = +sym.dataset.depth || 40;
      const ox = (e.clientX / window.innerWidth - 0.5) * d;
      const oy = (e.clientY / window.innerHeight - 0.5) * d;
      sym.style.translate = `${ox}px ${oy}px`;
    });
  }, { passive: true });

  (function glowLoop() {
    gx += (mx - gx) * 0.08;
    gy += (my - gy) * 0.08;
    cursorGlow.style.left = `${gx}px`;
    cursorGlow.style.top = `${gy}px`;
    requestAnimationFrame(glowLoop);
  })();

  /* ---------- Progress persistence ---------- */
  const store = {
    get(subjectId) {
      try { return JSON.parse(localStorage.getItem(`nv-progress-${subjectId}`)) || []; }
      catch { return []; }
    },
    set(subjectId, knownIds) {
      localStorage.setItem(`nv-progress-${subjectId}`, JSON.stringify(knownIds));
    },
  };

  /* ---------- Subjects grid ---------- */
  const subjectsGrid = $('#subjectsGrid');
  SUBJECTS.forEach((subject, i) => {
    const known = store.get(subject.id).length;
    const mastery = Math.round((known / subject.cards.length) * 100);
    const card = document.createElement('div');
    card.className = 'subject-card reveal';
    card.style.setProperty('--subject-color', subject.color);
    card.innerHTML = `
      <div class="subject-card-inner">
        <span class="subject-emoji">${subject.emoji}</span>
        <h3>${subject.name}</h3>
        <span class="subject-meta">${subject.tagline} · ${subject.cards.length} cards</span>
        <div class="subject-mastery"><div class="subject-mastery-fill" data-mastery="${mastery}"></div></div>
        <span class="subject-go">Study this subject →</span>
      </div>`;
    card.addEventListener('click', () => {
      selectDeckSubject(subject.id);
      document.getElementById('flashcards').scrollIntoView({ behavior: 'smooth' });
      toast(`📚 ${subject.name} deck loaded — ${subject.cards.length} cards`, 'success');
    });
    // 3D tilt on hover
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      const inner = $('.subject-card-inner', card);
      inner.style.transform = `rotateY(${px * 14}deg) rotateX(${-py * 14}deg) translateZ(6px)`;
      inner.style.setProperty('--mx', `${(px + 0.5) * 100}%`);
      inner.style.setProperty('--my', `${(py + 0.5) * 100}%`);
    });
    card.addEventListener('mouseleave', () => {
      $('.subject-card-inner', card).style.transform = '';
    });
    subjectsGrid.appendChild(card);
  });
  observeReveals(subjectsGrid);

  // Animate mastery bars when visible
  const masteryObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fill = $('.subject-mastery-fill', e.target);
        fill.style.width = `${fill.dataset.mastery}%`;
        masteryObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  $$('.subject-card').forEach(c => masteryObserver.observe(c));

  /* ---------- Flashcard deck ---------- */
  const deckTabs = $('#deckTabs');
  const flashcard = $('#flashcard');
  const flashcardInner = $('#flashcardInner');
  const cardQuestion = $('#cardQuestion');
  const cardAnswer = $('#cardAnswer');
  const deckCounter = $('#deckCounter');
  const deckKnown = $('#deckKnown');
  const deckProgressFill = $('#deckProgressFill');
  const deckComplete = $('#deckComplete');
  const completeText = $('#completeText');
  const btnKnown = $('#btnKnown');

  const deck = {
    subjectId: SUBJECTS[0].id,
    order: [],
    index: 0,
    known: [],
  };

  function buildTabs(container, activeId, onPick, cls) {
    SUBJECTS.forEach(s => {
      const btn = document.createElement('button');
      btn.className = `${cls}${s.id === activeId ? ' active' : ''}`;
      btn.innerHTML = `${s.emoji} ${s.name}`;
      btn.addEventListener('click', () => onPick(s.id));
      container.appendChild(btn);
    });
  }

  function loadDeck(subjectId, { keepPosition = false } = {}) {
    const subject = SUBJECTS.find(s => s.id === subjectId);
    deck.subjectId = subjectId;
    deck.order = subject.cards.map((_, i) => i);
    deck.known = store.get(subjectId);
    deck.index = keepPosition ? clamp(deck.index, 0, deck.order.length - 1) : 0;
    flashcard.classList.remove('flipped');
    deckComplete.classList.remove('show');
    $$('.deck-tab', deckTabs).forEach(t =>
      t.classList.toggle('active', t.textContent.includes(subject.name)));
    renderCard(true);
    updateMeta();
  }

  function currentCard() {
    const subject = SUBJECTS.find(s => s.id === deck.subjectId);
    return subject.cards[deck.order[deck.index]];
  }

  function renderCard(instant = false) {
    const card = currentCard();
    cardQuestion.textContent = card.q;
    cardAnswer.textContent = card.a;
    const isKnown = deck.known.includes(deck.order[deck.index]);
    btnKnown.classList.toggle('known-active', isKnown);
    btnKnown.textContent = isKnown ? '✓ Known' : '✓ Mark Known';
    if (!instant) {
      flashcard.classList.remove('swapping');
      void flashcard.offsetWidth; // restart animation
      flashcard.classList.add('swapping');
    }
  }

  function finishDeck() {
    const subject = SUBJECTS.find(s => s.id === deck.subjectId);
    const known = deck.known.length;
    const total = subject.cards.length;
    completeText.textContent = known === total
      ? `Perfect score! You know all ${total} ${subject.name} cards. 🏆`
      : `Deck complete! You know ${known} of ${total} cards — shuffle up and review the tricky ones.`;
    deckComplete.classList.add('show');
    if (known === total) toast('🏆 Perfect deck mastery!', 'success');
  }

  function updateMeta() {
    const subject = SUBJECTS.find(s => s.id === deck.subjectId);
    deckCounter.textContent = `Card ${deck.index + 1} / ${subject.cards.length}`;
    deckKnown.textContent = `✓ ${deck.known.length} known`;
    const pct = Math.round(((deck.index + 1) / subject.cards.length) * 100);
    deckProgressFill.style.width = `${pct}%`;
    // Refresh mastery bars on subject cards
    const knownCount = deck.known.length;
    $$('.subject-card').forEach((c, i) => {
      if (SUBJECTS[i].id === deck.subjectId) {
        const fill = $('.subject-mastery-fill', c);
        fill.style.width = `${Math.round((knownCount / subject.cards.length) * 100)}%`;
      }
    });
  }

  function flipCard() { flashcard.classList.toggle('flipped'); }

  function goTo(index) {
    const subject = SUBJECTS.find(s => s.id === deck.subjectId);
    if (index >= subject.cards.length) { finishDeck(); return; } // past the end = finish
    deck.index = clamp(index, 0, subject.cards.length - 1);
    flashcard.classList.remove('flipped');
    renderCard();
    updateMeta();
  }

  function markKnown() {
    const id = deck.order[deck.index];
    if (deck.known.includes(id)) {
      deck.known = deck.known.filter(k => k !== id);
      toast('↩️ Marked as "needs review"');
    } else {
      deck.known.push(id);
      toast('⭐ Marked as known — great job!', 'success');
    }
    store.set(deck.subjectId, deck.known);
    renderCard(true);
    updateMeta();
  }

  function shuffleDeck() {
    for (let i = deck.order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck.order[i], deck.order[j]] = [deck.order[j], deck.order[i]];
    }
    deck.index = 0;
    flashcard.classList.remove('flipped');
    renderCard();
    updateMeta();
    toast('⇄ Deck shuffled');
  }

  function resetDeck() {
    deck.known = [];
    deck.order = SUBJECTS.find(s => s.id === deck.subjectId).cards.map((_, i) => i);
    deck.index = 0;
    store.set(deck.subjectId, []);
    flashcard.classList.remove('flipped');
    deckComplete.classList.remove('show');
    renderCard();
    updateMeta();
    toast('↺ Progress reset for this deck', 'warn');
  }

  function selectDeckSubject(id) { loadDeck(id); }

  buildTabs(deckTabs, deck.subjectId, selectDeckSubject, 'deck-tab');

  flashcard.addEventListener('click', flipCard);
  $('#btnFlip').addEventListener('click', flipCard);
  $('#btnPrev').addEventListener('click', () => goTo(deck.index - 1));
  $('#btnNext').addEventListener('click', () => goTo(deck.index + 1));
  btnKnown.addEventListener('click', markKnown);
  $('#btnShuffle').addEventListener('click', shuffleDeck);
  $('#btnReset').addEventListener('click', resetDeck);
  $('#btnRestart').addEventListener('click', () => { resetDeck(); toast('🔥 Fresh start — let\'s go!', 'success'); });
  $('#btnPickSubject').addEventListener('click', () => {
    deckComplete.classList.remove('show');
    document.getElementById('subjects').scrollIntoView({ behavior: 'smooth' });
  });

  // Keyboard controls (when deck section is in view or card focused)
  document.addEventListener('keydown', e => {
    const deckVisible = $('#flashcards').getBoundingClientRect().top < window.innerHeight * 0.7
                     && $('#flashcards').getBoundingClientRect().bottom > window.innerHeight * 0.2;
    const typing = /INPUT|TEXTAREA/.test(document.activeElement?.tagName || '');
    if (typing) return;
    if (e.key === ' ' && (deckVisible || document.activeElement === flashcard)) {
      e.preventDefault(); flipCard();
    } else if (e.key === 'ArrowRight' && deckVisible) {
      goTo(deck.index + 1);
    } else if (e.key === 'ArrowLeft' && deckVisible) {
      goTo(deck.index - 1);
    } else if ((e.key === 'k' || e.key === 'K') && deckVisible) {
      markKnown();
    }
  });

  loadDeck(deck.subjectId, { keepPosition: true });

  /* ---------- Notes accordion ---------- */
  const notesTabs = $('#notesTabs');
  const notesList = $('#notesList');
  let activeNotesSubject = SUBJECTS[0].id;

  function renderNotes(subjectId) {
    activeNotesSubject = subjectId;
    const subject = SUBJECTS.find(s => s.id === subjectId);
    $$('.notes-tab', notesTabs).forEach(t =>
      t.classList.toggle('active', t.textContent.includes(subject.name)));
    notesList.innerHTML = '';
    subject.notes.forEach((note, i) => {
      const item = document.createElement('div');
      item.className = 'note-item';
      item.innerHTML = `
        <button class="note-head" aria-expanded="false">
          <span class="note-num">${String(i + 1).padStart(2, '0')}</span>
          <span class="note-title">${note.title}</span>
          <span class="note-chevron">▾</span>
        </button>
        <div class="note-body">
          <div class="note-body-inner"><ul>
            ${note.points.map(p => `<li>${p}</li>`).join('')}
          </ul></div>
        </div>`;
      const head = $('.note-head', item);
      const body = $('.note-body', item);
      head.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // close others
        $$('.note-item.open', notesList).forEach(o => {
          o.classList.remove('open');
          $('.note-body', o).style.maxHeight = '0px';
          $('.note-head', o).setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          body.style.maxHeight = `${body.scrollHeight}px`;
          head.setAttribute('aria-expanded', 'true');
        }
      });
      notesList.appendChild(item);
    });
    observeReveals(notesList);
  }

  buildTabs(notesTabs, activeNotesSubject, id => {
    renderNotes(id);
    toast(`📒 ${SUBJECTS.find(s => s.id === id).name} notes loaded`);
  }, 'notes-tab');
  renderNotes(activeNotesSubject);

  /* ---------- Welcome toast ---------- */
  setTimeout(() => toast('👋 Welcome to NoteVerse! Pick a subject to start revising.', 'success'), 1400);
})();
