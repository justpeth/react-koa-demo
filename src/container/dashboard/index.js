import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import {
  Header,
  Footer
} from './style';

import Hunter from '../../components/hunter'
import Boss from '../../components/boss'
import User from '../../components/user'

function Msg () {
  return <h2>消息列表</h2>
}


@connect(
  state => state.user
)
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.navClickHandle = this.navClickHandle.bind(this);
  }
  render () {
    let pahtList = '/boss,/hunter,/msg,/me';
    let { type } = this.props;
    let { pathname } = this.props.location;
    if (pahtList.split(',').indexOf(pathname) === -1) {
      return null
    }
    let navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: '&#xe729;',
        icon_active: '&#xe727;',
        title: '牛人列表',
        component: Boss,
        hide: type === 'hunter'
      },
      {
        path: '/hunter',
        text: 'boss',
        icon: '&#xe729;',
        icon_active: '&#xe727;',
        title: 'boss列表',
        component: Hunter,
        hide: type === 'boss'
      },
      {
        path: '/msg',
        text: '消息',
        icon: '&#xe7db;',
        icon_active: '&#xe769;',
        title: '消息列表',
        component: Msg
      },
      {
        path: '/me',
        text: '我的',
        icon: '&#xe6f4;',
        icon_active: '&#xe6f3;',
        title: '个人中心',
        component: User
      }
    ];
    var lists = navList.filter(e => !e.hide)
    return (
      <div>
        <Header>{navList.find(e => e.path === pathname).title}</Header>
        <Switch>
          {
            lists.map(e => <Route key={e.path} path={e.path} component={e.component}></Route>)
          }
        </Switch>
        <Footer>
          {
            lists.map(e => (
              <div className="item" key={e.title}>
                <div className={e.path === pathname ? 'item-link active' : 'item-link'} onClick={() => { this.navClickHandle(e) }}>
                  <p>
                    <i className='icon-font' dangerouslySetInnerHTML={{
                      __html: e.path === pathname ? e.icon_active : e.icon
                    }}></i>
                  </p>
                  <p className="name">{e.text}</p>
                </div>
              </div>
            )
            )
          }
        </Footer>
      </div>
    )
  }
  navClickHandle (e) {
    let { history } = this.props;
    let { pathname } = this.props.location;
    if (pathname === e.path) {
      return
    }
    history.push(e.path)
  }
}

export default Dashboard;