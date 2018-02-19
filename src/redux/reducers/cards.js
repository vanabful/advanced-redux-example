import { ADD_CARD, FILTER_CARDS, DELETE_CARD, EDIT_CARD, EDIT_MODE, ADD_FAVOURITES, DELETE_MODE } from '../actions';

const initialState = {
  cards: [{
    id: 31274389,
    name: 'Ivan Lovrić',
    avatar_url: "https://avatars3.githubusercontent.com/u/31274389?v=4",
    company: "Profico.hr"
  }],
  filteredCards: [{
    id: 31274389,
    name: 'Ivan Lovrić',
    avatar_url: "https://avatars3.githubusercontent.com/u/31274389?v=4",
    company: "Profico.hr"
  }],
  selectedCard: {
    id: '',
    name: '',
    company: ''
  },
  favouritesCards: [],
  delete: '',
  edit: ''
};

function addCard(state, action) {
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

function filterCards(state, action) {
  return Object.assign({}, state, {
    filteredCards: state.cards.filter(card => 
      card.name.toLowerCase().search(action.payload.toLowerCase()) !== -1),
  });
}

function deleteCard(state, action) {
  return Object.assign({}, state, {
    cards: state.cards.filter(card => 
      card.id !== action.payload), 
  }, 
  {
    filteredCards: state.filteredCards.filter(card => 
      card.id !== action.payload),
  });
}

function editMode(state, action) {
  return {
    ...state,
    edit: action.payload
  }
}

function editCard(state, action) {
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

function addFavouritesCard(state, action) {
  return {
    ...state,
    favouritesCards: [
      ...state.favouritesCards,
      action.payload
    ]
  }
}

function deleteMode(state, action){
  return {
    ...state,
    delete: action.payload
  }
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return addCard(state, action);    

    case FILTER_CARDS:
      return filterCards(state, action);   
      
    case DELETE_CARD:
      return deleteCard(state, action);

    case EDIT_MODE:
      return editMode(state, action);

    case EDIT_CARD:
      return editCard(state, action);

    case ADD_FAVOURITES:
      return addFavouritesCard(state, action);

    case DELETE_MODE:
      return deleteMode(state, action);

    default:
      return state;
  }
}