import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BegrüssungsText from "./BegrüssungsText";

test("renders Quiz Joke and Answer", () => {
  const { getByText } = render(<BegrüssungsText />);
  const joke = getByText("Quiz-Scherz: Warum war der Mathematiker immer müde?");
  expect(joke).toBeInTheDocument();

  fireEvent.click(getByText("Antwort anzeigen"));

  const answer = getByText("Weil er ständig über Integralen schlief!");
  expect(answer).toBeInTheDocument();
});
