const books = [
  {
    id: 1,
    autor: "Dan Simmons",
    name: "Hyperion",
    price: 8500,
    image: "/portadasLibros/hyperion.jpg",
    description: `En el siglo XXVIII: el mundo de Hyperion, más allá de la Red de Mundos, se encuentran las Tumbas del Tiempo, artefactos enviados desde el futuro lejano que están a punto de abrirse y encierran un terrible secreto relacionado con una imposible criatura que solo se comunica mediante la muerte, el Alcaudón, o Señor del Dolor, considerado por algunos como una deidad y por otros como avatar de la inminente expiación humana. Siete personas se dirigen en Hyperion a una última peregrinación a su encuentro con el Alcaudón.`,
    category: "CienciaFiccion",
  },
  {
    id: 2,
    autor: "Dan Brown",
    name: "Inferno",
    price: 4000,
    image: "/portadasLibros/inferno.jpg",
    description:
      "El profesor de simbología Robert Langdon se despierta en un hospital en mitad de la noche, desorientado y con una herida en la cabeza. No recuerda nada de las últimas treinta y seis horas. Ni cómo ha llegado hasta allí, ni el origen del macabro objeto que los médicos descubren entre sus pertenencias.",
    category: "Suspenso",
  },
  {
    id: 3,
    autor: "William Gibson",
    name: "Neuromante",
    price: 7200,
    image: "/portadasLibros/neuromante.jpg",
    description:
      "Un futuro invadido por microprocesadores, en el que la información es la materia prima. Vaqueros como Henry Dorrett Case se ganan la vida hurtando información, traspasando defensas electrónicas, bloques tangibles y luminosos, como rascacielos geométricos.",
    category: "CienciaFiccion",
  },
];

export const getBooks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 600);
  });
};

export const getBookById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(books.find((e) => e.id === id)), 600);
  });
};

export const getBookCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books.filter((e) => e.category.toLowerCase() === category));
    }, 600);
  });
};
