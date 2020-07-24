import { SOCKET_CREATE } from '../constants/socketActionTypes';

// async action items using ~ sockets
export const partySocketCreate = (socket, partyName) => {
  return (dispatch) => {
    const partyCode = Math.random()
      .toString(36)
      .substr(2, 4)
      .toUpperCase();
    const newPartyData = { partyCode, partyName };

    socket.emit('createParty', newPartyData);
  };
};

export const partySocketJoin = (socket, partyCode) => {
  return (dispatch) => {
    socket.emit('joinParty', partyCode);
  };
};

// boilerplate redux actions
export const socketCreate = (socket) => ({
  type: SOCKET_CREATE,
  payload: socket,
});
