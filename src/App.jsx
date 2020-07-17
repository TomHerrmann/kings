import React, { useState, useEffect } from 'react';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from './actions/gameActions';
import * as partyActions from './actions/partyActions';
import io from 'socket.io-client';

import DrawCardButton from './components/DrawCardButton.jsx';
import Game from './components/Game.jsx';
import LoadingIcon from './components/LoadingIcon.jsx';
import Carousel from './components/Carousel.jsx';
import NewGameButton from './components/NewGameButton.jsx';

import { deckAPI, gifQueryStore } from './utils/enums';
import randomNumber from './utils/randomNumber';

const faceDownCard = {
  // code is used only for alt tag
  code: 'facedown playing card',
  image: '../../assets/facedowncard.png',
  value: 'facedown',
};

// ADD Create / Join party Carousel - must be 21+ required checkbox
// ADD Name Carousel
// ADD Game Rules Carousel
// ADD Game Rules field
// ADD KING Rules field
// ADD Current play / queue
// ADD Question Master field

const App = ({ cardsGet, deckId, gameNew, isLoading }) => {
  // const socket = io('/party');
  // socket.on('greeting', (data) => {
  //   document.querySelector('header').append(data);
  // });

  useEffect(() => {
    fetchDeck();
  }, []);

  const fetchDeck = async () => {
    try {
      const deckPromise = await fetch(`${deckAPI}new/shuffle/`);
      const { deck_id } = await deckPromise.json();

      cardsGet(deck_id);
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
      <Carousel />
    </main>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...gameActions, ...partyActions }, dispatch);

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
