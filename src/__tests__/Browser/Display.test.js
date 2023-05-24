import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Display from '../../components/Browser/Display';

const displayProducts = [
	{
		id: 1,
		price: 689,
		category: null,
		name: null,
		availability: true,
		imgSmall: null,
		imgLarge: null,
		description: null,
	},
	{
		id: 2,
		price: 1234,
		category: null,
		name: null,
		availability: true,
		imgSmall: null,
		imgLarge: null,
		description: null,
	},
	{
		id: 3,
		price: 222,
		category: null,
		name: null,
		availability: true,
		imgSmall: null,
		imgLarge: null,
		description: null,
	},
];
let sortMethod = 'Low to High';

let changeSortMethod;
beforeEach(async () => {
	changeSortMethod = jest.fn();
});

afterEach(() => {
	jest.clearAllMocks();
});

describe('Test Display', () => {
	test('renders display', () => {
		render(
			<BrowserRouter>
				<Display
					displayProducts={displayProducts}
					changeSortMethod={changeSortMethod}
					sortMethod={sortMethod}
				/>
			</BrowserRouter>
		);

		const display = screen.getByTestId('Display');
		expect(display).toBeInTheDocument();
	});

	test('select element changes sort method properly', async () => {
		const user = userEvent.setup();
		render(
			<BrowserRouter>
				<Display
					displayProducts={displayProducts}
					changeSortMethod={changeSortMethod}
					sortMethod={sortMethod}
				/>
			</BrowserRouter>
		);

		const select = screen.getByRole('combobox');

		await user.selectOptions(select, 'High to low');
		expect(changeSortMethod).toHaveBeenCalledWith('High to low');

		await user.selectOptions(select, 'Low to High');
		expect(changeSortMethod).toHaveBeenLastCalledWith('Low to High');
	});

	test('renders proper number of products', () => {
		render(
			<BrowserRouter>
				<Display
					displayProducts={displayProducts}
					changeSortMethod={changeSortMethod}
					sortMethod={sortMethod}
				/>
			</BrowserRouter>
		);

		const products = screen.getAllByTestId('ProductCard');
		expect(products.length).toEqual(3);
	});
});
