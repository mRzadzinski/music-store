import React, { useRef } from 'react';
import '../../styles/Browser/Filters.scss';

const Filters = ({
	resetFilters,
	changeCategory,
	changePriceRange,
	changeAvailability,
}) => {
	const allCategory = useRef(null);
	const guitarsCategory = useRef(null);
	const amplifiersCategory = useRef(null);
	const effectsCategory = useRef(null);

	const minPrice = useRef(null);
	const maxPrice = useRef(null);
	const availabilityInput = useRef(null);

	function setFontWeight(category) {
		allCategory.current.classList.remove('fat-text');
		guitarsCategory.current.classList.remove('fat-text');
		amplifiersCategory.current.classList.remove('fat-text');
		effectsCategory.current.classList.remove('fat-text');

		if (!category) {
			allCategory.current.classList.add('fat-text');
		} else {
			category.current.classList.add('fat-text');
		}
	}

	function resetFilterInputs() {
		minPrice.current.value = '';
		maxPrice.current.value = '';
		availabilityInput.current.checked = false;
	}

	return (
		<div className='Filters'>
			<div className='reset-btn-container'>
				<button
					id='reset-filters-btn'
					onClick={() => {
						resetFilters();
						setFontWeight();
						resetFilterInputs();
					}}
				>
					Reset filters
				</button>
			</div>

			<div className='filter'>
				<div className='filter-title'>Categories</div>
				<div
					className='all-cat fat-text'
					ref={allCategory}
					onClick={() => {
						changeCategory('all');
						setFontWeight(allCategory);
					}}
				>
					All
				</div>
				<div
					className='sub-cat'
					ref={guitarsCategory}
					onClick={() => {
						changeCategory('guitar');
						setFontWeight(guitarsCategory);
					}}
				>
					Guitars
				</div>
				<div
					className='sub-cat'
					ref={amplifiersCategory}
					onClick={() => {
						changeCategory('amplifier');
						setFontWeight(amplifiersCategory);
					}}
				>
					Amplifiers
				</div>
				<div
					className='sub-cat'
					ref={effectsCategory}
					onClick={() => {
						changeCategory('effect');
						setFontWeight(effectsCategory);
					}}
				>
					Effects
				</div>
			</div>

			<div className='filter'>
				<div className='filter-title'>Price Range</div>
				<div className='price-range'>
					<input
						type='number'
						ref={minPrice}
						onChange={(e) => changePriceRange(e.target.value, null)}
					/>
					<span className='price-range-text'>-</span>
					<input
						type='number'
						ref={maxPrice}
						onChange={(e) => changePriceRange(null, e.target.value)}
					/>
					<span className='price-range-text'>$</span>
				</div>
			</div>

			<div className='filter'>
				<div className='filter-title'>Availability</div>
				<div className='availability'>
					<input
						ref={availabilityInput}
						onChange={() => {
							if (availabilityInput.current.checked) {
								changeAvailability(true);
							} else {
								changeAvailability(false);
							}
						}}
						type='checkbox'
						id='in-stock-checkbox'
					/>
					<div className='in-stock'>In stock</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
