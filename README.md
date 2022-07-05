Este proyecto es un ecommerce de venta de libros.

Para inicializar el mismo hay que clonarlo, ejecutar npm install, luego npm start y se visualizara en el localhost3000.

Rutas

En App.js:

- Primero se encuentra el NavBar.

- Ruta con path "/" que renderiza el componente ItemListContainer . Alli estaran todos los libros que se encuentran disponibles.

- Ruta con path "\*"(asterisco) renderiza una mensaje que aun no hay contenido disponible.

- Ruta con path "/detail/:productId" renderiza el componente ItemDetailCotainer. Alli muestra solo el detalle de un solo producto, dependiendo del id con el haya match.

- Ruta con path "/category/:categoryId" renderiza el componente ItemListContainer. En este caso, solo mostrara los libros que hagan match con el tipo de categoria que se busca.
  En caso de que se coloque un id que no existe en Firebase ( que no conicida con ninguno de los libros ) se muestra un mensaje en la pagina : id incorrecto. Despues de unos segundos el usuario es redirigido a la tienda ( itemListContainer).

- Ruta "/cart" renderiza el componente Cart. Muestra la cantidad de productos que lleva el usuario. En caso de no haber productos muestra un boton para volver a la tienda (ItemListContainer).

-Ruta "/checkout" renderiza el componente Form. Alli se toman los datos del cliente a traves de un formulario. Informacion de contacto: nombre/apellido , direccion, tel.celular , y dos campos de email.
Informacion de la tarjeta: select con diferentes tarjetas de credito, numero de tarjeta, mes de vencimiento.
En caso de que los emails no coincidan, se pide al usuario que lo revise. No se envia hasta que los mismos sean iguales.
En caso de que la orden se cree correctamente, el usuario sera redirigido a la tienda. Lo mismo ocurre en caso de que se quiera ingresar al "/checkout" sin contar con ningun producto en el carrito .

-Ruta "/nosotros" renderiza el componente Nosotros. Contiene una breve resenia de Alien Books y una imagen. No es relevante para el funcionamiento de la aplicacion.
