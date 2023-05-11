import React from 'react';
import '../styles/Basket.scss';
import BasketProductCard from './Basket/BasketProductCard';

const Basket = ({ basketItems, updateProductQuantity }) => {
	const basketEmpty = (
		<div className='Basket'>
			<div className='empty-basket'>
				<div className='empty-basket-title'>Your basket is empty</div>
				<div className='empty-basket-text'>
					Check our electric guitars, amplifiers and effects!{' '}
				</div>
			</div>
		</div>
	);
	const basketContent = (
		<div className='Basket'>
			<div className='products-basket'>
				<div className='title-basket'>Basket</div>
				<div className='display-basket'>
					{basketItems.map((item) => (
						<BasketProductCard
							key={item.product.id}
							product={item.product}
							quantity={item.quantity}
							updateProductQuantity={updateProductQuantity}
						/>
					))}
				</div>
			</div>

			<div className='total-basket'>
				<div className='total-container'>
					<div className='total-title'>Total</div>
					<div className='total-amount'>$5873</div>
				</div>
				<button className='to-checkout-btn'>TO CHECKOUT</button>
			</div>
		</div>
	);

	if (basketItems.length === 0) {
		return basketEmpty;
	} else {
		return basketContent;
	}
};

export default Basket;
