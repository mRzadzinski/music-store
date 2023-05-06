import React from 'react';
import '../../styles/Browser/ProductCard.scss';

const ProductCard = (props) => {
	const { product } = props;

	let inStockStatus;
	if (product.availability) {
		inStockStatus = <span className='in-stock-true-card'>In stock</span>;
	} else {
		inStockStatus = <span className='in-stock-false-card'>On request</span>;
	}

	return (
		<div className='ProductCard'>
			<img src={product.imgSmall} alt='product-img-card' />
			<div className='prod-info-card'>
				<div className='prod-name-card'>{product.name}</div>
				<div className='prod-availability-card'>{inStockStatus}</div>
				<div className='prod-price-card'>${product.price}</div>
			</div>
		</div>
	);
};

export default ProductCard;
