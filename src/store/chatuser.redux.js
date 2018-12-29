import Ajax from '../request'
import Toast from '../components/toast';


const GET_CHAT_USER_LIST = 'GET_CHAT_USER_LIST'


export function getChatUserList (type) {
  return dispatch => {
    Ajax.getUserList(type)
      .then(res => {
        dispatch(getUserListSuccess(res.data))
      })
      .catch(err => errorMsg(err.message))
  }
}

function getUserListSuccess (data) {
  return {
    type: GET_CHAT_USER_LIST,
    payload: data
  }
}


function errorMsg(message){
	Toast({message})
}
const initState = {
  userList: []
}
export function chatuser (state = initState, action) {
  switch (action.type) {
    case GET_CHAT_USER_LIST: 
      return {
        ...state,
        userList: action.payload
      }
    default:
      return state;
  }
}