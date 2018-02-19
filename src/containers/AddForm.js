import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCard } from '../redux/actions';

class AddForm extends Component {
  state = {
    username: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then(response => response.json())
      .then(data => {
        this.props.actions.addCard(data);        
        this.setState({ username: '' });        
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="c-form">
        <input
          value={this.state.username}
          onChange={(event) => this.setState({ username: event.target.value })}
          type="text"
          placeholder="GitHub username . . ."
          required 
        />
        <button type="submit" className="c-form__button">Add card</button>
      </form>
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
        addCard
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
