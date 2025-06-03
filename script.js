const siteHeader = document.querySelector(".site-header");
const menuToggleBtn = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

const testimonialsWrapper = document.querySelector(".testimonials-wrapper");
const testimonialCard = document.querySelectorAll(".testimonial-card");
const indicators = document.querySelectorAll(".indicator");

const footerForm = document.querySelector(".footer-form");
const emailInput = document.querySelector(".email-input");
const errorEmailMsg = document.querySelector(".error-email-msg");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let currentTestimonial = 0;
const totalTestimonials = testimonialCard.length;

window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scroll", window.scrollY > 10);
});

menuToggleBtn.addEventListener("click", () => {
  menuToggleBtn.classList.toggle("active");
  mainNav.classList.toggle("open");
  document.body.classList.toggle("overhide");
});

function updateCarousel() {
  testimonialsWrapper.style.transform = `translateX(-${
    currentTestimonial * 100
  }%)`;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentTestimonial);
  });
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentTestimonial = index;
    updateCarousel();
  });
});

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  updateCarousel();
}, 3000);

footerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailVal = emailInput.value.trim();

  if (emailRegex.test(emailVal)) {
    window.location.href = "";
  } else {
    footerForm.classList.add("error");
    errorEmailMsg.textContent = "Please input valid email";
  }
});

emailInput.addEventListener("input", () => {
  footerForm.classList.remove("error");
  errorEmailMsg.textContent = "";
});
