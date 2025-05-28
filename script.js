// Helper: Smooth scroll to a section by ID
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// LET’S GO ➤ button → scroll to #profile
const letsGoBtn = document.getElementById("letsGoBtn");
letsGoBtn?.addEventListener("click", () => scrollToSection("profile"));

// GET TO KNOW ME button → scroll to #about
const profileBtn = document.querySelector("#profile button");
profileBtn?.addEventListener("click", () => scrollToSection("about"));

// Back to Top button
const backToTopBtn = document.getElementById("backToTop");

// Toggle visibility on scroll
function toggleBackToTop() {
  if (!backToTopBtn) return;
  if (window.scrollY > window.innerHeight) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}

window.addEventListener("scroll", toggleBackToTop, { passive: true });

// Scroll to top when button clicked
backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
