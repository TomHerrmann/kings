import React, { useState, useEffect } from 'react';

import DrawCardButton from './components/DrawCardButton.jsx';
import Game from './components/Game.jsx';
import LoadingIcon from './components/LoadingIcon.jsx';
import NewGameButton from './components/NewGameButton.jsx';

import { gifQueryStore } from './utils/enums';
import randomNumber from './utils/randomNumber';

const deckAPI = 'https://deckofcardsapi.com/api/deck/';
const giphyAPI = 'https://api.giphy.com/v1/gifs/search';
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
  const [gifStore, setGifStore] = useState({});
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
    const embed_urls = [];

    if (!gifStore[query]) {
      const gifPromise = await fetch(`${giphyAPI}?api_key=${giphyKey}&q=${query}&limit=4`);
      const { data } = await gifPromise.json();
      // data is an array of 4 gif objects

      embed_urls.push(...data.map(gif => gif.embed_url));
    } else {
      embed_urls.push(...gifStore[query].slice());
    }

    // pop gif embed_url off array and set it as display gif
    const popped = embed_urls.pop();
    setDisplayGif(popped);

    // create a temp obj, set query as string and remaining embed_urls as value to update state
    const tempObj = {};
    tempObj[query] = embed_urls;
    setGifStore(Object.assign(gifStore, tempObj));
  };

  const startNewGame = () => {
    if (cardsRemaining !== 52) {
      fetchDeck();
      fetchGifs('welcome');
      setCurrentCard(null);
      setCardsRemaining(52);
      setGifStore({});
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

// w ->
// h -> 313.984
