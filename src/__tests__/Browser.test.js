import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Browser from '../components/Browser';

describe('Test Browser', () => {
	test('renders browser', () => {
		const mockFn = jest.fn();
		const mockProp = null;
		const priceRange = [null, null];
		const displayProducts = [];

		render(
			<Browser
				resetFilters={mockFn}
				changeCategory={mockFn}
				changePriceRange={mockFn}
				changeAvailability={mockFn}
				category={mockProp}
				sortByPrice={mockFn}
				changeSortMethod={mockFn}
				sortMethod={mockProp}
				availability={mockProp}
				priceRange={priceRange}
				displayProducts={displayProducts}
			/>
		);

		const browser = screen.getByTestId('Browser');

		expect(browser).toBeInTheDocument();
	});
});