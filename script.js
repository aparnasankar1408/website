// ===============================
// Portfolio Website Script
// ===============================

console.log("Portfolio Loaded");

// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Simple Fade Animation on Scroll
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// Contact Form Success Message
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", () => {
    alert("Message sent successfully!");
  });
}