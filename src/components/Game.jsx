import React from 'react';
import { useStore } from 'react-redux';

import faceDownCard from '../../assets/facedowncard.png';

import { rulesStore } from '../utils/enums';

const Game = () => {
  const store = useStore();
  const { cardsRemaining, currentCard } = store.getState();

  return (
    <div className="game-container" className="game-container">
      <div className="game-half">
        <div>
          {currentCard ? (
            <img src={currentCard.image} alt={currentCard.code} />
          ) : (
            <img
              src={faceDownCard}
              alt="back-of-a-playing-card"
              width="225.996px"
            />
          )}
        </div>
        <div>cards remaining: {cardsRemaining}</div>
      </div>
      <div className="game-half">
        <div className="prompt-container">
          <strong>
            {currentCard
              ? rulesStore[currentCard.value]
              : 'click draw card to play'}
          </strong>
        </div>
        <div className="gif-container">
          {/* <iframe src={displayGif}></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Game;
