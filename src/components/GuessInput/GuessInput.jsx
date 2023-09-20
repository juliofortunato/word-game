import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ guess });
        setGuess('');
      }}
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
