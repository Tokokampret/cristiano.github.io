document.getElementById("letsGoBtn").addEventListener("click", function () {
    // Hide landing page
    document.getElementById("landing").classList.add("hidden");
  
    // Show loading
    document.getElementById("loading").classList.remove("hidden");
  
    // Simulate loading for 3 seconds
    setTimeout(() => {
      document.getElementById("loading").classList.add("hidden");
      document.getElementById("profile").classList.remove("hidden");
    }, 3000); // 3 seconds
  });
  