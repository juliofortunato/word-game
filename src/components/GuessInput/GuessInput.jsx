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
          id="guess-input"
          type="text"
          value={guess}
          minLength={5}
          maxLength={5}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </label>
    </form>
  );
}

export default GuessInput;
