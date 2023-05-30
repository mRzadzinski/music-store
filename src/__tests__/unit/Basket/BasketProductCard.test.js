import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import BasketProductCard from '../../../components/Basket/BasketProductCard';

let updateProductQuantity;
let removeFromBasket;
let quantity;
const key = 1;
const product = { price: 1, name: 'Marshall 1959 HW', imgSmall: 'nothing' };

beforeEach(() => {
	updateProductQuantity = jest.fn();
	removeFromBasket = jest.fn();
	quantity = 3;
});

afterEach(() => {
	jest.clearAllMocks();
});

describe('Test BasketProductCard', () => {
	test('renders correct product data', () => {
		render(
			<BasketProductCard
				key={key}
				product={product}
				quantity={quantity}
				updateProductQuantity={updateProductQuantity}
				removeFromBasket={removeFromBasket}
			/>
		);

		const img = screen.getByRole('img');
		const name = screen.getByText('Marshall 1959 HW');
		const basePrice = screen.getByTestId('base-price');
		const totalPrice = screen.getByTestId('total-product-price');
		const trash = screen.getByTestId('trash-icon');

		expect(img).toBeInTheDocument();
		expect(name).toBeInTheDocument();
		expect(trash).toBeInTheDocument();
		expect(basePrice).toHaveTextContent(1);
		expect(totalPrice).toHaveTextContent(3);
	});

	test('clicking trash icon calls removeFromBasket with correct argument', async () => {
		const user = userEvent.setup();
		render(
			<BasketProductCard
				key={key}
				product={product}
				quantity={quantity}
				updateProductQuantity={updateProductQuantity}
				removeFromBasket={removeFromBasket}
			/>
		);

		const trash = screen.getByTestId('trash-icon');

		await user.click(trash);

		expect(removeFromBasket).toHaveBeenCalledWith(product);
	});

	test('selecting options in select element calls updateProductQuantity with correct arguments', async () => {
		const user = userEvent.setup();
		render(
			<BasketProductCard
				key={key}
				product={product}
				quantity={quantity}
				updateProductQuantity={updateProductQuantity}
				removeFromBasket={removeFromBasket}
			/>
		);

		const selectInput = screen.getByRole('combobox');

		await user.selectOptions(selectInput, '4');
		expect(updateProductQuantity).toHaveBeenCalledWith(product, 4);

		await user.selectOptions(selectInput, '10');
		expect(updateProductQuantity).toHaveBeenCalledWith(product, 10);

		await user.selectOptions(selectInput, '2');
		expect(updateProductQuantity).toHaveBeenCalledWith(product, 2);
	});

	test("doesn't render base price when quantity equals 1", async () => {
		const { rerender } = render(
			<BasketProductCard
				key={key}
				product={product}
				quantity={quantity}
				updateProductQuantity={updateProductQuantity}
				removeFromBasket={removeFromBasket}
			/>
		);

		let basePrice = screen.queryByTestId('base-price');
		expect(basePrice).toBeInTheDocument();

		quantity = 1;

		rerender(
			<BasketProductCard
				key={key}
				product={product}
				quantity={quantity}
				updateProductQuantity={updateProductQuantity}
				removeFromBasket={removeFromBasket}
			/>
		);

		expect(basePrice).not.toBeInTheDocument();
	});
});
