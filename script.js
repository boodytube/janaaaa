function checkOpenStatus() {
  const now = new Date();
  const hour = now.getHours();
  const isOpen = hour >= 9 && hour < 17; // 9 AM - 5 PM
  
  const status = document.getElementById("open-status");
  status.textContent = isOpen ? "HURRY UP, WE ARE OPEN NOW!" : "Oops! Sorry, we're closed.";
}
document.addEventListener("DOMContentLoaded", () => {checkOpenStatus();
});
