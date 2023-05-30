import React, { useEffect, useRef } from 'react';
import '../../styles/Browser/Filters.scss';

const Filters = ({
	resetFilters,
	changeCategory,
	changePriceRange,
	changeAvailability,
	category,
	priceRange,
	availability,
}) => {
	const allCategory = useRef(null);
	const guitarsCategory = useRef(null);
	const amplifiersCategory = useRef(null);
	const effectsCategory = useRef(null);

	const minPrice = useRef(null);
	const maxPrice = useRef(null);
	const availabilityInput = useRef(null);

	useEffect(() => {
		if (category) {
			let cat;
			if (category === 'all') {
				cat = allCategory;
			} else if (category === 'guitar') {
				cat = guitarsCategory;
			} else if (category === 'amplifier') {
				cat = amplifiersCategory;
			} else if (category === 'effect') {
				cat = effectsCategory;
			}
			setFontWeight(cat);
		}

		if (priceRange[0]) {
			minPrice.current.value = priceRange[0];
		}
		if (priceRange[1]) {
			maxPrice.current.value = priceRange[1];
		}

		if (availability) {
			availabilityInput.current.checked = true;
		}
	}, [category]);

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
					id='reset-filters-btn' data-testid='reset-filters-btn'
					onClick={() => {
						resetFilters();
						resetFilterInputs();
						setFontWeight();
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
				data-testid='amplifiers-category'
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
				data-testid='effects-category'
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
						data-testid='minPrice'
						type='number'
						ref={minPrice}
						onChange={(e) => changePriceRange(e.target.value, null)}
					/>
					<span className='price-range-text'>-</span>
					<input
						data-testid='maxPrice'
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
						data-testid='in-stock-checkbox'
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
					<div
						className='in-stock'
						onClick={() => availabilityInput.current.click()}
					>
						In stock
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
