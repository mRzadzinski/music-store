import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	return (
		<div className='Header'>
			<div className='title'>
				<Link to='/'>GUITAR-GEAR</Link>
			</div>
			<nav>
				<div className='basket-counterpart'></div>
				<div className='categories'>
					<div className='category-container'>
						<Link to='/browser'>
							<li className='category'>Guitars</li>
						</Link>
					</div>
					<div className='category-container'>
						<Link to='/browser'>
							<li className='category'>Amplifiers</li>
						</Link>
					</div>
					<div className='category-container'>
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
