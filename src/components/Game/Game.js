import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return (
    <div className="game">
      <h1>Wordle</h1>
      <GuessInput onGuess={(guess) => console.log(`You guessed: ${guess}`)} />
      {/* Additional game logic and components would go here */}
    </div>
  );
}

export default Game;
