import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import App from '../App';

const basketItems = [{ quantity: 1 }, { quantity: 1 }, { quantity: 1 }];
let changeCategory;
let resetFilters;

beforeEach(() => {
	changeCategory = jest.fn();
	resetFilters = jest.fn();
});

afterEach(() => {
	jest.clearAllMocks();
});

describe('Test Header', () => {
	test('renders title and navbar', () => {
		render(
			<BrowserRouter>
				<Header
					basketItems={basketItems}
					changeCategory={changeCategory}
					resetFilters={resetFilters}
				/>
			</BrowserRouter>
		);

		const title = screen.getByText('GUITAR-GEAR');
		const navbar = screen.getByRole('navigation');

		expect(title).toBeInTheDocument();
		expect(navbar).toBeInTheDocument();
	});

	test('clicking title calls resetFilters', async () => {
		const user = userEvent.setup();
		render(
			<BrowserRouter>
				<Header
					basketItems={basketItems}
					changeCategory={changeCategory}
					resetFilters={resetFilters}
				/>
			</BrowserRouter>
		);

		const title = screen.getByText('GUITAR-GEAR');
		await user.click(title);

		expect(resetFilters).toHaveBeenCalled();
	});

	test('navLinks call changeCategory with proper arguments', async () => {
		const user = userEvent.setup();
		render(
			<BrowserRouter>
				<Header
					basketItems={basketItems}
					changeCategory={changeCategory}
					resetFilters={resetFilters}
				/>
			</BrowserRouter>
		);

		const guitarsLink = screen.getByText('Guitars');
		const ampsLink = screen.getByText('Amplifiers');
		const effectsLink = screen.getByText('Effects');

		await user.click(guitarsLink);
		expect(changeCategory).toHaveBeenCalledWith('guitar');
		await user.click(ampsLink);
		expect(changeCategory).toHaveBeenCalledWith('amplifier');
		await user.click(effectsLink);
		expect(changeCategory).toHaveBeenCalledWith('effect');
	});

	test('basket item count shows correct number', () => {
		render(
			<BrowserRouter>
				<Header
					basketItems={basketItems}
					changeCategory={changeCategory}
					resetFilters={resetFilters}
				/>
			</BrowserRouter>
		);

		const basketCount = screen.getByTestId('basket-count');
		expect(Number(basketCount.textContent)).toEqual(3);
	});
});
