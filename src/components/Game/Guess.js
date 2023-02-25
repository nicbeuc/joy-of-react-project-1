import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

const letterRange = range(0, 5);

function Guess({ guess, answer }) {
  if (guess) {
    const letterStatuses = checkGuess(guess, answer);
    return (
      <p className="guess">
        {letterRange.map(index => (
          <span
            key={index}
            className={`cell ${letterStatuses[index].status}`}
          >
            {guess[index]}
          </span>
        ))}
      </p>
    )
  }
  return (
    <p className="guess">
      {letterRange.map(index => (
        <span
          key={index}
          className="cell"
        ></span>
      ))}
    </p>
  )
}

export default Guess;