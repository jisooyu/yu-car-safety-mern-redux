import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import CarDetails from './CarDetails';

function Cars({ fetchData, data }) {
	useEffect(() => {
		fetchData();
	}, [fetchData]);
	return (
		<div>
			<CarDetails
				data={data}
				index={data.index}
			/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	data: state.safety,
});

export default connect(mapStateToProps, actions)(Cars);
