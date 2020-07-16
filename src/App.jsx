import React, { useState, useEffect } from 'react';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';
import io from 'socket.io-client';

import DrawCardButton from './components/DrawCardButton.jsx';
import Game from './components/Game.jsx';
import LoadingIcon from './components/LoadingIcon.jsx';
import NewGameButton from './components/NewGameButton.jsx';

import { deckAPI, gifQueryStore } from './utils/enums';
import randomNumber from './utils/randomNumber';

const faceDownCard = {
  // code is used only for alt tag
  code: 'facedown playing card',
  image: '../../assets/facedowncard.png',
  value: 'facedown',
};

// ADD Create / Join party modal - must be 21+ required checkbox
// ADD Name modal
// ADD Game Rules modal
// ADD Game Rules field
// ADD KING Rules field
// ADD Current play / queue
// ADD Question Master field

const App = ({ cardsGet, deckId, gameNew, isLoading }) => {
  const [cardsRemaining, setCardsRemaining] = useState(52);
  const [pulledCards, setPulledCards] = useState([]);

  // const socket = io();

  useEffect(() => {
    fetchDeck();
  }, []);

  // const setupSockets = () => {
  //   socket.emit('party', partyName);
  //   socket.emit('newPlayer', playerName);
  // };

  const fetchDeck = async () => {
    try {
      const deckPromise = await fetch(`${deckAPI}new/shuffle/`);
      const { deck_id } = await deckPromise.json();

      cardsGet(deck_id);
    } catch (err) {
      console.log(`Fetch failed with ${err}`);
    }
  };

  // const fetchGifs = async (query) => {
  //   const embed_urls = [];

  //   if (!gifStore[query]) {
  //     const gifPromise = await fetch(
  //       `${giphyAPI}?api_key=${giphyKey}&q=${query}&limit=4`
  //     );
  //     const { data } = await gifPromise.json();
  //     // data is an array of 4 gif objects

  //     embed_urls.push(...data.map((gif) => gif.embed_url));
  //   } else {
  //     embed_urls.push(...gifStore[query].slice());
  //   }

  //   // pop gif embed_url off array and set it as display gif
  //   const popped = embed_urls.pop();
  //   setDisplayGif(popped);

  //   // create a temp obj, set query as string and remaining embed_urls as value to update state
  //   const tempObj = {};
  //   tempObj[query] = embed_urls;
  //   setGifStore(Object.assign(gifStore, tempObj));
  // };

  return (
    <div className="app">
      <div className="title-container">
        <h1>Kings</h1>
      </div>
      <main>
        {isLoading ? (
          <LoadingIcon />
        ) : (
          <>
            <div className="buttons-container">
              <DrawCardButton />
              <NewGameButton />
            </div>
            <Game />
          </>
        )}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions }, dispatch);

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
