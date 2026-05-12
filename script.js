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

// Reveal Animation
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


// ===============================
// CONTACT FORM (FORMspree version)
// ===============================

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    status.innerHTML = "⏳ Sending...";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        status.innerHTML = "✅ Message sent successfully!";
        form.reset();
      } else {
        status.innerHTML = "❌ Failed to send message.";
      }

    } catch (error) {
      status.innerHTML = "⚠️ Something went wrong!";
    }
  });
  function showToast(message, success = true) {
  const toast = document.getElementById("toast");

  toast.innerText = message;

  // change color based on success/fail
  toast.style.background = success ? "#28a745" : "#dc3545";

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
}
