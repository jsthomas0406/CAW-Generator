console.log("script loaded");

const generateBtn = document.getElementById("generateBtn");
const statusEl = document.getElementById("status");

if (generateBtn) {
  generateBtn.addEventListener("click", () => {
    console.log("generate clicked");
    alert("Button works");
    if (statusEl) {
      statusEl.textContent = "Generate button is working.";
    }
  });
} else {
  console.error("Missing #generateBtn");
}
