// ===== DOM SELECTORS =====
const siteHeader = document.querySelector(".site-header");
const menuToggleBtn = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

const testimonialsWrapper = document.querySelector(".testimonials-wrapper");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const indicators = document.querySelectorAll(".indicator");

const footerForm = document.querySelector(".footer-form");
const emailInput = document.querySelector(".email-input");
const errorEmailMsg = document.querySelector(".error-email-msg");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ===== STATE =====
let currentIndex = 0;
const totalCards = testimonialCards.length;

// ===== EVENT: Header scroll effect =====
window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scroll", window.scrollY > 10);
});

// ===== EVENT: Toggle mobile menu =====
menuToggleBtn.addEventListener("click", () => {
  menuToggleBtn.classList.toggle("active");
  mainNav.classList.toggle("open");
  document.body.classList.toggle("overhide");
});

// ===== CAROUSEL FUNCTIONS =====
function getVisibleCount() {
  const wrapperWidth = testimonialsWrapper.offsetWidth;
  const cardWidth = testimonialCards[0].offsetWidth;
  return Math.max(1, Math.floor(wrapperWidth / cardWidth));
}

function updateCarousel() {
  const visibleCount = getVisibleCount();
  const shift = (100 / visibleCount) * currentIndex;
  testimonialsWrapper.style.transform = `translateX(-${shift}%)`;

  indicators.forEach((indicator, i) =>
    indicator.classList.toggle("active", i === currentIndex)
  );
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function nextSlide() {
  const visibleCount = getVisibleCount();
  const maxIndex = Math.ceil(totalCards / visibleCount) - 1;
  currentIndex = currentIndex + 1 > maxIndex ? 0 : currentIndex + 1;
  updateCarousel();
}

// ===== EVENT: Indicator click =====
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => goToSlide(index));
});

// ===== AUTO SLIDE =====
setInterval(nextSlide, 5000);

// ===== FORM VALIDATION =====
footerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailVal = emailInput.value.trim();
  const isValid = emailRegex.test(emailVal);

  if (isValid) {
    window.location.href = ""; // Replace with your success action
  } else {
    footerForm.classList.add("error");
    errorEmailMsg.textContent = "Please input valid email";
  }
});

emailInput.addEventListener("input", () => {
  footerForm.classList.remove("error");
  errorEmailMsg.textContent = "";
});
