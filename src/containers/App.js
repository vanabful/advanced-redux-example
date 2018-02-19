import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCard, deleteMode } from '../redux/actions';

import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import EditForm from './EditForm';
import DeleteForm from '../components/DeleteForm';
import FavouritesList from '../components/FavouritesList';

class App extends Component {

  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  filterCards = (searchText) => {}

  handleDelete(e) {
    this.props.actions.deleteCard(this.props.delete);
    this.props.actions.deleteMode('');
  }

  handleCancel(e) {
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
          {this.props.delete !== '' ? <DeleteForm handleDelete={this.handleDelete} handleCancel={this.handleCancel}/> : null}
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
    delete: state.cards.delete   
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(
      {
          deleteCard,
          deleteMode
      },
      dispatch
      )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
