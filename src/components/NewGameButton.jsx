import React from 'React';

const NewGameButton = ({ startNewGame }) => {
  return (
    <div className="new-game-button-container">
      <button className="button" onClick={startNewGame}>
        New Game
      </button>
    </div>
  );
};

export default NewGameButton;
