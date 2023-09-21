import React from 'react';

import Banner from '../Banner';

function WonBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner
      status="success"
      action={handleRestart}
      actionText="Restart game"
    >
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
