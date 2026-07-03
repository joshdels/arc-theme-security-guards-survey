const SECRET_KEY = "secret";

const form = document.getElementById("secretForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("#secret").value;

  if (input === SECRET_KEY) {
    sessionStorage.setItem("authenticated", "true");
    window.location.href = "attendance.html";
  } else {
    alert("Incorrect secret key");
  }
});

// Already logged in?
if (sessionStorage.getItem("authenticated") === "true") {
  window.location.href = "attendance.html";
}

// calcite loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loadingOverlay").classList.add("hidden");
  }, 2000);
});

