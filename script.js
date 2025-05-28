// Scroll to profile
document.getElementById("letsGoBtn").addEventListener("click", function () {
  document.getElementById("profile").scrollIntoView({ behavior: "smooth" });
});

// Scroll to About section on "GET TO KNOW ME"
document.querySelector("#profile button").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Show Back to Top button on scroll
window.addEventListener("scroll", function () {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > window.innerHeight) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Scroll to top when button clicked
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
