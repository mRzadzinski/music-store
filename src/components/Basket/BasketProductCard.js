import React, { useEffect, useRef, useState } from 'react';
import '../../styles/Basket/BasketProductCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const BasketProductCard = ({ product, quantity, updateProductQuantity }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [basePrice, setBasePrice] = useState(null);
	const quantityInput = useRef(null);

	useEffect(() => {
		setTotalPrice(product.price * quantity);

		if (quantity > 1) {
			const priceDiv = <div className='base-price'>${product.price}</div>;
			setBasePrice(priceDiv);
		} else {
			setBasePrice(null);
		}
	}, [quantity]);

	return (
		<div className='BasketProductCard'>
			<div className='card-left'>
				<img
					src={product.imgSmall}
					alt='product-img-card'
					className='product-img-basket'
				/>
				<div className='name-count-basket'>
					<div className='name-count-basket-empty'></div>
					<div className='prod-name-basket'>{product.name}</div>
					<select
						ref={quantityInput}
						defaultValue={quantity}
						name=''
						className='add-count'
						onChange={() =>
							updateProductQuantity(product, +quantityInput.current.value)
						}
					>
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
				</div>
			</div>
			<div className='card-right'>
				<div className='remove-item'>
					<FontAwesomeIcon
						icon={faTrash}
						size='lg'
						style={{ color: '#ababab' }}
					/>
				</div>
				<div className="prices">
					{basePrice}
					<div className='prod-price-basket'>${totalPrice}</div>
				</div>
			</div>
		</div>
	);
};

export default BasketProductCard;
