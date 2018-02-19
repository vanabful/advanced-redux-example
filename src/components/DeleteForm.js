import React from 'react';

const DeleteForm = (props) => {
    return (
        <div className="c-delete">
            <div className="c-delete__form">
                <h2 className="c-delete__form__title">Delete user?</h2>
                <label className="c-delete__form__text">Are you sure you want to delete this user?</label>
                <div className="c-delete__form__buttons">
                    <button className="c-delete__form__buttons__delete" onClick={props.handleDelete}>Yes</button>
                    <button className="c-delete__form__buttons__cancel" onClick={props.handleCancel}>No</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteForm;