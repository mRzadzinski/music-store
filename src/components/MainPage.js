import React from 'react';
import '../styles/MainPage.scss';
import { Link } from 'react-router-dom';

const MainPage = ({ resetFilters }) => {
	return (
		<div className='MainPage' data-testid='main-page'>
			<div className='main-left' data-testid='main-left'>
				<div className='adv-title'>ELECTRIC GEAR</div>
				<div className='adv-content'>Get yours today!</div>
				<div className='shop-btn-container'>
					<Link to='/browser'>
						<button id='shop-now-btn' onClick={resetFilters}>
							SHOP NOW
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
