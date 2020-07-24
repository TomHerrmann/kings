import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch, useStore } from 'react-redux';
import { cardsGet, gameLoading } from './actions/gameActions';
import { partyCreate, partyJoin, userAdd } from './actions/partyActions';
import { socketCreate } from './actions/socketActions';
import io from 'socket.io-client';

import DrawCardButton from './components/DrawCardButton.jsx';
import Game from './components/Game.jsx';
import LoadingIcon from './components/LoadingIcon.jsx';
import Carousel from './components/Carousel.jsx';
import NewGameButton from './components/NewGameButton.jsx';

import { deckAPI } from './utils/enums';

const faceDownCard = {
  // code is used only for alt tag
  code: 'facedown playing card',
  image: '../../assets/facedowncard.png',
  value: 'facedown',
};

// ADD age check
// ADD Game Rules Carousel
// ADD Game Rules field
// ADD KING Rules field
// ADD Current play / queue
// ADD Question Master field

const socket = io();

const App = () => {
  const dispatch = useDispatch();
  const { carouselOpen, isLoading, partyCode } = useSelector((state) => ({
    ...state.gameReducer,
    ...state.partyReducer,
    ...state.socketReducer,
  }));

  socket.on('partyCreated', (partyData) => {
    fetchDeck();
    dispatch(partyCreate(partyData));
  });
  socket.on('newPlayer', () => {
    socket.emit('emitState', { carouselOpen, isLoading, partyCode });
  });

  console.log('party code ->', partyCode);

  useEffect(() => {
    dispatch(socketCreate(socket));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(gameLoading(carouselOpen));
    }, 250);
  }, [carouselOpen]);

  const fetchDeck = async () => {
    try {
      const deckPromise = await fetch(`${deckAPI}new/shuffle/`);
      const { deck_id } = await deckPromise.json();

      dispatch(cardsGet(deck_id));
    } catch (err) {
      console.log(`Fetch failed with ${err}`);
    }
  };

  // handle gif function

  const renderGame = () => {
    return isLoading ? (
      <LoadingIcon />
    ) : (
      <>
        <section className="buttons-container">
          <DrawCardButton />
          <NewGameButton />
        </section>
        <Game />
      </>
    );
  };

  return (
    <main className="app">
      <header>
        <h1>Kings</h1>
      </header>
      {carouselOpen ? (
        <Carousel />
      ) : (
        <section className="game-container">{renderGame()}</section>
      )}
    </main>
  );
};

const AppContainer = connect()(App);

export default AppContainer;
