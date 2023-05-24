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
		category,
		priceRange,
		availability,
		sortMethod,
	} = props;

	return (
		<div className='Browser' data-testid={'Browser'}>
			<Filters
				resetFilters={resetFilters}
				changeCategory={changeCategory}
				changePriceRange={changePriceRange}
				changeAvailability={changeAvailability}
				category={category}
				priceRange={priceRange}
				availability={availability}
			/>
			<Display
				displayProducts={displayProducts}
				sortByPrice={sortByPrice}
				changeSortMethod={changeSortMethod}
				sortMethod={sortMethod}
			/>
		</div>
	);
};

export default Browser;
