import { FILTER_CARDS, EDIT_MODE, ADD_FAVOURITES, DELETE_MODE, FETCH_USER_SUCCESS, ADD_USER_SUCCESS, DELETE_USER_SUCCESS, UPDATE_USER_SUCCESS, REMOVE_FAVOURITE } from '../actions';

const initialState = {
  cards: [],
  filteredCards: [],
  favouritesCards: [],
  delete: '',
  removeFavourite: '',
  edit: '',
  image: ''
};

// store data in store if fetch was successful
function fetchUserSuccess(state, action) {
  return {
    ...state,
    cards: action.payload,
    filteredCards: action.payload
  }
}

// add user to store if it was found in Github database
function addUserSuccess(state, action) {
  return {
    ...state,
    cards: [
      ...state.cards,
      action.payload
    ],
    filteredCards: [
      ...state.cards,
      action.payload
    ]
  };
}

// delete user from store if it was sucessfully deleted from database
function deleteUserSuccess(state, action) {
  return Object.assign({}, state, {
    cards: state.cards.filter(card => 
      card.id !== action.payload), 
  }, 
  {
    filteredCards: state.filteredCards.filter(card => 
      card.id !== action.payload),
  });
}

// update user data in store if it was updated in database
function updateUserSuccess(state, action) {
  return Object.assign({}, state, {
    cards: state.cards.map(card => {
      if(card.id === action.payload.id) {
        card.name = action.payload.name,
        card.company = action.payload.company
      }
      return card;
    }), 
  }, 
  {
    filteredCards: state.filteredCards.map(card => {
      if(card.id === action.payload.id) {
        card.name = action.payload.name,
        card.company = action.payload.company
      }
      return card;
    }),
  });
} 

// filter users
function filterCards(state, action) {
  return Object.assign({}, state, {
    filteredCards: state.cards.filter(card => 
      card.name.toLowerCase().search(action.payload.toLowerCase()) !== -1),
  });
}

// add user to favourites
function addFavouritesCard(state, action) {
  return {
    ...state,
    favouritesCards: [
      ...state.favouritesCards,
      action.payload
    ]
  }
}

function removeFavourite(state, action) {
  return Object.assign({}, state, {
    favouritesCards: state.favouritesCards.filter(card => 
      card.id !== action.payload),
  });
}

// display edit form
function editMode(state, action) {
  return {
    ...state,
    edit: action.payload.id,
    image: action.payload.avatar_url
  }
}

// display delete form
function deleteMode(state, action){
  return {
    ...state,
    delete: action.payload.delete,
    removeFavourite: action.payload.favourite
  }
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS: 
      return fetchUserSuccess(state, action);

    case ADD_USER_SUCCESS:
      return addUserSuccess(state, action); 
    
    case DELETE_USER_SUCCESS:
      return deleteUserSuccess(state, action);

    case UPDATE_USER_SUCCESS:
      return updateUserSuccess(state, action);

    case FILTER_CARDS:
      return filterCards(state, action);   

    case ADD_FAVOURITES:
      return addFavouritesCard(state, action);

    case REMOVE_FAVOURITE:
      return removeFavourite(state, action);

    case EDIT_MODE:
      return editMode(state, action);

    case DELETE_MODE:
      return deleteMode(state, action);

    default:
      return state;
  }
}