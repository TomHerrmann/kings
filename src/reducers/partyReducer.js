import {
  SLIDE_SELECT,
  PARTY_CREATE,
  PARTY_JOIN,
  USER_ADD,
} from '../constants/partyActionTypes';

const initialState = {
  carouselOpen: true,
  partyName: '',
  playerName: '',
  players: [],
  slideStatus: 'create',
};

const partyReducer = (state = initialState, action) => {
  switch (action.type) {
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
        partyName,
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
        carouselOpen: false,
      };
    }
    default:
      return state;
  }
};

export default partyReducer;
