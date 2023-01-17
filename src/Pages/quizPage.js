import React, { useState, useEffect } from "react";
import { loadQuestions } from "../Component/questionService";

function QuizPage() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [quizName, setQuizName] = useState("");
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    loadNewQuestion();
  }, []);

  function handleSelect(e) {
    setUserAnswer(e.target.innerText);
    if (userAnswer === answer) {
      loadNewQuestion();
    }
  }

  function loadNewQuestion() {
    const { randomQuestion, randomQuiz, randomCategory } = loadQuestions();
    setQuestion(randomQuestion.question);
    setOptions(randomQuestion.options);
    setAnswer(randomQuestion.answer);
    setQuizName(randomQuiz.name);
    setCategoryName(randomCategory.name);
  }

  return (
    <div>
      <h1>
        {categoryName} - {quizName}
      </h1>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button key={index} onClick={handleSelect}>
          {option}
        </button>
      ))}
      {userAnswer === answer && <p>Correct</p>}
    </div>
  );
}

export default QuizPage;
