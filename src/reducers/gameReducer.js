import {
  CARDS_GET,
  CARDS_GET_ERROR,
  CARDS_DRAW,
  GAME_CATEGORY_CREATE,
  GAME_LOADING,
  GAME_NEW,
  GAME_RULE_CREATE,
  USER_ADD,
} from '../constants/gameActionTypes';

const initialState = {
  carouselOpen: true,
  cardsRemaining: 52,
  currentCard: null,
  deckId: null,
  displayGif: null,
  gifStore: {},
  isLoading: true,
  playerName: '',
  players: [],
  pulledCards: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARDS_DRAW: {
      const { currentCard, cardsRemaining } = action.payload;
      const pulledCards = state.pulledCards.slice();
      pulledCards.push(currentCard);

      return {
        ...state,
        currentCard,
        cardsRemaining,
        isLoading: true,
        pulledCards,
      };
    }
    case CARDS_GET: {
      const deckId = action.payload;

      return {
        ...state,
        deckId,
      };
    }
    case CARDS_GET_ERROR: {
      return {
        ...state,
      };
    }
    case GAME_CATEGORY_CREATE: {
      return {
        ...state,
      };
    }
    case GAME_LOADING: {
      const isLoading = action.payload;

      return {
        ...state,
        isLoading,
      };
    }
    case GAME_NEW: {
      const { cardsRemaining, currentCard, pulledCards } = initialState;

      return {
        ...state,
        cardsRemaining,
        currentCard,
        isLoading: true,
        pulledCards,
      };
    }
    case GAME_RULE_CREATE: {
      return {
        ...state,
      };
    }
    case USER_ADD: {
      const nickname = action.payload;
      const players = state.players.slice();
      players.push(nickname);

      return {
        ...state,
        carouselOpen: false,
        players,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
