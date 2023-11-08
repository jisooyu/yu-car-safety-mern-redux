import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import safetyReducer from './reducers/safetyReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	safety: safetyReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
