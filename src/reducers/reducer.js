import {
  CARDS_GET,
  CARDS_GET_ERROR,
  CARDS_DRAW,
  GAME_CATEGORY_CREATE,
  GAME_LOADING,
  GAME_NEW,
  GAME_RULE_CREATE,
  MODAL_SELECT,
  PARTY_CREATE,
  PARTY_JOIN,
  USER_ADD,
} from '../constants/actionTypes';

const initialState = {
  cardsRemaining: 52,
  currentCard: null,
  deckId: null,
  displayGif: null,
  gifStore: {},
  isLoading: true,
  modalStatus: 'create',
  modalOpen: true,
  partyName: '',
  playerName: '',
  players: [],
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
    case MODAL_SELECT: {
      const modalStatus = action.payload;
      return {
        ...state,
        modalStatus,
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
