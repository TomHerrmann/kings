import React, { useState, useEffect } from 'react';

import DrawCardButton from './components/DrawCardButton.jsx';
import InPlay from './components/InPlay.jsx';
import NewGameButton from './components/NewGameButton.jsx';

import faceDownCard from '../assets/facedowncard.png';
const deckAPI = 'https://deckofcardsapi.com/api/deck/';

const App = () => {
  const [deckId, setDeckId] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [cardsRemaining, setCardsRemaining] = useState('52');
  const [pulledCards, setPulledCards] = useState([]);

  useEffect(() => {
    fetchDeck();
  }, []);

  const fetchDeck = async () => {
    try {
      const deckPromise = await fetch(`${deckAPI}new/shuffle/`);
      const { deck_id } = await deckPromise.json();

      setDeckId(deck_id);
    } catch (err) {
      console.log(`Fetch failed with ${err}`);
    }
  };

  const startNewGame = () => {
    fetchDeck();
    setCurrentCard(null);
    setCardsRemaining(null);
    setPulledCards([]);
  };

  const drawCard = async () => {
    console.log('being called');
    try {
      const drawCardPromise = await fetch(`${deckAPI}/${deckId}/draw`);
      const { cards, remaining } = await drawCardPromise.json();

      setCardsRemaining(remaining);
      setCurrentCard(cards[0]);
      setPulledCards(pulledCards.concat(cards[0]));
    } catch (err) {
      console.log(`Fetch failed with ${err}`);
    }
  };

  return (
    <div className="app">
      <div className="title-container">
        <h1>Kings</h1>
      </div>
      <NewGameButton startNewGame={startNewGame} />
      <DrawCardButton drawCard={drawCard} />
      <div className="game-container">
        {currentCard ? (
          <InPlay currentCard={currentCard} />
        ) : (
          <img src={faceDownCard} alt="back-of-a-playing-card" width="225.996px" />
        )}
      </div>
      <div className="cards-remaining-container">cards remaining: {cardsRemaining}</div>
    </div>
  );
};

export default App;

// w ->
// h -> 313.984
