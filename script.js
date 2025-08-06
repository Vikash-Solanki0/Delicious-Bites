function scrollToMenu() {
  const menuSection = document.getElementById("menu");
  menuSection.scrollIntoView({ behavior: "smooth" });
}

// Theme toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const themeBtn = document.getElementById('toggle-theme');
  if (document.body.classList.contains('dark')) {
    themeBtn.textContent = '☀';
  } else {
    themeBtn.textContent = '🌙';
  }
});

// Optional contact form submit alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for contacting us!");
  this.reset();
});










