import React from 'react';

function GuessInput({ handleGuessSubmit, disabled }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={e => {
        e.preventDefault();
        handleGuessSubmit(guess);
        console.info({ guess });
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        title="Five letter guess"
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={e => setGuess(e.target.value.toUpperCase())}
        disabled={disabled}
      />
    </form>
  )
}

export default GuessInput;