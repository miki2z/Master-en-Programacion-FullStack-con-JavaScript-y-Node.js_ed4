# Class 18. Exercise: New York Times. Best Sellers

Refactorizaremos el ejercicio anterior para ofrecer al cliente un dashboard con la listas disponibles en Books API. Especificaciones:

-   Debes incluir una animación mientras esperamos la carga del contenido.
-   Al cargar la web deben de aparecer todas las listas con los siguientes datos: - Nombre completo de la lista - La fecha del libro más antiguo en la lista - La fecha del libro ultimo incorporado - La frecuencia de actualización - Un link para poder cargar la lista.
-   Al pinchar en el link de una lista especifica el DOM debe cambiar e incluir los siguientes datos:
-   Un bontón para volver atras y recargar la disposición anterior
-   Los libros deben estar organizados según el orden de la lista oficial
-   Debes incluir la carátula del libro
-   Debes incluir la cantidad de semanas que lleva en la lista
-   Debes incluir la descripción
-   Debes incluir el titulo y la posición que ocupa en la lista ( #1 titulo.... #2 titulo....)
-   Debes incluir el link para poder comprar el libro en amazon (debe abrirse en otra pestaña)

## Project setup

### Install packages npm

```
npm install
```

### Generate the documentation JSDOCS

```
npm run docs
```

### Add the API KEY

In the `js/scripts.js` file change the string `XXXXXXXXX` by the API KEY:

1. Go to your account: https://developer.nytimes.com/accounts/login
2. Go to the link: https://developer.nytimes.com/my-apps
3. Find your app or create one new
4. Copy the API KEY generated or create one new
