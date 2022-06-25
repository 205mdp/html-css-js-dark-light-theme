// btn btn-theme
const btnTheme = document.querySelector('#btn-theme');

btnTheme.addEventListener('click', () => {
  // 1. Check if dark mode is enabled
  if (localStorage.getItem('theme') === 'dark') {
    // 2. If it is, disable dark mode
    disableDarkMode();
  } else {
    // 3. If it's not, enable dark mode
    enableDarkMode();
  }
})

const detectColorScheme = () => {
  // Verificar que theme tiene el sistama/navegador 
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}
// Detectar el color del sistema
detectColorScheme();
// Verifica si hay cambios en el thema y lo cambia
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  event.matches ? enableDarkMode() : disableDarkMode();
});

// cambio de dark mode a ligh mode. 
const enableDarkMode = () => {
  document.body.classList.remove('lightmode');
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('theme', 'dark');
}
// cambio de light mode a dark mode.
const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  document.body.classList.add('lightmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('theme', 'light');
}