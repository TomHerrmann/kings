import {
  // game actionTypes
  CARDS_GET,
  CARDS_GET_ERROR,
  CARDS_DRAW,
  GAME_CATEGORY_CREATE,
  GAME_LOADING,
  GAME_NEW,
  GAME_RULE_CREATE,
  // party actionTypes
  SLIDE_SELECT,
  PARTY_CREATE,
  PARTY_JOIN,
  USER_ADD,
} from '../constants/actionTypes';

// seperate state / game & party
const initialState = {
  // game state
  cardsRemaining: 52,
  currentCard: null,
  deckId: null,
  displayGif: null,
  gifStore: {},
  isLoading: true,
  pulledCards: [],
  // party state
  slideStatus: 'create',
  carouselOpen: true,
  partyName: '',
  playerName: '',
  players: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // game cases
    case CARDS_GET: {
      const deckId = action.payload;

      return {
        ...state,
        isLoading: false,
        deckId,
      };
    }
    case CARDS_GET_ERROR: {
      return {
        ...state,
      };
    }
    case CARDS_DRAW: {
      const { currentCard, cardsRemaining } = action.payload;

      const pulledCards = [...state.pulledCards].push(currentCard);

      return {
        ...state,
        currentCard,
        cardsRemaining,
        isLoading: true,
        pulledCards,
      };
    }
    case GAME_LOADING: {
      const { isLoading } = action.payload;

      return {
        ...state,
        isLoading,
      };
    }
    case GAME_CATEGORY_CREATE: {
      return {
        ...state,
      };
    }
    case GAME_NEW: {
      const { cardsRemaining, currentCard, pulledCards } = initialState;

      console.log('new currentCard in gameNew reducer --> ', currentCard);

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

    // party cases
    case SLIDE_SELECT: {
      const slideStatus = action.payload;

      return {
        ...state,
        slideStatus,
      };
    }
    case PARTY_CREATE: {
      const partyName = action.payload;
      return {
        ...state,
      };
    }
    case PARTY_JOIN: {
      const partyName = action.payload;
      return {
        ...state,
      };
    }
    case USER_ADD: {
      const nickname = action.payload;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
