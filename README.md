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

```

> Nota hay una mejor solución para no duplicar tanto las variables de css y las clases. Que es controlando desde JS. Lo vemos en el proximo branch.

# Con Javascript pero sin media query 

- Se elimina la clase .lightmode y se saca el @media (prefers-color-scheme: dark) se realiza todo con Javascript y se almacena en el LocalStorage. 

- De css solo nos queda las variables en el root y en la clase .darkmode, la clase .darkmode se asigna al body y se remueve cuando esta en modo light quedando aplicadas las variables del root base. 

```css
/* variables globales */
:root {
  --header-color: #f5f5f5;
  --header-back-color: rgb(84, 121, 241);
  --main-back-color: #f5f5f5;
  --main-color: #333;
  --header-container-max-width: 70rem;
}

.darkmode {
  --header-color: #b2b2b2;
  --header-back-color: rgb(31, 31, 31);
  --main-back-color: #595959;
  --main-color: rgb(235, 235, 235);
  --header-container-max-width: 70rem;
}
```

- Cuando carga la pagina verificamos que thema esta en el sistema y que theme en el local host. Deja el que se encuentre en el Localhost. 

```js
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

// Verifica si hay cambios en el thema y lo cambia
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  event.matches ? enableDarkMode() : disableDarkMode();
});

// Detectar el color del sistema
detectColorScheme();

```

- Aquí por último las funciones auxiliares y el control del botón para cambiar de thema, entre dark y light. 

```js
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

```

> Nota final: Uds podrian agregar mas themas de colores o dejar que el cliente seleciones los colores y los guarde en el localstorage o en la base de datos. 