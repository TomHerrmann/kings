import React from 'react';
import { useStore } from 'react-redux';

import faceDownCard from '../../assets/facedowncard.png';

import { rulesStore } from '../utils/enums';

const Game = () => {
  const store = useStore();
  const { cardsRemaining, currentCard } = store.getState();

  return (
    <section className="game-container">
      <section className="game-half">
        <>
          {currentCard ? (
            <img src={currentCard.image} alt={currentCard.code} />
          ) : (
            <img
              src={faceDownCard}
              alt="back-of-a-playing-card"
              width="225.996px"
            />
          )}
        </>
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
    </section>
  );
};

export default Game;
