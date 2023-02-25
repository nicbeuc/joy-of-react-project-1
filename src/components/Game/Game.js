import React from 'react';
import GuessInput from './GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');

  function handleGuessSubmit(val) {
    setGuess(val);
  }

  return (
    <GuessInput
      handleGuessSubmit={handleGuessSubmit}
    />
  );
}

export default Game;
