import React from 'react';
import FavouritesCard from '../containers/FavouritesCard';

const FavouritesList = (props) => {
  return (
    <aside className="container--flex container--flex--column c-sidebar">
        <h1 className="c-sidebar__title">Favourites</h1>
      {props.cards.map(card => <FavouritesCard key={card.id} {...card} />)}
    </aside>
  );
}

export default FavouritesList;
