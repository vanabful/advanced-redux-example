import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions';

class AddForm extends Component {
  state = {
    username: ''
  }

  handleSubmit = (event) => {
    event.preventDefault(); 
    this.props.actions.addUser(this.state.username);  
    this.setState({ username: '' });        
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
        addUser
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
