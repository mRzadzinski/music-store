import React from 'react';
import '../styles/ProductPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProductPage = (props) => {
	const { product } = props;

	let inStockStatus;
	if (product.availability) {
		inStockStatus = (
			<span className='in-stock-true-page'>In stock</span>
		);
	} else {
		inStockStatus = (
			<span className='in-stock-false-page'>On request</span>
		);
	}

	return (
		<div className='ProductPage'>
			<div className='product-info'>
				<div className='arrow-container'>
					<FontAwesomeIcon icon={faArrowLeft} size='2x' />
				</div>
				<div className='prod-name-page'>{product.name}</div>
				<div className='prod-img-container-page'>
					<img src={product.imgLarge} alt='product-img' id='prod-img-page' />
				</div>
				<div className='prod-description-page'>{product.description}</div>
			</div>

			<div className='buying-info'>
				<div className='prod-price-page'>${product.price}</div>
				<div className='prod-availability-page'>{inStockStatus}</div>

				<div className="add-count-container">
					<select name='' className='add-count'>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
						<option value='10'>10</option>
					</select>
					<button id='add-to-basket-btn'>ADD TO BASKET</button>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
