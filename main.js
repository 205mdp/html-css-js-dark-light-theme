/*
* Cambia el color de la aplicacion desde el boton. 
*/

// btn btn-theme
const btnTheme = document.querySelector('#btn-theme');

btnTheme.addEventListener('click', () => {
  // 1. Check if dark mode is enabled
  localStorage.getItem('theme') === 'dark' ? disableDarkMode() : enableDarkMode();

})

// cambio de dark mode a ligh mode. 
const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('theme', 'dark');
}
// cambio de light mode a dark mode.
const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('theme', 'light');
}

/*
* Cambia el color de la aplicacion desde el sistema o config del navegador. 
*/

// Detectar el color del sistema
const detectColorScheme = () => {
  const localTheme = localStorage.getItem('theme');
  // Verificar que theme tiene el sistama/navegador 
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    (localTheme === 'dark' || localTheme === null) ? enableDarkMode() : disableDarkMode();
  } else {
    (localTheme === 'dark') ? enableDarkMode() : disableDarkMode();
  }
}

detectColorScheme();
// Verifica si hay cambios en el thema y lo cambia
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  event.matches ? enableDarkMode() : disableDarkMode();
});

// Detectar el color del sistema
