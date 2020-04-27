import React from 'react';

import faceDownCard from '../../assets/facedowncard.png';

const Welcome = ({ cardsRemaining, displayGif }) => {
  return (
    <div className="welcome-conatainer">
      <div className="welcome-left">
        <div className="card-down-container">
          <img src={faceDownCard} alt="back-of-a-playing-card" width="225.996px" />
        </div>
        <div>cards remaining: {cardsRemaining}</div>
      </div>
      <div className="welcome-right">
        <div className="prompt-container">
          <strong>click draw card to play</strong>
        </div>
        <div className="gif-container">
          <iframe src={displayGif}></iframe>
          <p>"Powered By GIPHY"</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
