import React from 'react';
import GuessInput from './GuessInput';
import GuessResults from './GuessResults';
import Banner from './Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('in progress');

  function handleGuessSubmit(val) {
    if (val === answer) {
      setGuesses([
        ...guesses,
        val
      ]);
      setStatus('won');
      return;
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGuesses([
        ...guesses,
        val
      ]);
      setStatus('lost');
      return;
    }
    setGuesses([
      ...guesses,
      val
    ]);
  }

  return (<>
    <GuessResults guesses={guesses} answer={answer}/>
    <GuessInput
      handleGuessSubmit={handleGuessSubmit}
      disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED || status !== 'in progress'}
    />
    {status !== 'in progress' &&
      <Banner
        status={status}
        numOfGuesses={guesses.length}
        answer={answer}
      />
    }
  </>);
}

export default Game;
