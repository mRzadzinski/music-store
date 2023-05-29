import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';

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
	test();
});
