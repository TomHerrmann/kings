import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardsDraw, gameLoading } from '../actions/gameActions';

import { deckAPI } from '../utils/enums';

const DrawCardButton = () => {
  const dispatch = useDispatch();
  const { deckId } = useSelector((state) => state.gameReducer);

  const onButtonClick = async () => {
    console.log('hittting');
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
  };

  return (
    <section className="draw-card-button-container">
      <button className="draw" onClick={onButtonClick}>
        Draw a Card
      </button>
    </section>
  );
};

export default DrawCardButton;
