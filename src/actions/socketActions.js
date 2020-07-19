import {
  PARTY_SOCKET_CREATE,
  PARTY_SOCKET_JOIN,
  SOCKET_CREATE,
} from '../constants/socketActionTypes';

export const partySocketCreate = (socket, partyName) => ({
  type: PARTY_SOCKET_CREATE,
  payload: { socket, partyName },
});

export const partySocketJoin = (socket, partyId) => ({
  type: PARTY_SOCKET_JOIN,
  payload: { socket, partyId },
});

export const socketCreate = (socket) => ({
  type: SOCKET_CREATE,
  payload: socket,
});
