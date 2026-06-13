const body = document.body;
const cursor = document.getElementById('cursor');
const themeButtons = document.querySelectorAll('[data-theme-toggle]');
const yearEl = document.getElementById('year');
const particleCanvas = document.getElementById('particleCanvas');
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  setTimeout(() => preloader?.classList.add('hide'), 700);
});

if (yearEl) yearEl.textContent = new Date().getFullYear();

function toggleTheme() {
  const dark = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', dark ? 'light' : 'dark');
  themeButtons.forEach(btn => {
    btn.innerHTML = `<i class="fa-solid ${dark ? 'fa-sun' : 'fa-moon'}"></i>`;
  });
  localStorage.setItem('theme', dark ? 'light' : 'dark');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
  themeButtons.forEach(btn => {
    btn.innerHTML = `<i class="fa-solid ${savedTheme === 'dark' ? 'fa-moon' : 'fa-sun'}"></i>`;
  });
}

themeButtons.forEach(btn => btn.addEventListener('click', toggleTheme));

document.addEventListener('mousemove', e => {
  if (!cursor) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting || entry.target.dataset.done) return;
    entry.target.dataset.done = '1';
    const end = Number(entry.target.dataset.count || 0);
    let current = 0;
    const step = Math.max(1, Math.ceil(end / 120));
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      entry.target.textContent = end >= 1000 ? current.toLocaleString() : current;
    }, 16);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

if (particleCanvas) {
  const ctx = particleCanvas.getContext('2d');
  let w, h, points = [];

  function resize() {
    w = particleCanvas.width = innerWidth;
    h = particleCanvas.height = innerHeight;
    points = Array.from({ length: Math.min(90, Math.floor(w / 18)) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.8 + 1
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    points.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.fillStyle = 'rgba(124,92,255,.72)';
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      points.forEach(q => {
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 130) {
          ctx.strokeStyle = `rgba(32,227,178,${1 - d / 130})`;
          ctx.lineWidth = .7;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      });
    });
    requestAnimationFrame(draw);
  }

  resize();
  addEventListener('resize', resize);
  draw();
}

addEventListener('scroll', () => {
  document.querySelectorAll('.parallax').forEach(el => {
    el.style.setProperty('--py', `${window.scrollY * -0.08}px`);
  });
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add('was-validated');
  });
});
