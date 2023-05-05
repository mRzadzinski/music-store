import React from 'react';
import '../../styles/Browser/Display.scss';
import ProductCard from './ProductCard';
import products from '../../products-data';

const Display = () => {
	return (
		<div className='Display'>
			<div className='sort'>
				<label htmlFor='price-sort'>Sort by Price:</label>
				<select name='' id='price-sort'>
					<option value='Low to High'>Low to High</option>
					<option value='High to low'>High to Low</option>
				</select>
			</div>

			<div className='display-area'>
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
				<ProductCard product={products[12]} />
			</div>
		</div>
	);
};

export default Display;
