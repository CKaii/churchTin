import React from 'react';
import { connect } from 'react-redux';
import { fetchDetail } from '../../actions'

class GroupDetails extends React.Component {
  componentDidMount() {
    this.props.fetchDetail(this.props.match.params.id);
  }

  render() {
    if (!this.props.group) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h1>{this.props.group.title}</h1>
        <h3>{this.props.group.description}</h3>
        <h5>{this.props.group.goals}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { group: state.groups[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchDetail })(GroupDetails);
