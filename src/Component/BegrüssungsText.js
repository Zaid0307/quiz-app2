import React, { useState, useEffect } from "react";
import styled from "styled-components";
import questions from "../data/questions.json";

function BegrüssungsText() {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  useEffect(() => {
    setCurrentQuestion(selectRandomQuestion());
  }, []);

  function selectRandomQuestion() {
    // flatten the questions array
    const allQuestions = [].concat(
      ...questions.categories.map((c) => c.quizzes.map((q) => q.questions))
    );
    // select a random question
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    return allQuestions[randomIndex];
  }

  function handleAnswer(answer) {
    if (answer === currentQuestion.answer) {
      setCorrectAnswers(correctAnswers + 1);
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setTimeout(() => {
      setCurrentQuestion(selectRandomQuestion());
      setIsAnswerCorrect(false);
    }, 2500);
  }

  return (
    <Container>
      <Question>{currentQuestion.question}</Question>
      <Options>
        {currentQuestion.options.map((option, index) => (
          <OptionButton
            key={index}
            onClick={() => handleAnswer(option)}
            isCorrect={isAnswerCorrect && currentQuestion.answer === option}
          >
            {option}
          </OptionButton>
        ))}
      </Options>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Question = styled.p`
  margin: 1em 0;
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const OptionButton = styled.button`
  margin: 0.5em;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  border: none;
  background-color: ${(props) => (props.isCorrect ? "green" : "white")};
  color: ${(props) => (props.isCorrect ? "white" : "black")};
  &:hover {
    background-color: ${(props) =>
      props.isCorrect ? "lightgreen" : "lightgray"};
  }
`;

export default BegrüssungsText;
