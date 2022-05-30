const books = [
  {
    id: 1,
    autor: "Dan Simmons",
    name: "Hyperion",
    price: 8500,
    image: "/portadasLibros/hyperion.jpg",
    description: `En el siglo XXVIII la humanidad se encuentra expandiéndose por la galaxia, después de haber abandonado el moribundo planeta Tierra original. La llamada Hegemonía del Hombre mantiene la paz en una sorprendente pero evolutivamente estanca y acomodada sociedad que forma la Red de Mundos durante los últimos tres siglos, asesorada por las misteriosas Inteligencias Artificiales, quienes adquirieron conciencia propia y se liberaron del control de hombre siglos atrás para abocarse a sus propios intereses.\nEn el mundo de Hyperion, más allá de la Red de Mundos, se encuentran las Tumbas del Tiempo, artefactos enviados desde el futuro lejano que están a punto de abrirse y encierran un terrible secreto relacionado con una imposible criatura que solo se comunica mediante la muerte, el Alcaudón, o Señor del Dolor, considerado por algunos como una deidad y por otros como avatar de la inminente expiación humana. Asimismo, unos seres exteriores conocidos como éxters, descendientes también de la vieja Tierra, han demostrado el mismo interés por este extraño mundo: por razones desconocidas, todos los grupos de poder del universo conocido desean tomar el control del planeta en el momento que se abrirán las Tumbas de Tiempo.\nEn este contexto, siete personas se dirigen en Hyperion a una última peregrinación a su encuentro con el Alcaudón. Todos ellos, portadores de historias increíbles y temibles secretos, muestran al contar sus historias, pinceladas del complejo universo desarrollado por Simmons y de una sociedad abocada a una lucha por su destino, a la que tal vez puedan salvar.`,
  },
  {
    id: 2,
    autor: "Dan Brown",
    name: "Inferno",
    price: 4000,
    image: "/portadasLibros/inferno.jpg",
    description:
      "El profesor de simbología Robert Langdon se despierta en un hospital en mitad de la noche, desorientado y con una herida en la cabeza. No recuerda nada de las últimas treinta y seis horas. Ni cómo ha llegado hasta allí, ni el origen del macabro objeto que los médicos descubren entre sus pertenencias.",
  },
  {
    id: 3,
    autor: "William Gibson",
    name: "Neuromante",
    price: 7200,
    image: "/portadasLibros/neuromante.jpg",
    description:
      "Un futuro invadido por microprocesadores, en el que la información es la materia prima. Vaqueros como Henry Dorrett Case se ganan la vida hurtando información, traspasando defensas electrónicas, bloques tangibles y luminosos, como rascacielos geométricos.",
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

export const getBookById = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(books.find((e) => e.id === 3)), 2000);
  });
};
