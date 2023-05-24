import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Browser/ProductCard.scss';

const ProductCard = (props) => {
	const { product } = props;
	const productID = product.id;

	let inStockStatus;
	if (product.availability) {
		inStockStatus = <span className='in-stock-true-card'>In stock</span>;
	} else {
		inStockStatus = <span className='in-stock-false-card'>On request</span>;
	}

	return (
		<Link to={`/product-page/${productID}`}>
			<div className='ProductCard' data-testid='ProductCard'>
				<img src={product.imgSmall} alt='product-img-card' />
				<div className='prod-info-card'>
					<div className='prod-name-card'>{product.name}</div>
					<div className='prod-availability-card'>{inStockStatus}</div>
					<div className='prod-price-card'>${product.price}</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
