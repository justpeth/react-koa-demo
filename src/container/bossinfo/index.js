import React, { Component } from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {update} from '../../store/user.redux';

import {
  InfoHeader,
  InfoWrapper
} from './style.js';

@withRouter
@connect(
  state=>state.user,
  {update}
)
class BossInfo extends Component {
  constructor (props){
    super(props);
    this.state = {
      title: '',
      company: '',
      money: '',
      desc: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  render () {
    let { title, company, money, desc } = this.state;
    const { redirectTo } = this.props;
    return (
      <div>
        {redirectTo ? <Redirect to={redirectTo}/> : null }
        <InfoHeader><span>Boss信息完善页面</span></InfoHeader>
        <InfoWrapper>
          <div className="input-list">
            <div className="left">招聘职位</div>
            <div className="right">
              <input type="text" placeholder="请输入招聘职位" onChange={v=>this.handleChange('title',v)} value={title}/>
            </div>
          </div>
          <div className="input-list">
            <div className="left">公司名称</div>
            <div className="right">
              <input type="text" placeholder="请输入招聘职位" onChange={v=>this.handleChange('company',v)} value={company}/>
            </div>
          </div>
          <div className="input-list">
            <div className="left">职位薪资</div>
            <div className="right">
              <input type="text" placeholder="请输入招聘职位" onChange={v=>this.handleChange('money',v)} value={money}/>
            </div>
          </div>
          <div className="input-list">
            <div className="left">招聘要求</div>
            <div className="right">
              <textarea placeholder="职位要求" onChange={v=>this.handleChange('desc',v)} value={desc}></textarea>
            </div>
          </div>
          <div className="btn-box">
            <button onClick={this.handleUpdate}>保存</button>
          </div>
        </InfoWrapper>
      </div>
    )
  }
  handleChange(key, e) {
    let val = e.currentTarget.value;
    this.setState({
			[key]:val
		})
  }
  handleUpdate () {
    this.props.update(this.state);
  }
}

export default BossInfo;