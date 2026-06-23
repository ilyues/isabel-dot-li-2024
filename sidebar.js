const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
const sidebar = document.querySelector('.site-sidebar');

// Sidebar toggle gif: pick a random pair on load. Show its -1 frame when
// closed and the paired -2 frame when open. (Files in assets/gifs/<name>-1|2.webp)
const TOGGLE_GIFS = ['bake', 'bike', 'cake', 'snack'];
const toggleImg = sidebarToggle ? sidebarToggle.querySelector('img') : null;
const gifBase = (function () {
  const sc = document.querySelector('script[src$="sidebar.js"]');
  const src = sc ? sc.getAttribute('src') : '';
  return src.replace(/sidebar\.js$/, '') + 'assets/gifs/';
})();
const toggleGif = TOGGLE_GIFS[Math.floor(Math.random() * TOGGLE_GIFS.length)];

function updateToggleGif() {
  if (!toggleImg) return;
  const open = sidebar && sidebar.classList.contains('open');
  toggleImg.src = gifBase + toggleGif + (open ? '-2' : '-1') + '.webp';
}
updateToggleGif();
if (sidebar) {
  new MutationObserver(updateToggleGif).observe(sidebar, {
    attributes: true,
    attributeFilter: ['class'],
  });
}

if (sidebarToggle && sidebar) {
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

if (sidebarClose && sidebar) {
  sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
}

window.addEventListener('resize', () => {
  if (sidebar && window.innerWidth > 1024) {
    sidebar.classList.remove('open');
  }
});

window.addEventListener('click', (event) => {
  if (!sidebar || !sidebarToggle || !sidebar.classList.contains('open')) {
    return;
  }

  const target = event.target;
  if (!sidebar.contains(target) && !sidebarToggle.contains(target)) {
    sidebar.classList.remove('open');
  }
});

document.querySelectorAll('.comic-pages img').forEach((img) => {
  img.addEventListener('contextmenu', (e) => e.preventDefault());
  img.addEventListener('dragstart', (e) => e.preventDefault());
});

try {
  if (localStorage.getItem('font-junicode') === '1') {
    document.documentElement.classList.add('font-junicode');
  }
} catch (e) {}

document.querySelectorAll('.font-toggle').forEach((btn) => {
  const label = () => {
    const junicode = document.documentElement.classList.contains('font-junicode');
    btn.textContent = junicode ? 'font: junicode' : 'font: velvelyne';
  };
  label();
  btn.addEventListener('click', () => {
    const on = document.documentElement.classList.toggle('font-junicode');
    try {
      localStorage.setItem('font-junicode', on ? '1' : '0');
    } catch (e) {}
    document.querySelectorAll('.font-toggle').forEach((b) => {
      b.textContent = on ? 'font: junicode' : 'font: velvelyne';
    });
  });
});

const TEXT_SCALE_MIN = 0.8;
const TEXT_SCALE_MAX = 1.6;
const TEXT_SCALE_STEP = 0.1;

function getTextScale() {
  let v;
  try {
    v = parseFloat(localStorage.getItem('text-scale'));
  } catch (e) {}
  return v && !isNaN(v) ? v : 1;
}

function applyTextScale(scale) {
  const clamped = Math.min(TEXT_SCALE_MAX, Math.max(TEXT_SCALE_MIN, scale));
  const rounded = Math.round(clamped * 100) / 100;
  document.documentElement.style.setProperty('--text-scale', rounded);
  try {
    localStorage.setItem('text-scale', rounded);
  } catch (e) {}
}

applyTextScale(getTextScale());

document.querySelectorAll('.font-inc').forEach((btn) => {
  btn.addEventListener('click', () => applyTextScale(getTextScale() + TEXT_SCALE_STEP));
});
document.querySelectorAll('.font-dec').forEach((btn) => {
  btn.addEventListener('click', () => applyTextScale(getTextScale() - TEXT_SCALE_STEP));
});
document.querySelectorAll('.font-size-reset').forEach((btn) => {
  btn.addEventListener('click', () => applyTextScale(1));
});

document.querySelectorAll('.site-sidebar .sidebar-header').forEach((header) => {
  header.classList.add('collapsible');
  header.addEventListener('click', () => {
    const collapsed = header.classList.toggle('collapsed');
    let el = header.nextElementSibling;
    while (el && !el.classList.contains('sidebar-header')) {
      el.classList.toggle('collapsed-link', collapsed);
      el = el.nextElementSibling;
    }
  });
});
