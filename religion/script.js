// ===========================
// はとあげ教 公式サイト JS
// ===========================

// DOM読み込み後
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const navLinks = document.querySelectorAll("nav a");
  const themeToggle = document.querySelector("#theme-toggle");

  // ===== ナビゲーション =====
  const setActiveNav = () => {
    const current = location.pathname.split("/").pop() || "index.html";
    navLinks.forEach(link => {
      const href = link.getAttribute("href").replace("/", "");
      link.classList.toggle("active", href === current);
    });
  };
  setActiveNav();

  // ===== フェードイン =====
  const main = document.querySelector("main");
  if (main) {
    main.style.opacity = 0;
    setTimeout(() => {
      main.style.transition = "opacity 0.6s ease";
      main.style.opacity = 1;
    }, 100);
  }

  // ===== テーマ切り替え =====
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) body.dataset.theme = savedTheme;

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = body.dataset.theme === "dark" ? "light" : "dark";
      body.dataset.theme = currentTheme;
      localStorage.setItem("theme", currentTheme);
      themeToggle.textContent = currentTheme === "dark" ? "🌙" : "☀️";
    });
  }

  // ===== スムーススクロール =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===== Discordボタン =====
  const discordBtn = document.querySelector("#discord-invite");
  if (discordBtn) {
    discordBtn.addEventListener("click", () => {
      window.open("https://discord.gg/あなたの招待リンク", "_blank");
    });
  }

  // ===== 年自動更新（フッター用） =====
  const yearEl = document.querySelector("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===== スクロール時のヘッダーエフェクト =====
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });
});
