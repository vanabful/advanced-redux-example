import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editMode, addFavouritesCard, deleteMode } from '../redux/actions';

class Card extends Component {

  showDeleteForm = () => {
    this.props.actions.deleteMode({delete: this.props.id, favourite: ''});
  }

  showEditForm = () => {
    this.props.actions.editMode(this.props.id);
  }

  addFavourite = () => {
    this.props.actions.addFavouritesCard(this.props.card);
  }

  render() {

    return (
      <div className="c-card">
        <img src={this.props.avatar_url} width="75" alt="avatar"/>
        <div className="c-card__content">
          <div className="c-card__content__title">{this.props.name}</div>
          <div className="c-card__content__description">{this.props.company}</div>
          <div className="c-card__content__options">
            <div className="c-card__content__options__edit">
              <FontAwesome name="pencil" onClick={this.showEditForm}/>
            </div>
            <div className="c-card__content__options__favourites">
              <FontAwesome name="star" onClick={this.addFavourite}/>
            </div>
          </div>
        </div>
        <FontAwesome name="times" className="c-card__delete" onClick={this.showDeleteForm} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        editMode,
        deleteMode,
        addFavouritesCard
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
