import React from 'react';

function GuessInput({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log({ guess });
    setGuess('');
    const nextGuess = {
      id: crypto.randomUUID(),
      content: guess,
    };
    setGuesses([...guesses, nextGuess]);
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="guess-input">
        Enter guess:
        <input
          required
          id="guess-input"
          type="text"
          value={guess}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </label>
    </form>
  );
}

export default GuessInput;
