import React from 'react';
import '../styles/MainPage.scss';
import mainImg from '../img/fender-guitars.jpg';

const MainPage = () => {
	return (
		<div className='MainPage'>
			<div className='main-left'>
				<div className='adv-title'>ELECTRIC GUITARS</div>
				<div className='adv-content'>Get yours today!</div>
				<div className='shop-btn-container'>
					<button id='shop-now-btn'>SHOP NOW</button>
				</div>
			</div>
			<div className='main-img-container'>
				<img id='main-img' src={mainImg} alt='fender-guitars' />
			</div>
		</div>
	);
};

export default MainPage;
