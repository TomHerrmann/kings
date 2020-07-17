import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { cardsDraw, gameLoading } from '../actions/gameActions';

import { deckAPI } from '../utils/enums';

const DrawCardButton = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const { deckId } = store.getState();

  return (
    <section className="draw-card-button-container">
      <button
        className="draw"
        onClick={async () => {
          try {
            const drawCardPromise = await fetch(`${deckAPI}/${deckId}/draw`);
            const { cards, remaining } = await drawCardPromise.json();

            dispatch(cardsDraw(cards[0], remaining));
          } catch (err) {
            console.log(`Fetch failed with ${err}`);
          }

          setTimeout(() => {
            dispatch(gameLoading(false));
          }, 250);
        }}
      >
        Draw a Card
      </button>
    </section>
  );
};

export default DrawCardButton;
