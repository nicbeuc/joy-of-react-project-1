import { range } from "../../utils";

const letterRange = range(0, 5);

function Guess({ guess = '' }) {
  return (
    <p className="guess">
      {letterRange.map(index => (
        <span key={index} className="cell">{guess.length > 0 && guess[index]}</span>
      ))}
    </p>
  )
}

export default Guess;