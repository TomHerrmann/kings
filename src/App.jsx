import React, { useState, useEffect } from 'react';

import DrawCardButton from './components/DrawCardButton.jsx';
import InPlay from './components/InPlay.jsx';
import LoadingIcon from './components/LoadingIcon.jsx';
import NewGameButton from './components/NewGameButton.jsx';

import faceDownCard from '../assets/facedowncard.png';
const deckAPI = 'https://deckofcardsapi.com/api/deck/';
const giphyAPI = 'https://api.giphy.com/v1/gifs/search';
const giphyKey = 'zgiDSRigeFuCU4oGWmbaqMA3sXe6pP6V';

const App = () => {
  const [deckId, setDeckId] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [cardsRemaining, setCardsRemaining] = useState('52');
  const [pulledCards, setPulledCards] = useState([]);
  const [gifStore, setGifStore] = useState({});
  const [displayGif, setDisplayGif] = useState({});
  // change default isloading to true
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGifs('welcome');
    fetchDeck();
    setIsLoading(false);
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
    const gifPromise = await fetch(`${giphyAPI}?api_key=${giphyKey}&q=${query}&limit=4`);
    const { data } = await gifPromise.json();
    // data is an array of 4 gif objects

    if (query === 'hi') {
      setDisplayGif(data[0].embed_url);
    } else {
      const newGifStore = {};
    }
  };

  const startNewGame = () => {
    fetchDeck();
    setCurrentCard(null);
    setCardsRemaining(null);
    setPulledCards([]);
  };

  const drawCard = async () => {
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
      {isLoading ? <LoadingIcon /> : null}
      <div className="overlay">
        <div className="title-container">
          <h1>Kings</h1>
        </div>
        <NewGameButton startNewGame={startNewGame} />
        <DrawCardButton drawCard={drawCard} />
        <div className="game-container">
          {currentCard ? (
            <InPlay currentCard={currentCard} displayGif={displayGif} />
          ) : (
            <img src={faceDownCard} alt="back-of-a-playing-card" width="225.996px" />
          )}
          <img src={displayGif} alt="a random gif" />
        </div>
        <div className="cards-remaining-container">cards remaining: {cardsRemaining}</div>
      </div>
    </div>
  );
};

export default App;

// w ->
// h -> 313.984
