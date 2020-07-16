import {
  CARDS_GET,
  CARDS_GET_ERROR,
  CARDS_DRAW,
  GAME_CATEGORY_CREATE,
  GAME_LOADING,
  GAME_NEW,
  GAME_RULE_CREATE,
  PARTY_CREATE,
  USER_CREATE,
} from '../constants/actionTypes';

const initialState = {
  cardsRemaining: 52,
  currentCard: null,
  deckId: null,
  displayGif: null,
  gifStore: {},
  isLoading: true,
  partyName: '',
  playerName: '',
  pulledCards: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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

      const pulledCards = [state.pulledCards].push(currentCard);

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
    case PARTY_CREATE: {
      return {
        ...state,
      };
    }
    case USER_CREATE: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
