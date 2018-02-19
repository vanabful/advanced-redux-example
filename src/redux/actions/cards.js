import { createAction } from '../../utils/action-helpers';

export const ADD_CARD = 'ADD_CARD';
export const addCard = createAction(ADD_CARD);

export const FILTER_CARDS = 'FILTER_CARDS';
export const filterCards = createAction(FILTER_CARDS);

export const DELETE_CARD = 'DELETE_CARD';
export const deleteCard = createAction(DELETE_CARD);

export const EDIT_CARD = 'EDIT_CARD';
export const editCard = createAction(EDIT_CARD);

export const EDIT_MODE = 'EDIT_MODE';
export const editMode = createAction(EDIT_MODE);

export const DELETE_MODE = 'DELETE_MODE';
export const deleteMode = createAction(DELETE_MODE);

export const ADD_FAVOURITES = 'ADD_FAVORUTIES';
export const addFavouritesCard = createAction(ADD_FAVOURITES);
