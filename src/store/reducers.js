import { combineReducers } from 'redux'
import { user } from './user.redux';
import { chatuser } from './chatuser.redux'

const reducers = combineReducers({
	user,
	chatuser
});

export default reducers;