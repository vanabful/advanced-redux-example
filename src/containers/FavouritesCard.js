import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteMode } from '../redux/actions';

class FavouritesCard extends Component {

  showDeleteForm = () => {
    this.props.actions.deleteMode({delete: '', favourite: this.props.id});
  }

  render() {

    return (
      <div className="c-card">
        <img src={this.props.avatar_url} width="75" alt="avatar"/>
        <div className="c-card__content">
          <div className="c-card__content__title">{this.props.name}</div>
          <div className="c-card__content__description">{this.props.company}</div>
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
        deleteMode
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesCard);
