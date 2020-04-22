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
        <h2>
          {value} of {suit}
        </h2>
        <h3>{rulesStore[value]}</h3>
      </div>
    </div>
  );
};

export default InPlay;
