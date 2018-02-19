import React from 'react';
import Card from '../containers/Card';

const FavouritesList = (props) => {
  return (
    <aside className="container--flex container--flex--column c-sidebar">
        <h1 className="c-sidebar__title">Favourites</h1>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </aside>
  );
}

export default FavouritesList;
