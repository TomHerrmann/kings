import {
  PARTY_CREATE,
  PARTY_JOIN,
  SLIDE_SELECT,
} from '../constants/partyActionTypes';

import { USER_ADD } from '../constants/gameActionTypes';

const initialState = {
  carouselOpen: true,
  partyCode: null,
  partyName: '',
  slideStatus: 'create',
};

const partyReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case SLIDE_SELECT: {
      const slideStatus = action.payload;

      return {
        ...state,
        slideStatus,
      };
    }
    case USER_ADD: {
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
