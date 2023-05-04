import React from 'react';
import '../../styles/Browser/Filters.scss';

const Filters = () => {
	return (
		<div className='Filters'>
			<div className='filter'>
				<div className='filter-title'>Categories</div>
				<div className='all-cat'>All</div>
				<div className='sub-cat'>Guitars</div>
				<div className='sub-cat fat-text'>Amplifiers</div>
				<div className='sub-cat'>Effects</div>
			</div>

			<div className='filter'>
				<div className='filter-title'>Price Range</div>
				<div className='price-range'>
					<input type='number' />
					<span className='price-range-text'>-</span>
					<input type='number' />
					<span className='price-range-text'>$</span>
				</div>
			</div>

			<div className='filter'>
				<div className='filter-title'>Availability</div>
				<div className='availability'>
					<input type='checkbox' id='in-stock-checkbox' />
					<div className='in-stock'>In stock</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
