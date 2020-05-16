import React from 'react';

const NewGameButton = ({ startNewGame }) => {
  return (
    <div className="new-game-button-container">
      <button className="new" onClick={startNewGame}>
        New Game
      </button>
    </div>
  );
};

export default NewGameButton;
