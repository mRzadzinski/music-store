import React from 'react';
import '../styles/Browser.scss';
import Filters from './Browser/Filters';
import Display from './Browser/Display';

const Browser = (props) => {
	const {
		displayProducts,
		resetFilters,
		changeCategory,
		changePriceRange,
		changeAvailability,
		sortByPrice,
		changeSortMethod,
	} = props;

	return (
		<div className='Browser'>
			<Filters
				resetFilters={resetFilters}
				changeCategory={changeCategory}
				changePriceRange={changePriceRange}
				changeAvailability={changeAvailability}
			/>
			<Display
				displayProducts={displayProducts}
				sortByPrice={sortByPrice}
				changeSortMethod={changeSortMethod}
			/>
		</div>
	);
};

export default Browser;
