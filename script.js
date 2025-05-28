// Helper: smooth scroll to a section by ID
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// LET’S GO ➤ button → scroll to #profile
const letsGoBtn = document.getElementById("letsGoBtn");
if (letsGoBtn) {
  letsGoBtn.addEventListener("click", function () {
    scrollToSection("profile");
  });
}

// GET TO KNOW ME button → scroll to #about
const profileBtn = document.querySelector("#profile button");
if (profileBtn) {
  profileBtn.addEventListener("click", function () {
    scrollToSection("about");
  });
}

// Back to Top button logic
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", function () {
  if (backToTop) {
    if (window.scrollY > window.innerHeight) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }
});

// Back to Top button → scroll to top
if (backToTop) {
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
