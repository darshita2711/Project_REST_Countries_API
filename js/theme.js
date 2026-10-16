// inittheme for change mode 
export function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');

  if (!themeToggleBtn) return;
  
  // we click on mode button then add the html part and mode change
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Light Mode';
    } else {
      themeToggleBtn.innerHTML = '<i class="fa-regular fa-moon"></i> Dark Mode';
    }
  });
}