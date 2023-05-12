import React, { useRef, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import '../styles/ProductPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProductPage = ({ displayProducts, addToBasket, basketItems }) => {
	const { id } = useParams();
	const quantity = useRef(null);
	const [tooManyInfo, setTooManyInfo] = useState(null);

	let product;
	displayProducts.forEach((prod) => {
		if (prod.id === +id) {
			product = prod;
		}
	});

	let inStockStatus;
	if (product.availability) {
		inStockStatus = <span className='in-stock-true-page'>In stock</span>;
	} else {
		inStockStatus = <span className='in-stock-false-page'>On request</span>;
	}

	function checkIfTooMany() {
		basketItems.forEach((item) => {
			if (item.product === product) {
				if (item.quantity + +quantity.current.value > 10) {
					setTooManyInfo(
						<div className='too-many-info'>
							You can have up to 10 units of this item in the basket.
						</div>
					);
				}
			}
		});
	}

	return (
		<div className='ProductPage'>
			<div className='product-info'>
				<NavLink to='/browser'>
					<div className='arrow-container'>
						<FontAwesomeIcon icon={faArrowLeft} size='2x' />
					</div>
				</NavLink>
				<div className='prod-name-page'>{product.name}</div>
				<div className='prod-img-container-page'>
					<img src={product.imgLarge} alt='product-img' id='prod-img-page' />
				</div>
				<div className='prod-description-page'>{product.description}</div>
			</div>

			<div className='buying-info'>
				<div className='prod-price-page'>${product.price}</div>
				<div className='prod-availability-page'>{inStockStatus}</div>

				<div className='add-count-container'>
					<select name='' className='add-count' ref={quantity}>
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
					<button
						id='add-to-basket-btn'
						onClick={() => {
							checkIfTooMany();
							addToBasket(product, +quantity.current.value);
						}}
					>
						ADD TO BASKET
					</button>
				</div>
				{tooManyInfo}
			</div>
		</div>
	);
};

export default ProductPage;
