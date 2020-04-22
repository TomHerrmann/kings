import React from 'react';

const DrawCardButton = ({ drawCard }) => {
  return (
    <div className="draw-card-button-container">
      <button className="button" onClick={drawCard}>
        Draw a Card
      </button>
    </div>
  );
};

export default DrawCardButton;
