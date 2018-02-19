import React from 'react';
import AddForm from '../containers/AddForm';
import CardList from './CardList';

const Main = (props) => {
  return (
    <main className="container--flex container--flex--column">
      <AddForm />
      <CardList cards={props.cards} />
    </main>
  );
}

export default Main;
