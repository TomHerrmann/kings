import {
  CARDS_GET,
  CARDS_GET_ERROR,
  CARDS_DRAW,
  GAME_CATEGORY_CREATE,
  GAME_LOADING,
  GAME_NEW,
  GAME_RULE_CREATE,
} from '../constants/gameActionTypes';

export const cardsGet = (deckId) => ({
  type: CARDS_GET,
  payload: deckId,
});

export const cardsGetError = () => ({
  type: CARDS_GET_ERROR,
  payload: null,
});

export const cardsDraw = (currentCard, cardsRemaining) => ({
  type: CARDS_DRAW,
  payload: { currentCard, cardsRemaining },
});

export const gameCategoryCreate = () => ({
  type: GAME_CATEGORY_CREATE,
  payload: null,
});

export const gameLoading = (isLoading) => ({
  type: GAME_LOADING,
  payload: isLoading,
});

export const gameNew = () => ({
  type: GAME_NEW,
  payload: null,
});

export const gameRuleCreate = () => ({
  type: GAME_RULE_CREATE,
  payload: null,
});
