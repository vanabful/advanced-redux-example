import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterCards } from '../redux/actions';

class Search extends Component {
  handleChange = (event) => {
    this.props.actions.filterCards(event.target.value);
  };

  render() {
    return (
      <div className="c-sidebar__search">
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Search . . ."
          required 
        />
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
        filterCards
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
