import React, { useState, useEffect } from "react";
import styled from "styled-components";

function BegrüssungsText() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    if (showAnswer) {
      const timeoutId = setTimeout(() => {
        setShowAnswer(false);
      }, 3500);
      return () => clearTimeout(timeoutId);
    }
  }, [showAnswer]);

  return (
    <Container>
      <p>
        Willkommen bei unserer Quiz-App! Hier können Sie selbst Quizzen
        erstellen oder vorhandene Quizzen beantworten. Testen Sie Ihr Wissen und
        lernen Sie etwas Neues, indem Sie an unseren Quizzen teilnehmen. Wussten
        Sie schon, dass Quizzen eine tolle Möglichkeit sind, um Ihr Gedächtnis
        zu trainieren und Ihre kognitiven Fähigkeiten zu verbessern? Also,
        worauf warten Sie noch? Legen Sie los und machen Sie mit!
      </p>
      <p>Quiz-Scherz: Warum war der Mathematiker immer müde?</p>
      {showAnswer ? (
        <QuizJoke>Weil er ständig über Integralen schlief!</QuizJoke>
      ) : (
        <button onClick={() => setShowAnswer(true)}>Antwort anzeigen</button>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const QuizJoke = styled.p`
  font-size: 16px;
  margin: 20px 0;
`;

export default BegrüssungsText;
