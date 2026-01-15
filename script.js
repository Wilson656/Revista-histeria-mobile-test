// Inicializar Ícones
lucide.createIcons();

// --- Mobile Menu Toggle ---
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Trocar ícone
    const iconContainer = mobileMenuBtn.querySelector("svg");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
    } else {
      mobileMenuBtn.innerHTML = '<i data-lucide="x"></i>';
    }
    lucide.createIcons();
  });
}

// --- Hero Carousel Logic ---
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");
let currentSlide = 0;
const totalSlides = slides.length;
const intervalTime = 6000;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Auto Slide
slideInterval = setInterval(nextSlide, intervalTime);

// Button Events
if (prevBtn && nextBtn) {
  nextBtn.addEventListener("click", () => {
    nextSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  });
}

// --- Instagram Horizontal Scroll ---
const scrollContainer = document.getElementById("insta-scroll-container");
const scrollLeftBtn = document.getElementById("scroll-left");
const scrollRightBtn = document.getElementById("scroll-right");

if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
  scrollLeftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -320, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 320, behavior: "smooth" });
  });
}
