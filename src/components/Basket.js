import React, { useEffect, useState } from 'react';
import '../styles/Basket.scss';
import BasketProductCard from './Basket/BasketProductCard';

const Basket = ({ basketItems, updateProductQuantity, removeFromBasket }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [noCheckoutInfo, setNoCheckoutInfo] = useState(null);

	useEffect(() => {
		let total = 0;
		basketItems.forEach((item) => {
			total += item.product.price * item.quantity;
		});
		setTotalPrice(total);
	}, [basketItems]);

	function handleCheckoutClick() {
		const info = <div className='checkout-info'>There is no checkout :)</div>;
		setNoCheckoutInfo(info);
	}

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
							removeFromBasket={removeFromBasket}
						/>
					))}
				</div>
			</div>

			<div className='total-basket'>
				<div className='total-container'>
					<div className='total-title'>Total</div>
					<div className='total-amount'>${totalPrice}</div>
				</div>
				<button className='to-checkout-btn' onClick={handleCheckoutClick}>
					TO CHECKOUT
				</button>
				{noCheckoutInfo}
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
