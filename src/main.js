import { portfolioData } from './data/portfolioData.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initFooterYear();
  renderSkills();
  renderExperience();
  renderProjects();
  initMobileDrawer();
  initScrollAffordances();
  initProjectDialog();
});

/* --- Theme Management --- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;

  // Retrieve saved theme or default to cream
  const savedTheme = localStorage.getItem('canvas.theme') || 'cream';
  setTheme(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'cream' : 'dark';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('canvas.theme', theme);

    if (theme === 'dark') {
      toggleBtn.setAttribute('aria-label', 'Switch to light mode');
      toggleBtn.setAttribute('title', 'Switch to light mode');
      // Moon icon
      themeIcon.innerHTML = `
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      `;
    } else {
      toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      toggleBtn.setAttribute('title', 'Switch to dark mode');
      // Sun icon
      themeIcon.innerHTML = `
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
      `;
    }
  }
}

/* --- Dynamic Footer Year --- */
function initFooterYear() {
  const yearEl = document.getElementById('year-placeholder');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* --- Render Skills --- */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const html = portfolioData.skills.map(group => {
    const toolsHtml = group.items.map(item => {
      if (item.type === 'text') {
        return `<span class="s-tool s-tool--text">${item.name}</span>`;
      }

      let iconHtml = '';
      if (item.iconClass) {
        iconHtml = `<i class="${item.iconClass}" aria-hidden="true"></i>`;
      } else if (item.iconCustomSvg) {
        iconHtml = item.iconCustomSvg;
      } else {
        const initials = item.name.substring(0, 2).toUpperCase();
        iconHtml = initials;
      }

      return `
        <span class="s-tool">
          <span class="tool-icon" aria-hidden="true">${iconHtml}</span>
          <span>${item.name}</span>
        </span>
      `;
    }).join('');

    return `
      <div class="skillgroup">
        <h3>${group.category}</h3>
        <div class="s-tools">
          ${toolsHtml}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

/* --- Render & Handle Experience --- */
function renderExperience() {
  const listEl = document.getElementById('experience-list');
  const detailEl = document.getElementById('experience-detail');
  if (!listEl || !detailEl) return;

  // Render left index selector
  listEl.innerHTML = portfolioData.experience.map((exp, index) => {
    const isFirst = index === 0;
    return `
      <li>
        <button type="button" class="xp__item" data-id="${exp.id}" data-on="${isFirst ? '1' : '0'}" role="tab" aria-selected="${isFirst ? 'true' : 'false'}" aria-controls="panel-${exp.id}">
          <span class="xp__bullet" aria-hidden="true"></span>
          <span>
            <b>${exp.organization}</b>
            <span>${exp.role} · ${exp.shortPeriod}</span>
          </span>
        </button>
      </li>
    `;
  }).join('');

  // Render right detail articles
  detailEl.innerHTML = portfolioData.experience.map((exp, index) => {
    const isFirst = index === 0;
    const bulletsHtml = exp.bullets.map(bullet => `<li>${bullet}</li>`).join('');
    const chipsHtml = exp.chips.map(chip => `<span class="s-chip">${chip}</span>`).join('');

    return `
      <article class="job" id="panel-${exp.id}" data-job-id="${exp.id}" data-active="${isFirst ? '1' : '0'}" role="tabpanel" tabindex="0">
        <p class="job__when">
          <b>${exp.period}</b>
          <span>${exp.location}</span>
        </p>
        <h3>
          <span>${exp.role} — </span><b>${exp.organization}</b>
        </h3>
        <p class="job__focus">${exp.focus}</p>
        <p class="job__lede">${exp.lede}</p>
        <ul class="job__points">
          ${bulletsHtml}
        </ul>
        <div class="s-chips">
          ${chipsHtml}
        </div>
      </article>
    `;
  }).join('');

  // Attach immediate switching handlers
  const tabButtons = listEl.querySelectorAll('.xp__item');
  const panels = detailEl.querySelectorAll('.job');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-id');
      switchRole(targetId);
    });

    // Keyboard navigation
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const next = btn.parentElement.nextElementSibling?.querySelector('.xp__item');
        if (next) {
          next.focus();
          switchRole(next.getAttribute('data-id'));
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = btn.parentElement.previousElementSibling?.querySelector('.xp__item');
        if (prev) {
          prev.focus();
          switchRole(prev.getAttribute('data-id'));
        }
      }
    });
  });

  function switchRole(id) {
    tabButtons.forEach(b => {
      const match = b.getAttribute('data-id') === id;
      b.setAttribute('data-on', match ? '1' : '0');
      b.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    panels.forEach(p => {
      const match = p.getAttribute('data-job-id') === id;
      p.setAttribute('data-active', match ? '1' : '0');
    });
  }
}

/* --- Render Projects --- */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = portfolioData.projects.map((proj) => {
    const chipsHtml = proj.chips.map(chip => `<span class="s-chip">${chip}</span>`).join('');
    
    // Code snippet for preview blueprint
    let previewSnippet = '';
    if (proj.id === 'student-cloud') {
      previewSnippet = `Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::resource('students', StudentController::class);
    Route::post('/enrollments', [EnrollmentController::class, 'store']);
});`;
    } else if (proj.id === 'bookit') {
      previewSnippet = `@router.post("/reservations", response_model=ReservationOut)
async def create_booking(payload: BookingSchema, db: AsyncSession = Depends(get_db)):
    return await booking_service.schedule_slot(payload, db)`;
    } else {
      previewSnippet = `$stmt = $pdo->prepare('SELECT id, password_hash FROM users WHERE email = ?');
$stmt->execute([$email]);
$user = $stmt->fetch();
if ($user && password_verify($password, $user['password_hash'])) { ... }`;
    }

    return `
      <article class="case" id="project-${proj.id}">
        <div class="case__shot" data-open-project="${proj.id}" tabindex="0" role="button" aria-label="Open case study for ${proj.title}">
          <div class="case__preview-header">
            <div class="case__preview-dots" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <span class="case__preview-badge">${proj.type}</span>
          </div>
          <div class="case__preview-body">
            <pre class="case__preview-code"><code>${escapeHtml(previewSnippet)}</code></pre>
          </div>
          <div class="case__preview-footer">
            <span>Engineering Architecture</span>
            <span>Verified System</span>
          </div>
        </div>

        <div class="case__body">
          <p class="case__no">${proj.num} / ${proj.year} · ${proj.type}</p>
          <h3>${proj.title}</h3>
          <p class="case__tag">${proj.subtitle}</p>
          <p class="case__lede">${proj.lede}</p>
          <div class="s-chips">
            ${chipsHtml}
          </div>
          <button type="button" class="case__go" data-open-project="${proj.id}" aria-label="Read write-up for ${proj.title}">
            <span>Read the write-up</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

/* --- Project Case Study Dialog --- */
function initProjectDialog() {
  const dialog = document.getElementById('case-dialog');
  const closeBtn = document.getElementById('dialog-close-btn');
  const titleEl = document.getElementById('dialog-title');
  const noEl = document.getElementById('dialog-no');
  const subtitleEl = document.getElementById('dialog-subtitle');
  const bodyEl = document.getElementById('dialog-body');

  if (!dialog || !closeBtn) return;

  // Open modal on click or Enter key on cards/buttons
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-project]');
    if (trigger) {
      const projId = trigger.getAttribute('data-open-project');
      const project = portfolioData.projects.find(p => p.id === projId);
      if (project) {
        openProjectModal(project);
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const trigger = document.activeElement?.closest('[data-open-project]');
      if (trigger) {
        const projId = trigger.getAttribute('data-open-project');
        const project = portfolioData.projects.find(p => p.id === projId);
        if (project) {
          openProjectModal(project);
        }
      }
    }
  });

  closeBtn.addEventListener('click', () => {
    dialog.close();
  });

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });

  function openProjectModal(project) {
    noEl.textContent = `${project.num} / ${project.year} · ${project.type}`;
    titleEl.textContent = project.title;
    subtitleEl.textContent = project.subtitle;

    const keyFeaturesList = project.details.keyFeatures.map(item => `<li>${item}</li>`).join('');
    const highlightsList = project.highlights.map(item => `<li>${item}</li>`).join('');
    const engineeringNotesList = project.details.engineeringNotes.map(item => `<li>${item}</li>`).join('');
    const chipsHtml = project.chips.map(chip => `<span class="s-chip">${chip}</span>`).join('');

    bodyEl.innerHTML = `
      <div class="case-dialog__section">
        <h3>Overview</h3>
        <p>${project.details.overview}</p>
      </div>

      <div class="case-dialog__section">
        <h3>Key System Functionality</h3>
        <ul class="case-dialog__list">
          ${keyFeaturesList}
        </ul>
      </div>

      <div class="case-dialog__section">
        <h3>Engineering Highlights</h3>
        <ul class="case-dialog__list">
          ${highlightsList}
        </ul>
      </div>

      <div class="case-dialog__section">
        <h3>Architecture &amp; Data Models</h3>
        <ul class="case-dialog__list">
          ${engineeringNotesList}
        </ul>
      </div>

      <div class="case-dialog__section">
        <h3>Technology Stack</h3>
        <div class="s-chips" style="margin-top: 0.5rem;">
          ${chipsHtml}
        </div>
      </div>

      <div class="case-dialog__section" style="border-top: 1.5px solid color-mix(in srgb, var(--ink) 12%, transparent); padding-top: 1rem;">
        <h3>Project Access</h3>
        <p style="font-size: 0.9375rem; color: var(--ink-subtle);">
          Verified CV-backed project architecture. Code walkthrough and repository demonstrations are available for prospective engineering teams upon request.
        </p>
      </div>
    `;

    dialog.showModal();
  }
}

/* --- Mobile Drawer Navigation --- */
function initMobileDrawer() {
  const burger = document.getElementById('burger-btn');
  const drawer = document.getElementById('mobile-drawer');
  const scrim = document.getElementById('drawer-scrim');
  const links = document.querySelectorAll('.drawer-link');
  const root = document.documentElement;

  if (!burger || !drawer || !scrim) return;

  function openDrawer() {
    root.setAttribute('data-drawer', '');
    burger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    root.removeAttribute('data-drawer');
    burger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }

  burger.addEventListener('click', () => {
    const isOpen = root.hasAttribute('data-drawer');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  scrim.addEventListener('click', closeDrawer);

  links.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --- Scroll Affordances --- */
function initScrollAffordances() {
  const bar = document.querySelector('.bar');
  const site = document.querySelector('.site');
  const toTop = document.getElementById('totop-btn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header sticky shadow border
    if (bar) {
      bar.setAttribute('data-stuck', scrollPos > 20 ? '1' : '0');
    }

    // Back to top appearance
    if (site) {
      site.setAttribute('data-far', scrollPos > 350 ? '1' : '0');
    }
  }, { passive: true });

  if (toTop) {
    toTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'auto' }); // immediate scroll
    });
  }
}

/* --- Helper --- */
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
