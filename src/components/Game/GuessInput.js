import React from 'react';

function GuessInput({ handleGuessSubmit }) {
  const [guessVal, setGuessVal] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={e => {
        e.preventDefault();
        handleGuessSubmit(guessVal);
        console.info({ guess: guessVal });
        setGuessVal('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        title="Five letter guess"
        pattern="[A-Za-z]{5}"
        value={guessVal}
        onChange={e => setGuessVal(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput;