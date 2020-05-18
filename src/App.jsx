import React, { useState, useEffect } from 'react';

import DrawCardButton from './components/DrawCardButton.jsx';
import Game from './components/Game.jsx';
import LoadingIcon from './components/LoadingIcon.jsx';
import NewGameButton from './components/NewGameButton.jsx';

import { gifQueryStore } from './utils/enums';
import randomNumber from './utils/randomNumber';

const deckAPI = 'https://deckofcardsapi.com/api/deck/';
const giphyAPI = 'https://api.giphy.com/v1/gifs/random';
const giphyKey = 'zgiDSRigeFuCU4oGWmbaqMA3sXe6pP6V';

const faceDownCard = {
  // code is used only for alt tag
  code: 'facedown playing card',
  image: '../../assets/facedowncard.png',
  value: 'facedown'
};

const App = () => {
  const [deckId, setDeckId] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [cardsRemaining, setCardsRemaining] = useState(52);
  const [pulledCards, setPulledCards] = useState([]);
  const [displayGif, setDisplayGif] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchGifs('welcome');
    fetchDeck();
    setTimeout(() => {
      setIsLoading(false), 0;
    });
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

  const fetchGifs = async query => {
    try {
      const gifPromise = await fetch(`${giphyAPI}?api_key=${giphyKey}&tag=${query}`);
      const { data } = await gifPromise.json();

      setDisplayGif(data.embed_url);
    } catch (err) {
      console.log(`Fetch failed with ${err}`);
    }
  };

  const startNewGame = () => {
    if (cardsRemaining !== 52) {
      fetchDeck();
      fetchGifs('welcome');
      setCurrentCard(null);
      setCardsRemaining(52);
      setPulledCards([]);
    }
  };

  const drawCard = async () => {
    try {
      const drawCardPromise = await fetch(`${deckAPI}/${deckId}/draw`);
      const { cards, remaining } = await drawCardPromise.json();

      fetchGifs(gifQueryStore[cards[0].value]);
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
      {isLoading ? (
        <LoadingIcon />
      ) : (
        // <div className="overlay">
        <main>
          <div className="buttons-container">
            <DrawCardButton drawCard={drawCard} />
            <NewGameButton startNewGame={startNewGame} />
          </div>
          <Game cardsRemaining={cardsRemaining} currentCard={currentCard} displayGif={displayGif} />
        </main>
      )}
    </div>
  );
};

export default App;
