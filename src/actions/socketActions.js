import { uniqueId } from 'lodash';

import {
  PARTY_SOCKET_CREATE,
  PARTY_SOCKET_JOIN,
  SOCKET_CREATE,
} from '../constants/socketActionTypes';

// async action items using ~ sockets
export const partySocketCreate = (socket, partyName) => {
  return (dispatch) => {
    const partyCode = uniqueId();
    const newPartyData = { partyCode, partyName };

    socket.emit('createParty', newPartyData);
  };
};

export const partySocketJoin = (socket, partyId) => ({
  type: PARTY_SOCKET_JOIN,
  payload: { socket, partyId },
});

// boilerplate redux actions
export const socketCreate = (socket) => ({
  type: SOCKET_CREATE,
  payload: socket,
});
