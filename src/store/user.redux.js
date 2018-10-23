
import { fromJS } from 'immutable';
// const 
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCESS = 'LOGIN_SUCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'

const initState= ({
	redirectTo:'',
	isAuth:false,
	msg:'',
	user:'',
	type:''
})

// actionCreators



// reducer
export function user (state = initState, action) {
	switch(action.type) {
		case constants.CHANGE_LOGIN:
			return state.set('login', action.value);
		case constants.LOGOUT:
			return state.set('login', action.value);
		default:
			return state;
  }
  
  switch(action.type){
		case REGISTER_SUCCESS:
			return {...state, msg:'', redirectTo:'',isAuth:true,...action.payload}
		case LOGIN_SUCESS:
			return {...state, msg:'',redirectTo:'',isAuth:true,...action.payload}
		case LOAD_DATA:
			return {...state, ...action.payload}
		case ERROR_MSG:
			return {...state, isAuth:false, msg:action.msg}
		default:
			return state
	}
}