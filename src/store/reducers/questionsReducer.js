const initialState = {
  questionBank: [
    {
      questionId: 1,
      questionName: "¿Qué se conoce como 'Época Precolombina'?",
      possibleAnswers: [
        "Antes del asentamiento de los colombianos en el territorio",
        "Antes de la llegada de los Incas",
        "Antes de la llegada de Cristóbal Colón a América",
      ],
      correctAnswer: "Antes de la llegada de Cristóbal Colón a América",
    },
    {
      questionId: 2,
      questionName:
        "¿En qué año llegó Cristóbal Colón a América por primera vez?",
      possibleAnswers: ["1492", "1497", "1592"],
      correctAnswer: "1492",
    },
    {
      questionId: 3,
      questionName:
        "¿Cuáles fueron los últimos dos países que lograron la independencia de España a finales del siglo XIX?",
      possibleAnswers: [
        "Cuba y Venezuela",
        "Paraguay y Colombia",
        "Cuba y Puerto Rico",
      ],
      correctAnswer: "Cuba y Puerto Rico",
    },
    {
      questionId: 4,
      questionName:
        "¿Quién pronunció la frase 'Maldito sea el soldado que vuelva las armas contra su pueblo'",
      possibleAnswers: ["Jose de San Martin", "Simon Bolivar", "Hugo Chavez"],
      correctAnswer: "Simon Bolivar",
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
