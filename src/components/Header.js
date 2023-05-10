import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const Header = ({ changeCategory, resetFilters }) => {
	return (
		<div className='Header'>
			<div
				className='title'
				onClick={() => {
					resetFilters();
				}}
			>
				<Link to='/'>GUITAR-GEAR</Link>
			</div>
			<nav>
				<div className='basket-counterpart'></div>
				<div className='categories'>
					<div
						className='category-container'
						onClick={() => {
							resetFilters();
							changeCategory('guitar');
						}}
					>
						<Link to='/browser'>
							<li className='category'>Guitars</li>
						</Link>
					</div>
					<div
						className='category-container'
						onClick={() => {
							resetFilters();
							changeCategory('amplifier');
						}}
					>
						<Link to='/browser'>
							<li className='category'>Amplifiers</li>
						</Link>
					</div>
					<div
						className='category-container'
						onClick={() => {
							resetFilters();
							changeCategory('effect');
						}}
					>
						<Link to='/browser'>
							<li className='category'>Effects</li>
						</Link>
					</div>
				</div>
				<div className='basket-container'>
					<FontAwesomeIcon icon={faBasketShopping} />
					<div id='basket-count'>5</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
