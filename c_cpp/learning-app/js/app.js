(function () {
  'use strict';

  // ── State ──
  const state = {
    currentPage: 'home',
    currentLang: null,       // 'c' | 'cpp'
    currentChapter: null,    // chapter id
    quizState: null,
    progress: loadProgress()
  };

  // ── Data helpers ──
  function getChapters(lang) {
    return lang === 'c' ? window.C_CHAPTERS : window.CPP_CHAPTERS;
  }

  function getChapter(lang, id) {
    return getChapters(lang).find(ch => ch.id === id);
  }

  // ── Progress persistence ──
  function loadProgress() {
    try {
      const raw = localStorage.getItem('cpp_learn_progress');
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return { c: {}, cpp: {} };
  }

  function saveProgress() {
    localStorage.setItem('cpp_learn_progress', JSON.stringify(state.progress));
  }

  function getChapterProgress(lang, id) {
    return state.progress[lang]?.[id] || { status: 'not-started', score: null };
  }

  function setChapterStatus(lang, id, status) {
    if (!state.progress[lang]) state.progress[lang] = {};
    if (!state.progress[lang][id]) state.progress[lang][id] = { status: 'not-started', score: null };
    state.progress[lang][id].status = status;
    saveProgress();
  }

  function setChapterScore(lang, id, score) {
    if (!state.progress[lang]) state.progress[lang] = {};
    if (!state.progress[lang][id]) state.progress[lang][id] = { status: 'not-started', score: null };
    state.progress[lang][id].score = score;
    saveProgress();
  }

  function calcOverallProgress(lang) {
    const chapters = getChapters(lang);
    let completed = 0;
    chapters.forEach(ch => {
      if (getChapterProgress(lang, ch.id).status === 'completed') completed++;
    });
    return { completed, total: chapters.length, pct: Math.round((completed / chapters.length) * 100) };
  }

  // ── DOM refs ──
  const $ = sel => document.querySelector(sel);
  const $$ = sel => document.querySelectorAll(sel);

  // ── Router ──
  function navigate(page, opts = {}) {
    $$('.page').forEach(p => p.classList.remove('active'));
    const target = $(`#page-${page}`);
    if (target) target.classList.add('active');

    $$('.nav-item').forEach(n => n.classList.remove('active'));
    const navMatch = $(`.nav-item[data-page="${page}"]`);
    if (navMatch) navMatch.classList.add('active');

    state.currentPage = page;
    if (opts.lang) state.currentLang = opts.lang;
    if (opts.chapterId) state.currentChapter = opts.chapterId;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (page) {
      case 'home': renderHome(); break;
      case 'c-chapters': renderChapterList('c'); break;
      case 'cpp-chapters': renderChapterList('cpp'); break;
      case 'chapter-detail': renderChapterDetail(opts.lang, opts.chapterId); break;
      case 'c-quiz': renderQuizList('c'); break;
      case 'cpp-quiz': renderQuizList('cpp'); break;
      case 'quiz-detail': startQuiz(opts.lang, opts.chapterId); break;
      case 'quiz-result': renderQuizResult(); break;
      case 'quiz-review': renderQuizReview(); break;
      case 'progress': renderProgressPage(); break;
    }
  }

  // ── Render: Home ──
  function renderHome() {
    ['c', 'cpp'].forEach(lang => {
      const p = calcOverallProgress(lang);
      const bar = $(`#${lang}-home-progress`);
      const text = $(`#${lang}-home-progress-text`);
      if (bar) bar.style.width = p.pct + '%';
      if (text) text.textContent = p.pct + '% 完成';
    });
  }

  // ── Render: Chapter List ──
  function renderChapterList(lang) {
    const container = $(`#${lang}-chapter-list`);
    const chapters = getChapters(lang);
    container.innerHTML = chapters.map(ch => {
      const prog = getChapterProgress(lang, ch.id);
      const statusClass = prog.status;
      const statusLabel = { 'not-started': '未学习', 'in-progress': '学习中', 'completed': '已完成' }[prog.status] || '未学习';
      const scoreHtml = prog.score !== null ? `<span class="ch-score">测验: ${prog.score}%</span>` : '';
      return `
        <div class="chapter-card" data-lang="${lang}" data-id="${ch.id}">
          <div class="ch-num">第 ${ch.id} 章</div>
          <h4>${ch.title}</h4>
          <p class="ch-desc">${ch.description}</p>
          <span class="ch-status ${statusClass}">${statusLabel}</span>
          ${scoreHtml}
        </div>`;
    }).join('');

    container.querySelectorAll('.chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        const l = card.dataset.lang;
        const id = parseInt(card.dataset.id);
        const prog = getChapterProgress(l, id);
        if (prog.status === 'not-started') setChapterStatus(l, id, 'in-progress');
        navigate('chapter-detail', { lang: l, chapterId: id });
      });
    });
  }

  // ── Render: Chapter Detail ──
  function renderChapterDetail(lang, chapterId) {
    const ch = getChapter(lang, chapterId);
    if (!ch) return;

    const article = $('#chapter-content');
    article.innerHTML = ch.content;

    Prism.highlightAllUnder(article);

    const chapters = getChapters(lang);
    const idx = chapters.findIndex(c => c.id === chapterId);
    const prevBtn = $('#btn-prev-chapter');
    const nextBtn = $('#btn-next-chapter');
    prevBtn.style.display = idx > 0 ? '' : 'none';
    nextBtn.style.display = idx < chapters.length - 1 ? '' : 'none';

    prevBtn.onclick = () => navigate('chapter-detail', { lang, chapterId: chapters[idx - 1].id });
    nextBtn.onclick = () => navigate('chapter-detail', { lang, chapterId: chapters[idx + 1].id });

    $('#btn-back-chapters').onclick = () => navigate(lang === 'c' ? 'c-chapters' : 'cpp-chapters', { lang });

    const prog = getChapterProgress(lang, chapterId);
    const markBtn = $('#btn-mark-complete');
    if (prog.status === 'completed') {
      markBtn.textContent = '已学完 ✓';
      markBtn.disabled = true;
    } else {
      markBtn.textContent = '标记为已学完';
      markBtn.disabled = false;
      markBtn.onclick = () => {
        setChapterStatus(lang, chapterId, 'completed');
        markBtn.textContent = '已学完 ✓';
        markBtn.disabled = true;
      };
    }

    $('#btn-start-quiz').onclick = () => navigate('quiz-detail', { lang, chapterId });
  }

  // ── Render: Quiz List ──
  function renderQuizList(lang) {
    const container = $(`#${lang}-quiz-list`);
    const chapters = getChapters(lang);
    container.innerHTML = chapters.map(ch => {
      const prog = getChapterProgress(lang, ch.id);
      const scoreHtml = prog.score !== null
        ? `<span class="ch-status completed">最高分: ${prog.score}%</span>`
        : `<span class="ch-status not-started">${ch.questions.length} 题</span>`;
      return `
        <div class="chapter-card" data-lang="${lang}" data-id="${ch.id}">
          <div class="ch-num">第 ${ch.id} 章</div>
          <h4>${ch.title}</h4>
          <p class="ch-desc">${ch.questions.length} 道练习题</p>
          ${scoreHtml}
        </div>`;
    }).join('');

    container.querySelectorAll('.chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        navigate('quiz-detail', { lang: card.dataset.lang, chapterId: parseInt(card.dataset.id) });
      });
    });
  }

  // ── Quiz Engine ──
  function startQuiz(lang, chapterId) {
    const ch = getChapter(lang, chapterId);
    if (!ch) return;

    state.quizState = {
      lang,
      chapterId,
      questions: ch.questions,
      currentIdx: 0,
      answers: new Array(ch.questions.length).fill(null),
      checked: new Array(ch.questions.length).fill(false)
    };

    $('#quiz-title').textContent = `第 ${chapterId} 章: ${ch.title}`;
    $('#quiz-total').textContent = ch.questions.length;

    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const qs = state.quizState;
    if (!qs) return;
    const q = qs.questions[qs.currentIdx];
    const idx = qs.currentIdx;

    $('#quiz-current').textContent = idx + 1;

    const typeLabels = { choice: '选择题', truefalse: '判断题', output: '程序输出题' };
    const typeClass = q.type;

    const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
    const optionsHtml = q.options.map((opt, i) => {
      let cls = '';
      if (qs.checked[idx]) {
        if (i === q.answer) cls = 'correct';
        else if (i === qs.answers[idx] && i !== q.answer) cls = 'wrong';
      } else if (qs.answers[idx] === i) {
        cls = 'selected';
      }
      return `<div class="q-option ${cls}" data-idx="${i}">
        <span class="opt-label">${optionLabels[i]}</span>
        <span class="opt-text">${opt}</span>
      </div>`;
    }).join('');

    const explVisible = qs.checked[idx] ? 'visible' : '';

    $('#quiz-body').innerHTML = `
      <div class="quiz-question">
        <span class="q-type ${typeClass}">${typeLabels[q.type]}</span>
        <div class="q-text">${q.question}</div>
        <div class="q-options">${optionsHtml}</div>
        <div class="q-explanation ${explVisible}">${q.explanation}</div>
      </div>`;

    Prism.highlightAllUnder($('#quiz-body'));

    if (!qs.checked[idx]) {
      $('#quiz-body').querySelectorAll('.q-option').forEach(opt => {
        opt.addEventListener('click', () => {
          qs.answers[idx] = parseInt(opt.dataset.idx);
          renderQuizQuestion();
        });
      });
    }

    updateQuizButtons();
  }

  function updateQuizButtons() {
    const qs = state.quizState;
    const idx = qs.currentIdx;
    const isLast = idx === qs.questions.length - 1;
    const isFirst = idx === 0;

    const checkBtn = $('#btn-quiz-check');
    const nextBtn = $('#btn-quiz-next');
    const finishBtn = $('#btn-quiz-finish');
    const prevBtn = $('#btn-quiz-prev');

    prevBtn.style.display = isFirst ? 'none' : '';
    prevBtn.onclick = () => { qs.currentIdx--; renderQuizQuestion(); };

    if (qs.checked[idx]) {
      checkBtn.style.display = 'none';
      if (isLast) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = '';
      } else {
        nextBtn.style.display = '';
        finishBtn.style.display = 'none';
      }
    } else {
      checkBtn.style.display = '';
      checkBtn.disabled = qs.answers[idx] === null;
      nextBtn.style.display = 'none';
      finishBtn.style.display = 'none';
    }
  }

  function checkAnswer() {
    const qs = state.quizState;
    qs.checked[qs.currentIdx] = true;
    renderQuizQuestion();
  }

  function nextQuestion() {
    state.quizState.currentIdx++;
    renderQuizQuestion();
  }

  function finishQuiz() {
    const qs = state.quizState;
    let correct = 0;
    qs.questions.forEach((q, i) => { if (qs.answers[i] === q.answer) correct++; });
    const pct = Math.round((correct / qs.questions.length) * 100);

    const prevScore = getChapterProgress(qs.lang, qs.chapterId).score;
    if (prevScore === null || pct > prevScore) {
      setChapterScore(qs.lang, qs.chapterId, pct);
    }

    qs.score = pct;
    qs.correct = correct;

    navigate('quiz-result');
  }

  // ── Render: Quiz Result ──
  function renderQuizResult() {
    const qs = state.quizState;
    if (!qs) return;

    const pct = qs.score;
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (pct / 100) * circumference;

    $('#result-score').textContent = pct + '%';
    const ring = $('#result-ring');
    ring.style.strokeDasharray = circumference;
    setTimeout(() => { ring.style.strokeDashoffset = offset; }, 50);

    const total = qs.questions.length;
    const correct = qs.correct;
    let msg = `共 ${total} 题，答对 ${correct} 题。`;
    if (pct >= 90) msg += '太棒了，掌握得非常好！';
    else if (pct >= 70) msg += '不错，继续加油！';
    else if (pct >= 50) msg += '还需要多复习一下哦。';
    else msg += '建议重新学习本章内容后再来挑战。';
    $('#result-summary').textContent = msg;

    $('#btn-review-quiz').onclick = () => navigate('quiz-review');
    $('#btn-retry-quiz').onclick = () => navigate('quiz-detail', { lang: qs.lang, chapterId: qs.chapterId });
    $('#btn-result-home').onclick = () => navigate('home');
  }

  // ── Render: Quiz Review ──
  function renderQuizReview() {
    const qs = state.quizState;
    if (!qs) return;

    $('#review-title').textContent = `第 ${qs.chapterId} 章 答题解析`;
    $('#btn-back-result').onclick = () => navigate('quiz-result');

    const optLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
    const body = $('#review-body');
    body.innerHTML = qs.questions.map((q, i) => {
      const userAns = qs.answers[i];
      const isCorrect = userAns === q.answer;
      const ansClass = isCorrect ? 'correct-answer' : 'wrong-answer';
      const userLabel = userAns !== null ? optLabels[userAns] : '未作答';
      const correctLabel = optLabels[q.answer];
      const ansText = isCorrect
        ? `你的答案: ${userLabel} (正确)`
        : `你的答案: ${userLabel}，正确答案: ${correctLabel}`;
      return `
        <div class="review-item">
          <div class="q-number">第 ${i + 1} 题</div>
          <div class="q-text">${q.question}</div>
          <div class="review-answer ${ansClass}">${ansText}</div>
          <div class="review-explanation">${q.explanation}</div>
        </div>`;
    }).join('');

    Prism.highlightAllUnder(body);
  }

  // ── Render: Progress Page ──
  function renderProgressPage() {
    ['c', 'cpp'].forEach(lang => {
      const p = calcOverallProgress(lang);
      $(`#${lang}-overall-progress`).style.width = p.pct + '%';
      $(`#${lang}-overall-text`).textContent = `${p.completed} / ${p.total} 章节完成`;

      const details = $(`#${lang}-progress-details`);
      const chapters = getChapters(lang);
      details.innerHTML = chapters.map(ch => {
        const prog = getChapterProgress(lang, ch.id);
        const statusLabel = { 'not-started': '未学习', 'in-progress': '学习中', 'completed': '已完成' }[prog.status] || '未学习';
        const statusClass = prog.status;
        const scoreText = prog.score !== null ? `${prog.score}%` : '-';
        return `
          <div class="progress-row">
            <span class="pr-name">第${ch.id}章 ${ch.title}</span>
            <span class="pr-status ${statusClass}">${statusLabel}</span>
            <span class="pr-score">${scoreText}</span>
          </div>`;
      }).join('');
    });
  }

  // ── Theme Toggle ──
  function initTheme() {
    const saved = localStorage.getItem('cpp_learn_theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cpp_learn_theme', next);
  }

  // ── Sidebar Toggle ──
  function toggleSidebar() {
    const sidebar = $('#sidebar');
    sidebar.classList.toggle('open');
  }

  // ── Event Bindings ──
  function bindEvents() {
    $('#theme-toggle').addEventListener('click', toggleTheme);
    $('#sidebar-toggle').addEventListener('click', toggleSidebar);
    $('#logo-home').addEventListener('click', () => navigate('home'));

    $$('.nav-item').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        const page = item.dataset.page;
        if (page) navigate(page, { lang: page.startsWith('c-') ? 'c' : page.startsWith('cpp-') ? 'cpp' : null });
        if (window.innerWidth <= 900) $('#sidebar').classList.remove('open');
      });
    });

    $('[data-action="start-c"]').addEventListener('click', () => navigate('c-chapters', { lang: 'c' }));
    $('[data-action="start-cpp"]').addEventListener('click', () => navigate('cpp-chapters', { lang: 'cpp' }));

    $('#btn-quiz-check').addEventListener('click', checkAnswer);
    $('#btn-quiz-next').addEventListener('click', nextQuestion);
    $('#btn-quiz-finish').addEventListener('click', finishQuiz);
    $('#btn-back-quiz').addEventListener('click', () => {
      const lang = state.currentLang;
      navigate(lang === 'c' ? 'c-quiz' : 'cpp-quiz', { lang });
    });

    $('#btn-reset-progress').addEventListener('click', () => {
      if (confirm('确定要重置所有学习进度吗？此操作不可恢复。')) {
        state.progress = { c: {}, cpp: {} };
        saveProgress();
        renderProgressPage();
      }
    });

    if (window.innerWidth > 900) {
      $('#sidebar').classList.add('open');
    }
  }

  // ── Init ──
  function init() {
    initTheme();
    bindEvents();
    navigate('home');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
