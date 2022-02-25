function themeHandler(isDark) {
  if (isDark == null)
    // Checking if it has some theme defined
    isDark = localStorage.$dark;

  // Not theme defined
  if (isDark == null) return;

  var light = 'light-mode',
    dark = 'dark-mode';
  if (isDark === true || isDark === 'true') {
    // Setting dark mode
    document.documentElement.classList.replace(light, dark);
  } else {
    // Setting light mode
    document.documentElement.classList.replace(dark, light);
  }

  localStorage.setItem('$dark', isDark);
}

themeHandler();