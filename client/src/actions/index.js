import axios from 'axios';
import { FETCH_USER, FETCH_DATA } from './types';

// define the async action creators
export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchData = () => async (dispatch) => {
	const res = await axios.get('/api/safety');
	dispatch({ type: FETCH_DATA, payload: res.data });
};
