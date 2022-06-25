# Theme Dark light mode, Solo html, css y js


# Instalación 
> Se puede ejecutar desde cualquier server virtual que tengas, no es neceario al 100% 

```js
yarn add 
```
# Ejecutar 

```js
yarn dev
```

# Solo css 

- Generar variables que se asignaran a los background y colors. 
- Generar media query.

```css
:root {
  --background: white;
  --color: black;
}

/* media query dark  */
@media (prefers-color-scheme: dark) {
  :root {
    --background: black;
    --color: white;
  }
}
```

- Conclusión: con este simple paso toma el theme del navegador y lo aplica en la página.

# Con Javascript 

-Detectamos que configurción tiene el sistema. 
```js
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    localStorage.setItem('theme', 'dark');
} else {
    localStorage.setItem('theme', 'light');
}
```
- Evento de cambio schema
```js
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  event.matches ? enableDarkMode() : disableDarkMode();
});
```

# Con Javascript manualmente 

Se puede hacer agregando una clase al body .dark , .light lo guardamos en el localStorage tambien. 

```js
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

```

> Nota hay una mejor solución para no duplicar tanto las variables de css y las clases. Que es controlando desde JS. Lo vemos en el proximo branch.