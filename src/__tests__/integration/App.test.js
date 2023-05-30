import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Test Routes', () => {
	test('route links redirect correctly', async () => {
		const user = userEvent.setup();
		render(<App />, { wrapper: BrowserRouter });

		// Main -> Browser
		const main = screen.getByTestId('main-page');
		expect(main).toBeInTheDocument();

		const shopNowBtn = screen.getByText('SHOP NOW');
		await user.click(shopNowBtn);

		// Browser -> ProductPage
		let browser = screen.getByTestId('Browser');
		expect(browser).toBeInTheDocument();
		expect(main).not.toBeInTheDocument();

		const dunlop = screen.getByText('Dunlop Crybaby CB-535Q');
		await user.click(dunlop);
		expect(dunlop).not.toBeInTheDocument();

		// ProductPage -> Browser
		const arrow = screen.getByTestId('arrow-container');
		expect(arrow).toBeInTheDocument();
		await user.click(arrow);

		browser = screen.getByTestId('Browser');
		expect(browser).toBeInTheDocument();
		expect(arrow).not.toBeInTheDocument();

		// Browser -> Basket
		const linkToBasket = screen.getByTestId('linkToBasket');
		await user.click(linkToBasket);

		const basket = screen.getByTestId('Basket');
		expect(basket).toBeInTheDocument();
		expect(browser).not.toBeInTheDocument();
	});
});

describe('Test App functionality', () => {
	test('correctly renders initial displayProducts', () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter initialEntries={['/browser']}>
				<App />
			</MemoryRouter>
		);

		const browser = screen.getByTestId('Browser');
		expect(browser).toBeInTheDocument();

		const displayProducts = screen.getAllByTestId('ProductCard');
		expect(displayProducts[0].textContent).toContain('Dunlop');
		expect(displayProducts[displayProducts.length - 1].textContent).toContain(
			'Gibson'
		);
	});

	test('applying filters renders correct product list', async () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter initialEntries={['/browser']}>
				<App />
			</MemoryRouter>
		);

		const ampCategory = screen.getByTestId('amplifiers-category');
		const effectsCategory = screen.getByTestId('effects-category');
		const minPrice = screen.getByTestId('minPrice');
		const maxPrice = screen.getByTestId('maxPrice');
		const inStockCheckbox = screen.getByTestId('in-stock-checkbox');
		const priceSort = screen.getByRole('combobox');
		const resetFiltersBtn = screen.getByTestId('reset-filters-btn');

		await user.click(ampCategory);
		await user.type(minPrice, '788');
		await user.type(maxPrice, '3000');
		await user.click(inStockCheckbox);
		await user.selectOptions(priceSort, 'High to low');

		let displayProducts = screen.getAllByTestId('ProductCard');

		expect(displayProducts[0].textContent).toContain('Deluxe Reverb');
		expect(displayProducts[1].textContent).toContain('Marshall');
		displayProducts.forEach((product) => {
			expect(product.textContent).not.toContain('Friedman');
			expect(product.textContent).not.toContain('Orange');
			expect(product.textContent).not.toContain('JHS');
			expect(product.textContent).not.toContain('Strymon');
			expect(product.textContent).not.toContain('Strat');
			expect(product.textContent).not.toContain('Gibson');
			expect(product.textContent).not.toContain('Strandberg');
		});

		await user.click(resetFiltersBtn);

		displayProducts = screen.getAllByTestId('ProductCard');
		expect(displayProducts[0].textContent).toContain('Dunlop');
		expect(displayProducts[displayProducts.length - 1].textContent).toContain(
			'Gibson'
		);

		await user.click(effectsCategory);
		await user.type(minPrice, '250');
		await user.type(maxPrice, '380');

		displayProducts = screen.getAllByTestId('ProductCard');
		expect(displayProducts.length).toEqual(3);
		expect(displayProducts[0].textContent).toContain('Bonsai');
		expect(displayProducts[1].textContent).toContain('Bluesky');
		expect(displayProducts[2].textContent).toContain('Universal Audio');
	});

	test('items added from ProductPage can be found in the Basket', async () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter initialEntries={['/browser']}>
				<App />
			</MemoryRouter>
		);

		const linkToBasket = screen.getByTestId('linkToBasket');

		// Add 3 reverberators
		let product = screen.getByText(/Reverberator/);
		await user.click(product);

		let amountInput = screen.getByRole('combobox');
		let addBtn = screen.getByRole('button');
		let arrow = screen.getByTestId('arrow-container');

		await user.selectOptions(amountInput, '3');
		await user.click(addBtn);
		await user.click(arrow);

		// Add 2 blues juniors
		product = screen.getByText(/Blues Junior/);
		await user.click(product);

		amountInput = screen.getByRole('combobox');
		addBtn = screen.getByRole('button');
		arrow = screen.getByTestId('arrow-container');

		await user.selectOptions(amountInput, '2');
		await user.click(addBtn);
		await user.click(arrow);

		// Add 1 Marshal 1959 HW
		product = screen.getByText(/Marshall 1959/);
		await user.click(product);

		amountInput = screen.getByRole('combobox');
		addBtn = screen.getByRole('button');
		arrow = screen.getByTestId('arrow-container');

		await user.selectOptions(amountInput, '1');
		await user.click(addBtn);
		await user.click(linkToBasket);

		const totalAmount = screen.getByTestId('total-amount');
		const basketProducts = screen.getAllByTestId('BasketProductCard');

		expect(basketProducts.length).toEqual(3);
		expect(totalAmount.textContent).toContain('$4361');
	});
});
