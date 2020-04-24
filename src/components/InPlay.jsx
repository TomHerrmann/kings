import React from 'react';

import NewGameButton from './NewGameButton.jsx';
import DrawCardButton from './DrawCardButton.jsx';

import { rulesStore } from '../utils/enums';

const InPlay = ({ currentCard, displayGif }) => {
  const { suit, value } = currentCard;

  return (
    <div className="in-play-container">
      <div className="card-container">
        <img src={currentCard.image} alt={currentCard.code} />
        {value} of {suit}
      </div>
      <div className="rule-container">
        <img src={displayGif} alt="a random gif" />
        {rulesStore[value]}
      </div>
    </div>
  );
};

export default InPlay;
