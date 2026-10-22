/* Lamsat Wafa — site behaviour. Team names & photos live in team.js (no need to edit this file). */
(function () {
  var ICONS = {"crown":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.9\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z\"></path><path d=\"M5 21h14\"></path></svg>","briefcase":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.9\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"></rect></svg>","lightbulb":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.9\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5\"></path><path d=\"M9 18h6\"></path><path d=\"M10 22h4\"></path></svg>","laptop":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.9\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16\"></path></svg>","usercheck":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.9\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><polyline points=\"16 11 18 13 22 9\"></polyline></svg>","clipboard":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.9\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"></rect><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><path d=\"M12 11h4\"></path><path d=\"M12 16h4\"></path><path d=\"M8 11h.01\"></path><path d=\"M8 16h.01\"></path></svg>","users":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.9\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 21a8 8 0 0 0-16 0\"></path><circle cx=\"10\" cy=\"8\" r=\"5\"></circle><path d=\"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3\"></path></svg>","calendar":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.9\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M3 10h18\"></path><path d=\"m9 16 2 2 4-4\"></path></svg>","camera":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.9\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z\"></path><circle cx=\"12\" cy=\"13\" r=\"3\"></circle></svg>","handshake":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.9\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m11 17 2 2a1 1 0 1 0 3-3\"></path><path d=\"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4\"></path><path d=\"m21 3 1 11h-2\"></path><path d=\"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3\"></path><path d=\"M3 4h8\"></path></svg>","user":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.9\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle></svg>"};
  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var GOLD = ["استشاري", "تقني"];

  // ---- team members (from team.js) ----
  var team = window.TEAM || [];
  var box = document.getElementById("members"), lead = document.getElementById("members-lead");
  function card(m) {
      var name = (m.name || "").trim(), photo = (m.photo || "").trim();
      var gold = GOLD.indexOf(m.badge) > -1 ? " gold" : "";
      var pic = photo
        ? '<img src="' + esc(photo) + '" alt="' + esc(name || m.role) + '">'
        : '<img src="assets/logo.webp" alt="">';
      return '<article class="card member reveal">' +
        '<div class="m-photo' + (photo ? "" : " empty") + '">' + pic + (m.badge ? '<span class="badge' + gold + '">' + esc(m.badge) + "</span>" : "") + "</div>" +
        '<div class="m-body">' +
          (name ? "<h3>" + esc(name) + "</h3>" : '<h3 class="tbd">يُعلن قريبًا</h3>') +
          '<div class="m-role">' + (ICONS[m.icon] || ICONS.user) + esc(m.role) + "</div>" +
          (m.tasks && m.tasks.length ? "<ul>" + m.tasks.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" : "") +
          (m.note ? '<div class="tip">' + esc(m.note) + "</div>" : "") +
        "</div></article>";
  }
  // first four (leadership & advisors) on their own row, the rest below
  if (lead) lead.innerHTML = team.slice(0, 4).map(card).join("");
  if (box) box.innerHTML = team.slice(4).map(card).join("");
  Array.prototype.forEach.call(document.querySelectorAll(".m-photo img"), function (img) {
    img.addEventListener("error", function () { if (img.dataset.fb) return; img.dataset.fb = 1; img.parentNode.classList.add("empty"); img.src = "assets/logo.webp"; img.alt = ""; });
  });
  // names under the org chart boxes
  team.forEach(function (m) {
    if (!m.name || !m.name.trim()) return;
    var el = document.querySelector('[data-id="' + m.id + '"]');
    if (el) { var sm = document.createElement("small"); sm.textContent = m.name.trim(); el.appendChild(sm); }
  });

  var header = document.querySelector('.site-header');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  var btn = document.querySelector('.menu-btn'), menu = document.getElementById('menu');
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open); btn.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
  });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } });

  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowLeft' ? 1 : e.key === 'ArrowRight' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); e.preventDefault(); }
    });
  });

  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

  document.getElementById('y').textContent = new Date().getFullYear();
})();
