import Guess from "./Guess";
import { range } from "../../utils";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const guessRange = range(0, NUM_OF_GUESSES_ALLOWED);

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guessRange.map(index => (
        <Guess key={index} guess={guesses[index]}/>
      ))}
    </div>
  )
}

export default GuessResults;