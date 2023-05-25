import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Basket from '../components/Basket';

let basketItems;
let updateProductQuantity;
let removeFromBasket;
beforeEach(() => {
	updateProductQuantity = jest.fn();
	removeFromBasket = jest.fn();
	basketItems = [
		{
			product: {
				id: 1,
				price: 1,
				name: null,
				imgSmall: null,
			},
			quantity: 3,
		},
		{
			product: {
				id: 2,
				price: 1,
				name: null,
				imgSmall: null,
			},
			quantity: 1,
		},
		{
			product: {
				id: 3,
				price: 1,
				name: null,
				imgSmall: null,
			},
			quantity: 5,
		},
	];
});

afterEach(() => {
	jest.clearAllMocks();
});

describe('Test Basket', () => {
	test('renders correct info when basket is empty', () => {
		basketItems = [];

		render(
			<Basket
				basketItems={basketItems}
				updateProductQuantity={updateProductQuantity}
				removeFromBasket={removeFromBasket}
			/>
		);

		const emptyInfo = screen.getByText(/is empty/);
		expect(emptyInfo).toBeInTheDocument();
	});

	test('renders correct amount of products', () => {
		render(
			<Basket
				basketItems={basketItems}
				updateProductQuantity={updateProductQuantity}
				removeFromBasket={removeFromBasket}
			/>
		);

		const products = screen.getAllByTestId('BasketProductCard');
		expect(products.length).toEqual(3);
	});

	test('renders correct total price', () => {
		render(
			<Basket
				basketItems={basketItems}
				updateProductQuantity={updateProductQuantity}
				removeFromBasket={removeFromBasket}
			/>
		);

		const total = screen.getByTestId('total-amount');
		expect(total).toHaveTextContent(9);
	});

	test('renders noCheckoutInfo on checkout button click', async () => {
		const user = userEvent.setup();
		render(
			<Basket
				basketItems={basketItems}
				updateProductQuantity={updateProductQuantity}
				removeFromBasket={removeFromBasket}
			/>
		);

		const checkoutBtn = screen.getByText('TO CHECKOUT');
		let noCheckoutInfo = screen.queryByText('There is no checkout :)');
		expect(noCheckoutInfo).toBe(null);

		await user.click(checkoutBtn);
		noCheckoutInfo = screen.getByText('There is no checkout :)');
		expect(noCheckoutInfo).toBeInTheDocument();
	});
});
