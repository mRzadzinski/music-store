import React from 'react';
import '../../styles/Browser/ProductCard.scss';
import products from '../../products-data';

const ProductCard = (props) => {
	const { product } = props;

	let inStockStatus;
	if (product.availability) {
		inStockStatus = <span className='in-stock-true'>In stock</span>;
	} else {
		inStockStatus = <span className='in-stock-false'>On request</span>;
	}

	return (
		<div className='ProductCard'>
			<img src={product.imgSmall} alt='product-img' />
			<div className="prod-info">
                <div className='prod-name'>{product.name}</div>
                <div className='prod-availability'>{inStockStatus}</div>
                <div className='prod-price'>${product.price}</div>
            </div>
		</div>
	);
};

export default ProductCard;
