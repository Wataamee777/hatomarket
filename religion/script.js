document.addEventListener("DOMContentLoaded", () => {

  // ===== ヘッダー高さをmainに反映 =====
  const header = document.querySelector("header");
  const updateHeaderHeight = () => {
    if(header){
      document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
    }
  };
  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight);

  // ===== スライドメニュー =====
  const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  const openMenu = () => {
    sideMenu.classList.add("open");
    overlay.classList.add("active");
  };
  const closeMenu = () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("active");
  };

  menuBtn.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeMenu);

  // ===== 年表示 =====
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== テーマ切替 =====
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle?.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", next);
  });

});
