import Ajax from '../request'
import { getRedirectPath } from '../utils';
import Toast from '../components/toast';


// const
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_USER_DATA = 'LOAD_USER_DATA'

// actionCreators

export function register({username, password, rpassword, type}){
	if(!username || !password) {
		return errorMsg('用户名密码必须输入');
	}
	if(!type){
		return errorMsg('必须选择用户类型');
	}
	if(password !== rpassword) {
		return errorMsg('密码和确认密码必须相同');
	}
	return dispatch => {
		Ajax.doRegister({username, password, rpassword, type})
			.then(res => {
				if(res.code === 0) {
					dispatch(registerSuccess(res.data))
				}
			})
	}
}

export function login({username, password}){
	if(!username || !password) {
		return errorMsg('用户名密码必须输入');
	}
	return dispatch => {
		Ajax.login({username, password})
			.then(res => {
				if(res.code === 0) {
					dispatch(loginSuccess(res.data))
				}
			})
	}
}

export function update({title, desc, company, money}){
	if(!title || !desc || !company || !money) {
		return errorMsg('请输入完整的信息');
	}
	return dispatch => {
		Ajax.update({title, desc, company, money}).then(res => {
			console.log(res);
			if(res.code === 0){
				dispatch(authSuccess(res.data))
			}
		})
	}
}

export function loadUserData(userInfo){
	return {
		type: LOAD_USER_DATA,
		payload: userInfo
	}
}

function errorMsg(message){
	Toast({message})
	return {
		message,
		type: ERROR_MSG
	}
}
function registerSuccess(data){
	return {
		payload: data,
		type: AUTH_SUCCESS
	}
}
function loginSuccess(data){
	return {
		payload: data,
		type: AUTH_SUCCESS
	}
}

function authSuccess (data){
	return {
		payload: data,
		type: AUTH_SUCCESS
	}
}

// reducer
const initState= {
	redirectTo: '', // 跳转页面
	message: '',	// 登录或者注册显示的message 空时表示注册登录成功 不为空则为失败的消息
  username: '', // 用户姓名
	type: '' // 用户类型 boss 或者 牛人
};
export function user (state = initState, action) {
	switch(action.type) {
		case AUTH_SUCCESS: 
			return {
				...state,
				message: '',
				redirectTo: getRedirectPath( action.payload),
				...action.payload
			}
		case LOAD_USER_DATA:
			return {
				...state,
				...action.payload
			}
		case ERROR_MSG: 
			return { 
				...state,
				message: action.message,
				isAuthrize: false,
			}
		default:
			return state;
	}
}

