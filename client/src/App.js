import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Landing from './components/Landing';
import CarSafety from './components/CarSafety';
import Cars from './components/Cars';

function App({ fetchUser }) {
	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	return (
		<>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Landing />}
				/>
				<Route
					path='/safety'
					element={<CarSafety />}
				/>
				<Route
					path='/display'
					element={<Cars />}
				/>
			</Routes>
		</>
	);
}

export default connect(null, actions)(App);
