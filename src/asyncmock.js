const books = [
  {
    id: 1,
    autor: "Dan Simmons",
    name: "Hyperion",
    price: 8500,
    image: "/portadasLibros/hyperion.jpg",
  },
  {
    id: 2,
    autor: "Dan Brown",
    name: "Inferno",
    price: 4000,
    image: "/portadasLibros/inferno.jpg",
  },
  {
    id: 3,
    autor: "William Gibson",
    name: "Neuromante",
    price: 7200,
    image: "/portadasLibros/neuromante.jpg",
  },
];

export const getBooks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let azar = Math.random();
      if (azar > 0.2) {
        resolve(books);
      } else {
        reject("Error de red");
      }
    }, 2000);
  });
};
