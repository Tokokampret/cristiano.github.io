// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Buttons for smooth scrolling
document.getElementById("letsGoBtn")?.addEventListener("click", () => scrollToSection("profile"));
document.querySelector("#profile button")?.addEventListener("click", () => scrollToSection("about"));

// Back to Top button
const backToTopBtn = document.getElementById("backToTop");
function toggleBackToTop() {
  if (window.scrollY > window.innerHeight) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}
window.addEventListener("scroll", toggleBackToTop, { passive: true });
backToTopBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Loading screen - hide after load
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading");
  loadingScreen.classList.add("hidden");
});

// Theme Toggle (Dark/Light)
const themeToggle = document.getElementById("themeToggle");
themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});
