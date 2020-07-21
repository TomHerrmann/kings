import {
  PARTY_CREATE,
  PARTY_JOIN,
  SLIDE_SELECT,
} from '../constants/partyActionTypes';

export const partyCreate = ({ partyCode, partyName }) => ({
  type: PARTY_CREATE,
  payload: { partyCode, partyName },
});

export const partyJoin = (partyCode) => ({
  type: PARTY_JOIN,
  payload: partyCode,
});

export const slideSelect = (selected) => ({
  type: SLIDE_SELECT,
  payload: selected,
});
