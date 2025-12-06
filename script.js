document.addEventListener("DOMContentLoaded", function () {
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

const newUrl = "https://discord.gg/sakuraza-tan-wang-guo-sakura-talk-kingdom-1208962938388484107";
const linkElement = document.getElementById("invitelink");
linkElement.href = newUrl;