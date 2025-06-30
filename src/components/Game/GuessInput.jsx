import React, { useState } from "react";

function GuessInput({ onGuess }) {
  const [guess, setGuess] = useState("");

  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length === 5) {
      onGuess(guess);
      setGuess("");
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        className="guess-input"
        placeholder="Enter your guess"
        type="text"
        value={guess}
        onChange={handleChange}
        maxLength="5"
        required
        autoFocus
      />
    </form>
  );
}

export default GuessInput;
