import React from 'react';
import Card from '../containers/Card';

const CardList = (props) => {
  return (
    <div className="container--flex container--flex--column">
      {props.cards.map(card => <Card key={card.id} {...card} card={card}/>)}
    </div>
  );
}

export default CardList;
