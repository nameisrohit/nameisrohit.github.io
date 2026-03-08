// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
    }
  });
}

// Smooth scrolling for internal links (extra safety)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
