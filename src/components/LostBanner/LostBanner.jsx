import React from 'react';

import Banner from '../Banner';

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner
      status="fail"
      action={handleRestart}
      actionText="Restart game"
    >
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
