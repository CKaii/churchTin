import React from 'react';
import { connect } from 'react-redux'
import { createGroup } from '../../actions'
import { Field, reduxForm } from 'redux-form'

const CreateGroup = () => {
  return (
    <div className="ui containter">
      <div className="ui grid centered">
        <div className="ui row">
          <div className="eight wide column">
            <div className="ui form">
              <div className="field">
                <label>Group Name</label>
                <input type="text" />
              </div>
              <div className="field">
                <label>Daily Goal</label>
                <input type="text" />
              </div>
              <div class="field">
                <label>Group Details</label>
                <textarea></textarea>
              </div>
              <div>
                <button class="ui right floated negative basic button">Cancel</button>
                <button class="ui right floated primary basic button">Invite Friends</button>
                <button class="ui right floated positive basic button">Create Group</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateGroup;
