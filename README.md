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
