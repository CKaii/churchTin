import React from 'react';
import { connect } from 'react-redux'
import { fetchDetail, editGroup } from '../../actions'
import GroupForm from './GroupForm'
import _ from 'lodash';

class GroupEdit extends React.Component {
  componentDidMount() {
    this.props.fetchDetail(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editGroup(this.props.match.params.id, formValues)
  }

  render() {
    if (!this.props.group) {
      return(
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div>
        <h3>Edit Group Details</h3>
        <GroupForm
          initialValues={_.pick(this.props.group, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    group: state.groups[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchDetail, editGroup })(GroupEdit);
