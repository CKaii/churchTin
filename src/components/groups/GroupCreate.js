import React from 'react';
import { connect } from 'react-redux'
import { groupCreate } from '../../actions'
import GroupForm from './GroupForm'

class GroupCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.groupCreate(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Group</h3>
        <GroupForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { groupCreate })(GroupCreate)
