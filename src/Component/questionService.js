import questions from "../Data/questions.json";

export function loadQuestions() {
  // Wähle eine zufällige Kategorie aus
  const randomCategory =
    questions.categories[
      Math.floor(Math.random() * questions.categories.length)
    ];
  // Wähle eine zufällige Quiz aus der ausgewählten Kategorie
  const randomQuiz =
    randomCategory.quizzes[
      Math.floor(Math.random() * randomCategory.quizzes.length)
    ];
  // Wähle eine zufällige Frage aus dem ausgewählten Quiz
  const randomQuestion =
    randomQuiz.questions[
      Math.floor(Math.random() * randomQuiz.questions.length)
    ];
  return { randomQuestion, randomQuiz, randomCategory };
}

/*import questions from "../Data/questions.json";

export function loadQuestions() {
  // Wähle eine zufällige Kategorie aus
  const randomCategory =
    questions.categories[
      Math.floor(Math.random() * questions.categories.length)
    ];
  // Wähle eine zufällige Quiz aus der ausgewählten Kategorie
  const randomQuiz =
    randomCategory.quizzes[
      Math.floor(Math.random() * randomCategory.quizzes.length)
    ];
  // Wähle eine zufällige Frage aus dem ausgewählten Quiz
  const randomQuestion =
    randomQuiz.questions[
      Math.floor(Math.random() * randomQuiz.questions.length)
    ];
  return {
    question: randomQuestion,
    category: randomCategory.name,
    quiz: randomQuiz.name,
  };
}
*/
