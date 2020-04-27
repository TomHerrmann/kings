import React from 'react';

import NewGameButton from './NewGameButton.jsx';
import DrawCardButton from './DrawCardButton.jsx';

import { rulesStore } from '../utils/enums';

const InPlay = ({ cardsRemaining, currentCard, displayGif }) => {
  const { suit, value } = currentCard;

  const cardInPlay = cardsRemaining === 52 ? faceDownCard : currentCard.image;
  console.log('displayGif', displayGif);
  return (
    <div className="in-play-container">
      <div className="in-play-left">
        <div>
          <img src={currentCard.image} alt={currentCard.code} />
        </div>
        <div>cards remaining: {cardsRemaining}</div>
      </div>
      <div className="in-play-right"></div>

      <div className="prompt-container">{rulesStore[value]}</div>
      <div className="gif-container">
        <iframe src={displayGif}></iframe>
        <p>"Powered By GIPHY"</p>
      </div>
    </div>
  );
};

export default InPlay;
