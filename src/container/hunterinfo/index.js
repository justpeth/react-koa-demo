import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {update} from '../../store/user.redux';
import {
  InfoHeader,
  InfoWrapper
} from '../bossinfo/style';

@connect(
  state=>state.user,
  {update}
)
class HunterInfo extends Component {
  constructor (props){
    super(props);
    this.state = {
      type: 'hunter',
      title: '',
      money: '',
      desc: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  render () {
    let { title, money, desc } = this.state;
    const { redirectTo } = this.props;
    return (
      <div>
        {redirectTo ? <Redirect to={redirectTo}/> : null }
        <InfoHeader><span>hunter信息完善页面</span></InfoHeader>
        <InfoWrapper>
          <div className="input-list">
            <div className="left">应聘职位</div>
            <div className="right">
              <input type="text" placeholder="请输入应聘职位" onChange={v=>this.handleChange('title',v)} value={title}/>
            </div>
          </div>
          <div className="input-list">
            <div className="left">期望薪资</div>
            <div className="right">
              <input type="text" placeholder="请输入期望薪资" onChange={v=>this.handleChange('money',v)} value={money}/>
            </div>
          </div>
          <div className="input-list">
            <div className="left">个人简介</div>
            <div className="right">
              <textarea placeholder="个人简介" onChange={v=>this.handleChange('desc',v)} value={desc}></textarea>
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
};

export default HunterInfo;