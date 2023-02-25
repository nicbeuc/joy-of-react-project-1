import React from 'react';
import GuessInput from './GuessInput';
import PrevGuesses from './PrevGuesses';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuessSubmit(val) {
    setGuesses([
      ...guesses,
      val
    ]);
  }

  return (<>
    <PrevGuesses guesses={guesses} />
    <GuessInput handleGuessSubmit={handleGuessSubmit} />
  </>);
}

export default Game;
