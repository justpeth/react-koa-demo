import { combineReducers } from 'redux-immutable';
import { user } from './user.redux';

const reducer = combineReducers({
	user
});

export default reducer;