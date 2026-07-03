if (sessionStorage.getItem("authenticated") !== "true") {
  window.location.href = "index.html";
}

window.addEventListener("load", () => {
  const loadingOverlay = document.getElementById("loadingOverlay");
  if (loadingOverlay) {
    document.getElementById("loadingOverlay").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("loadingOverlay").classList.add("hidden");
    }, 2000);
  }
});

// Success.html
const another = document.getElementById("another");

if (another) {
  another.addEventListener("click", () => {
    window.location.href = "attendance.html";
  });
}
