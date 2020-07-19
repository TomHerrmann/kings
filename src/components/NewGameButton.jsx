import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameLoading, gameNew } from '../actions/gameActions';

import { deckAPI } from '../utils/enums';

const NewGameButton = () => {
  const dispatch = useDispatch();
  const { cardsRemaining, deckId } = useSelector((state) => state.gameReducer);

  const onButtonClick = async () => {
    if (cardsRemaining !== 52) {
      try {
        await fetch(`${deckAPI}${deckId}/shuffle/`);
        await dispatch(gameNew());
      } catch (err) {
        console.log(`Fetch failed with ${err}`);
      }

      setTimeout(() => {
        dispatch(gameLoading(false));
      }, 250);
    }
  };

  return (
    <section className="new-game-button-container">
      <button className="new" onClick={onButtonClick}>
        New Game
      </button>
    </section>
  );
};

export default NewGameButton;
