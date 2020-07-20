import {
  SLIDE_SELECT,
  PARTY_CREATE,
  PARTY_JOIN,
  USER_ADD,
} from '../constants/partyActionTypes';

const initialState = {
  carouselOpen: true,
  partyCode: null,
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
      const { partyCode, partyName } = action.payload;

      return {
        ...state,
        partyCode,
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

export default partyReducer;
