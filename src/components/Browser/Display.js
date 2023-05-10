import React, { useEffect, useRef } from 'react';
import '../../styles/Browser/Display.scss';
import ProductCard from './ProductCard';

const Display = (props) => {
	const { displayProducts, changeSortMethod, changeProduct, sortMethod } =
		props;
	const sortSelect = useRef(null);

	useEffect(() => {
		sortSelect.current.value = sortMethod;
	});

	return (
		<div className='Display'>
			<div className='sort'>
				<label htmlFor='price-sort'>Sort by Price:</label>
				<select
					ref={sortSelect}
					id='price-sort'
					onChange={(e) => {
						changeSortMethod(e.target.value);
					}}
				>
					<option value='Low to High'>Low to High</option>
					<option value='High to low'>High to Low</option>
				</select>
			</div>

			<div className='display-area'>
				{displayProducts.map((product) => {
					return (
						<ProductCard
							product={product}
							key={product.id}
							changeProduct={changeProduct}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Display;
