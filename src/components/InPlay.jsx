import React from 'react';

import NewGameButton from './NewGameButton.jsx';
import DrawCardButton from './DrawCardButton.jsx';

import { rulesStore } from '../utils/enums';

const InPlay = ({ currentCard }) => {
  const { suit, value } = currentCard;

  return (
    <div className="in-play-container">
      <div className="card-image-container">
        <img src={currentCard.image} alt={currentCard.code} />
      </div>
      <div className="card-and-rule-container">
        {value} of {suit}
        {rulesStore[value]}
      </div>
    </div>
  );
};

export default InPlay;
