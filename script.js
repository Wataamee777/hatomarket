document.addEventListener("DOMContentLoaded", function () {
    // ===== ヘッダー高さをmainに反映 =====
const header = document.querySelector("header");
const updateHeaderHeight = () => {
  if (header) {
    document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
  }
};
window.addEventListener("resize", updateHeaderHeight);
window.addEventListener("load", updateHeaderHeight);
updateHeaderHeight();

    const fadeElements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
