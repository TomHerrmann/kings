import {
  SLIDE_SELECT,
  PARTY_CREATE,
  PARTY_JOIN,
  USER_ADD,
} from '../constants/partyActionTypes';

export const slideSelect = (selected) => ({
  type: SLIDE_SELECT,
  payload: selected,
});

export const partyCreate = ({ partyCode, partyName }) => ({
  type: PARTY_CREATE,
  payload: { partyCode, partyName },
});

export const partyJoin = (partyCode) => ({
  type: PARTY_JOIN,
  payload: partyCode,
});

export const userAdd = (socket, nickname) => ({
  // ignore the socket
  type: USER_ADD,
  payload: nickname,
});
