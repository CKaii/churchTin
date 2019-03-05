import React from 'react';
import Modal from '../Modal'
import { Link } from 'react-router-dom'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchDetail, deleteGroup } from '../../actions'

class GroupDelete extends React.Component {
  componentDidMount() {
    this.props.fetchDetail(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteGroup(id)} className='ui button negative'>Delete</button>
        <Link to='/' className='ui button'>Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.group) {
      return 'Are you sure you want to delete this group?'
    }
    return `Are you sure you want to delete the group with title: ${this.props.group.title}`
  }
  render() {
    return(
      <Modal
        title="Delete Group"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
 }

const mapStateToProps = (state, ownProps) => {
  return {
    group: state.groups[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchDetail, deleteGroup })(GroupDelete);
