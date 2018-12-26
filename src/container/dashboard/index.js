import React, { Component } from 'react';

import { connect } from 'react-redux';

@connect(
  state => state.user
)
class Dashboard extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        dashboard
      </div>
    )
  }
}

export default Dashboard;