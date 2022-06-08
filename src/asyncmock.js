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
  {
    id: 4,
    autor: "Stephen King",
    name: "Fairy Tale",
    price: 7200,
    image: "/portadasLibros/fairyTale.jpg",
    description:
      "Charlie Reader, un estudiante de 17 años, es el protagonista de la historia. Aunque es un joven relativamente normal, su vida está marcada por traumas. Su madre murió atropellada cuando él tenía diez años, lo que llevó a su padre a consumir alcohol de forma desmedida.",
    category: "Suspenso",
  },
  {
    id: 5,
    autor: "Isaac Asimov",
    name: "La Trilogia de la Fundacion",
    price: 7200,
    image: "/portadasLibros/fundacion.jpg",
    description:
      "La capital del Imperio es Trántor, nido de intrigas y corrupción. Gracias a su ciencia, fundada en el estudio matemático de los hechos históricos y el comportamiento de las masas, el psicohistoriador Hari Seldon prevé la caída del Imperio y el retorno a la barbarie durante varios milenios.",
    category: "CienciaFiccion",
  },
  {
    id: 6,
    autor: "John Katzenbach",
    name: "El psicoanalista",
    price: 7200,
    image: "/portadasLibros/psicoanalista.jpg",
    description:
      "Frederick Starks, psicoanalista de larga experiencia y vida tranquila, recibe una amenaza anónima. Tendrá que emplear toda su astucia para averiguar quién es el autor de esa misiva que promete hacerle la existencia imposible.",
    category: "Suspenso",
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
