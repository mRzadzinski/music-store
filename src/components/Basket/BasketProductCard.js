import React from 'react';
import '../../styles/Basket/BasketProductCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const BasketProductCard = (props) => {
	const { product } = props;

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
				</div>
			</div>
			<div className='card-right'>
				<div className='card-right-empty'></div>
				<div className='remove-item'>
					<FontAwesomeIcon
						icon={faTrash}
						size='lg'
						style={{ color: '#ababab' }}
					/>
				</div>
				<div className='prod-price-basket'>${product.price}</div>
			</div>
		</div>
	);
};

export default BasketProductCard;
