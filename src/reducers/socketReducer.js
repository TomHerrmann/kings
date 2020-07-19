import { SOCKET_CREATE } from '../constants/socketActionTypes';

const initialState = {
  socket: null,
};

const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_CREATE: {
      const socket = action.payload;

      return {
        ...state,
        socket,
      };
    }
    default:
      return state;
  }
};

export default socketReducer;
