import Ajax from '../request'
import { getRedirectPath } from '../utils';
import Toast from '../components/toast';
// const 
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCESS = 'LOGIN_SUCESS'
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
		type: REGISTER_SUCCESS
	}
}
function loginSuccess(data){
	return {
		payload: data,
		type: LOGIN_SUCESS
	}
}

// reducer
const initState= {
	redirectTo: '', // 跳转页面
	isAuthrize: false, // 是否登录 默认未登录
	message: '',	// 登录或者注册显示的message 空时表示注册登录成功 不为空则为失败的消息
  username: '', // 用户姓名
	type: '' // 用户类型 boss 或者 牛人
};
export function user (state = initState, action) {
	switch(action.type) {
		case REGISTER_SUCCESS:
			return {
				...state,
				message: '',
				redirectTo: getRedirectPath( {type: action.payload.type}),
				isAuthrize: true,
				...action.payload
			}
		case LOGIN_SUCESS:
			return {
				...state,
				message: '',
				redirectTo: getRedirectPath( {type: action.payload.type}),
				isAuthrize: true,
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
	return state;
}

