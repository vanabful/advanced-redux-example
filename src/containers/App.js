import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteUser, deleteMode, removeFavourite } from '../redux/actions';

import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import EditForm from './EditForm';
import DeleteForm from '../components/DeleteForm';
import FavouritesList from '../components/FavouritesList';

class App extends Component {

  filterCards = (searchText) => {}

  deleteCard = () => {
    if(this.props.delete !== ''){
      this.props.actions.deleteUser(this.props.delete);
    }
    else {
      this.props.actions.removeFavourite(this.props.favourite);
    }
    this.props.actions.deleteMode({delete: '', favourite: ''});
  }

  cancelDelete = (e) => {
    e.preventDefault();
    this.props.actions.deleteMode('');
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="container--flex wrapper">
          <Sidebar />
          <Main cards={this.props.filteredCards} />
          <FavouritesList cards={this.props.favourites} />
          {this.props.edit !== '' ? <EditForm /> : null}
          {(this.props.delete !== '' || this.props.favourite !== '') ? <DeleteForm handleDelete={this.deleteCard} handleCancel={this.cancelDelete}/> : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredCards: state.cards.filteredCards, 
    edit: state.cards.edit,
    favourites: state.cards.favouritesCards,
    delete: state.cards.delete,
    favourite: state.cards.removeFavourite   
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(
      {
          deleteUser,
          deleteMode,
          removeFavourite
      },
      dispatch
      )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
