import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { gameLoading, gameNew } from '../actions/actions';

import { deckAPI } from '../utils/enums';

const NewGameButton = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const { cardsRemaining, deckId } = store.getState();

  return (
    <div className="new-game-button-container">
      <button
        className="new"
        onClick={async () => {
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
        }}
      >
        New Game
      </button>
    </div>
  );
};

export default NewGameButton;
