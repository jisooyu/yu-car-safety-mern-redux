import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from './Button';

function Header(props) {
	const navigate = useNavigate();
	const handleLogout = () => {
		window.location.href = '/api/logout';
	};
	const handleLogin = () => {
		window.location.href = '/auth/google';
	};
	const renderContent = () => {
		switch (props.auth) {
			case null:
				return;
			case false:
				return (
					<Button
						className=' text-yellow-200 hover:cursor-pointer mr-2'
						onClick={handleLogin}
					>
						Login With Google
					</Button>
				);
			default:
				return [
					<Button
						className=' text-yellow-200 hover:cursor-pointer mr-2'
						onClick={handleLogout}
					>
						Logout
					</Button>,
				];
		}
	};

	return (
		<div className='h-20 w-screen flex flex-row justify-between items-center  bg-blue-500'>
			<div className='m-2'>
				<Button
					onClick={() => navigate(props.auth ? '/display' : '/')}
					className=' text-yellow-200 hover:cursor-pointer'
				>
					Car Data
				</Button>
			</div>
			<div className='m-3'>{renderContent()}</div>
		</div>
	);
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
