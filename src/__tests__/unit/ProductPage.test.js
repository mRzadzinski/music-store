import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Router from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ProductPage from '../../components/ProductPage';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: jest.fn(),
}));

let displayProducts;
let basketItems;
let addToBasket;

beforeEach(() => {
	basketItems = [];
	addToBasket = jest.fn();
	displayProducts = [
		{ id: 0 },
		{
			id: 1,
			name: 'Fender Player Series Strat MN BCR',
			imgLarge: null,
			price: 689,
			availability: true,
			description:
				'The inspiring sound of a Stratocaster is one of the foundations of Fender.',
		},
	];
});

afterEach(() => {
	jest.clearAllMocks();
});

describe('Test ProductPage', () => {
	test('renders correct product data', () => {
		jest.spyOn(Router, 'useParams').mockReturnValue({ id: 1 });

		render(
			<BrowserRouter>
				<ProductPage
					displayProducts={displayProducts}
					addToBasket={addToBasket}
					basketItems={basketItems}
				/>
			</BrowserRouter>
		);

		const name = screen.getByText(/Strat MN BCR/);
		const img = screen.getByRole('img');
		const description = screen.getByText(/The inspiring sound/);
		const price = screen.getByText('$689');
		const availability = screen.getByText('In stock');

		expect(name).toBeInTheDocument();
		expect(img).toBeInTheDocument();
		expect(description).toBeInTheDocument();
		expect(price).toBeInTheDocument();
		expect(availability).toBeInTheDocument();
	});

	test('correctly renders "on request" info', () => {
		jest.spyOn(Router, 'useParams').mockReturnValue({ id: 1 });

		displayProducts[1].availability = false;

		render(
			<BrowserRouter>
				<ProductPage
					displayProducts={displayProducts}
					addToBasket={addToBasket}
					basketItems={basketItems}
				/>
			</BrowserRouter>
		);

		const availability = screen.getByText('On request');
		expect(availability).toBeInTheDocument();
	});

	test('correctly renders info about too many units added', async () => {
		jest.spyOn(Router, 'useParams').mockReturnValue({ id: 1 });
		basketItems = [
			{
				product: displayProducts[1],
				quantity: 5,
			},
		];

		const user = userEvent.setup();
		render(
			<BrowserRouter>
				<ProductPage
					displayProducts={displayProducts}
					addToBasket={addToBasket}
					basketItems={basketItems}
				/>
			</BrowserRouter>
		);

		const selectInput = screen.getByRole('combobox');
		const addButton = screen.getByRole('button');

		let tooManyInfo = screen.queryByText(/up to 10 units/);
		expect(tooManyInfo).not.toBeInTheDocument();

		await user.selectOptions(selectInput, '3');
		await user.click(addButton);

		tooManyInfo = screen.queryByText(/up to 10 units/);
		expect(tooManyInfo).not.toBeInTheDocument();

		await user.selectOptions(selectInput, '6');
		await user.click(addButton);

		tooManyInfo = screen.queryByText(/up to 10 units/);
		expect(tooManyInfo).toBeInTheDocument();
	});

	test('calls addToBasket with proper arguments', async () => {
		jest.spyOn(Router, 'useParams').mockReturnValue({ id: 1 });

		const user = userEvent.setup();
		render(
			<BrowserRouter>
				<ProductPage
					displayProducts={displayProducts}
					addToBasket={addToBasket}
					basketItems={basketItems}
				/>
			</BrowserRouter>
		);

		const selectInput = screen.getByRole('combobox');
		const addButton = screen.getByRole('button');

		await user.selectOptions(selectInput, '3');
		await user.click(addButton);

		expect(addToBasket).toHaveBeenCalledWith(displayProducts[1], 3);

        await user.selectOptions(selectInput, '8');
		await user.click(addButton);

		expect(addToBasket).toHaveBeenCalledWith(displayProducts[1], 8);
	});
});
