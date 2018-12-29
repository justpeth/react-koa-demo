import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getChatUserList} from '../../store/chatuser.redux'

import UserCard from '../usercard'

@withRouter
@connect(
  state => state,
  {getChatUserList}
)
class Hunter extends Component {
  componentDidMount () {
    let {getChatUserList} = this.props
    getChatUserList({type: 'boss'})
  }
  render () {
    let { userList } = this.props.chatuser
    let lists = userList.filter(e => e.integrity)
    return (
      <UserCard type='boss' list={lists}></UserCard>
    )
  }
}
export default Hunter;