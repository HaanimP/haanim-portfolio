// Function to toggle menu visibility
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to open link in new tab
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
