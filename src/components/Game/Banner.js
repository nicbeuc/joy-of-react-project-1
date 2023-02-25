function Banner({
  status,
  numOfGuesses,
  answer
}) {
  return (
    <div className={`banner ${status === 'won' ? 'happy' : 'sad'}`}>
      {status === 'won' ?
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{` ${numOfGuesses} guess${numOfGuesses > 1 ? 'es' : ''}`}</strong>.
        </p>
      :
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      }
    </div>
  )
}

export default Banner;