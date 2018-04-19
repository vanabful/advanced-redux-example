import { createAction } from '../../utils/action-helpers';

// fetching users, missing failure part
export const FETCH_USER = 'FETCH_USER';
export const fetchUser = createAction(FETCH_USER);
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = createAction(FETCH_USER_SUCCESS);

// adding users, missing failure part
export const ADD_USER = 'ADD_USER';
export const addUser = createAction(ADD_USER);
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const addUserSuccess = createAction(ADD_USER_SUCCESS);

// deleting users, missing failure part
export const DELETE_USER = 'DELETE_USER';
export const deleteUser = createAction(DELETE_USER);
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const deleteUserSuccess = createAction(DELETE_USER_SUCCESS);

// updateing users, missing failure part
export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = createAction(UPDATE_USER);
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const updateUserSuccess = createAction(UPDATE_USER_SUCCESS);

// showing edit and delete forms
export const EDIT_MODE = 'EDIT_MODE';
export const editMode = createAction(EDIT_MODE);
export const DELETE_MODE = 'DELETE_MODE';
export const deleteMode = createAction(DELETE_MODE);

// filtering users and adding them and removing from favourites
export const FILTER_CARDS = 'FILTER_CARDS';
export const filterCards = createAction(FILTER_CARDS);
export const ADD_FAVOURITES = 'ADD_FAVORUTIES';
export const addFavouritesCard = createAction(ADD_FAVOURITES);
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const removeFavourite = createAction(REMOVE_FAVOURITE);
