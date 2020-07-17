import React from 'react';
import { useSelector } from 'react-redux';

import faceDownCard from '../../assets/facedowncard.png';

import { rulesStore } from '../utils/enums';

const Game = () => {
  const { cardsRemaining, currentCard } = useSelector((state) => ({
    ...state.gameReducer,
    ...state.partyReducer,
  }));

  const renderCard = () => {
    return currentCard ? (
      <img src={currentCard.image} alt={currentCard.code} />
    ) : (
      <img src={faceDownCard} alt="back-of-a-playing-card" width="225.996px" />
    );
  };

  return (
    <>
      <section className="game-half">
        <>{renderCard()}</>
        <section>cards remaining: {cardsRemaining}</section>
      </section>
      <section className="game-half">
        <section className="prompt-container">
          <strong>
            {currentCard
              ? rulesStore[currentCard.value]
              : 'click draw card to play'}
          </strong>
        </section>
        <section className="gif-container">
          {/* <iframe src={displayGif}></iframe> */}
        </section>
      </section>
    </>
  );
};

export default Game;
