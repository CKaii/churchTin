import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDetails } from '../../actions';

class GroupHome extends React.Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  renderAdmin(group) {
    if (group.userID === this.props.currentUserId) {
      return(
        <div className="right floated content">
          <Link to={`groups/edit/${group.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`groups/delete/${group.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      )
    }
  }

  renderList() {
  return this.props.groups.map(group => {
    return(
      <div className="item" key={group.id}>
      {this.renderAdmin(group)}
      <i className="large middle aligned icon camera" />
        <div className="content">
          {group.title}
          <div className="description">{group.description}</div>
        </div>
      </div>
    )
  })
}

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{textAlign: 'right'}}>
          <Link to="/groups/new" className="ui button primary">
            Create Group
          </Link>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <h2>Groups</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    )
  }
  }

  const mapStateToProps = (state) => {
  return {
     streams: Object.values(state.groups),
     currentUserId: state.auth.userId,
     isSignedIn: state.auth.isSignedIn
    }
  }

  export default connect(mapStateToProps, { fetchDetails })(GroupHome);
