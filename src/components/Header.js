import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const Header = ({ changeCategory, resetFilters, basketItems }) => {
	const [basketItemsCount, setBasketItemsCount] = useState(0);

	useEffect(() => {
		let count = 0;
		basketItems.forEach((item) => {
			count += item.quantity;
		});
		setBasketItemsCount(count);
	}, [basketItems]);

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
					<NavLink to='/browser' className='navLink'>
						<div
							className='category-container'
							onClick={() => {
								resetFilters();
								changeCategory('guitar');
							}}
						>
							<li className='category'>Guitars</li>
						</div>
					</NavLink>
					<NavLink to='/browser' className='navLink'>
						<div
							className='category-container'
							onClick={() => {
								resetFilters();
								changeCategory('amplifier');
							}}
						>
							<li className='category'>Amplifiers</li>
						</div>
					</NavLink>
					<NavLink to='/browser' className='navLink'>
						<div
							className='category-container'
							onClick={() => {
								resetFilters();
								changeCategory('effect');
							}}
						>
							<li className='category'>Effects</li>
						</div>
					</NavLink>
				</div>
				<NavLink to='/basket' className='navLink'>
					<div
						className='basket-container'
						onClick={() => {
							resetFilters();
						}}
					>
						<FontAwesomeIcon icon={faBasketShopping} />
						<div id='basket-count'>{basketItemsCount}</div>
					</div>
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
