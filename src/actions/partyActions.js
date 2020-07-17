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

export const partyCreate = (partyName) => ({
  type: PARTY_CREATE,
  payload: partyName,
});

export const partyJoin = (partyName) => ({
  type: PARTY_JOIN,
  payload: partyName,
});

export const userAdd = (nickname) => ({
  type: USER_ADD,
  payload: nickname,
});
