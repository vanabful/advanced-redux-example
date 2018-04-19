import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser, editMode } from '../redux/actions';

class EditForm extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            company: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    cancelEdit = (event) => {
        event.preventDefault();
        this.props.actions.editMode({id: '', avatar_url: ''});
    }

    saveEdit = (event) =>{
        event.preventDefault();
        const editedCard = {
            id: this.props.id,
            name: this.state.name,
            company: this.state.company,
            avatar_url: this.props.image
        }

        this.props.actions.updateUser(editedCard);
        this.props.actions.editMode({id: '', avatar_url: ''});
    }

    render() {
        return(
            <div className="c-edit">
                <form className="c-edit__form">
                    <h2 className="c-edit__form__name">Edit user</h2>
                    <div className="c-edit__form__title">
                        <label className="c-edit__form__title__name" >Name</label>
                        <input type="text" name="name" placeholder="Edit name..." onChange={this.handleChange} value={this.state.name}/>
                    </div>
                    <div className="c-edit__form__description">
                        <label>Company</label>
                        <input type="text" name="company" placeholder="Edit company..." onChange={this.handleChange} value={this.state.company}/>
                    </div>
                    <div className="c-edit__form__buttons">
                        <button className="c-edit__form__buttons__cancel" onClick={this.cancelEdit}>Cancel</button>
                        <button type="submit" className="c-edit__form__buttons__submit" onClick={this.saveEdit}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        id: state.cards.edit,
        image: state.cards.image
    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
        {
            updateUser,
            editMode
        },
        dispatch
        )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);