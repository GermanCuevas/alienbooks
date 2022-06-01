Este proyecto es un ecommerce de venta de libros.

Para inicializar el mismo hay que clonarlo, ejecutar npm install, luego npm start y se visualizara en el localhost3000.

Rutas

En App.js:

- Primero se encuentra el NavBar.

- Ruta con path "/" que renderiza el componente ItemListContainer . Alli estaran todos los libros que se encuentran disponibles.

- Ruta con path "\*"(asterisco) renderiza una mensaje que aun no hay contenido disponible.

- Ruta con path "/detail/:productId" renderiza el componente ItemDetailCotainer. Alli muestra solo el detalle de un solo producto, dependiendo del id con el haya match.

- Ruta con path "/category/:categoryId" renderiza el componente ItemListContainer. En este caso, solo mostrara los libros que hagan match con el tipo de categoria que se busca.
