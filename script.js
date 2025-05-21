document.getElementById("letsGoBtn").addEventListener("click", function () {
  // Sembunyikan halaman landing
  document.getElementById("landing").classList.add("hidden");

  // Tampilkan layar loading
  document.getElementById("loading").classList.remove("hidden");

  // Setelah 3 detik, sembunyikan loading dan tampilkan profil
  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("profile").classList.remove("hidden");
  }, 3000);
});
