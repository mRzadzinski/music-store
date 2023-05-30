import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Filters from '../../../components/Browser/Filters';

let resetFilters;
let changeCategory;
let changePriceRange;
let changeAvailability;
beforeEach(async () => {
	resetFilters = jest.fn();
	changeCategory = jest.fn();
	changePriceRange = jest.fn();
	changeAvailability = jest.fn();
});

afterEach(() => {
	jest.clearAllMocks();
});

describe('Test Filters', () => {
	test('reset button calls resetFilters', async () => {
		const user = userEvent.setup();

		const category = 'all';
		const priceRange = [null, null];
		const availability = null;
		render(
			<Filters
				resetFilters={resetFilters}
				changeCategory={changeCategory}
				changePriceRange={changePriceRange}
				changeAvailability={changeAvailability}
				category={category}
				priceRange={priceRange}
				availability={availability}
			/>
		);

		const button = screen.getByRole('button');
		await user.click(button);

		expect(resetFilters).toHaveBeenCalled();
	});

	test('correct category is highlighted', async () => {
		const user = userEvent.setup();

		const category = 'all';
		const priceRange = [null, null];
		const availability = null;
		render(
			<Filters
				resetFilters={resetFilters}
				changeCategory={changeCategory}
				changePriceRange={changePriceRange}
				changeAvailability={changeAvailability}
				category={category}
				priceRange={priceRange}
				availability={availability}
			/>
		);

		const all = screen.getByText('All');
		const guitars = screen.getByText('Guitars');
		const amplifiers = screen.getByText('Amplifiers');
		const effects = screen.getByText('Effects');

		expect(all).toHaveClass('fat-text');
		expect(amplifiers).not.toHaveClass('fat-text');

		await user.click(effects);
		expect(effects).toHaveClass('fat-text');
		expect(all).not.toHaveClass('fat-text');

		await user.click(guitars);
		expect(guitars).toHaveClass('fat-text');
		expect(effects).not.toHaveClass('fat-text');
	});

	test('category titles call changeCategory with correct arguments', async () => {
		const user = userEvent.setup();

		const category = 'all';
		const priceRange = [null, null];
		const availability = null;
		render(
			<Filters
				resetFilters={resetFilters}
				changeCategory={changeCategory}
				changePriceRange={changePriceRange}
				changeAvailability={changeAvailability}
				category={category}
				priceRange={priceRange}
				availability={availability}
			/>
		);

		const all = screen.getByText('All');
		const amplifiers = screen.getByText('Amplifiers');

		await user.click(amplifiers);
		expect(changeCategory).toHaveBeenCalledWith('amplifier');

		await user.click(all);
		expect(changeCategory).toHaveBeenLastCalledWith('all');
	});

	test('price range inputs call changePriceRange with correct arguments', async () => {
		const user = userEvent.setup();

		const category = 'all';
		const priceRange = [null, null];
		const availability = null;
		render(
			<Filters
				resetFilters={resetFilters}
				changeCategory={changeCategory}
				changePriceRange={changePriceRange}
				changeAvailability={changeAvailability}
				category={category}
				priceRange={priceRange}
				availability={availability}
			/>
		);

		const minInput = screen.getByTestId('minPrice');
		const maxInput = screen.getByTestId('maxPrice');

		await user.type(minInput, '123');
		expect(changePriceRange).toHaveBeenLastCalledWith('123', null);

		await user.type(maxInput, '321');
		expect(changePriceRange).toHaveBeenLastCalledWith(null, '321');
	});

	test('availavility checkbox calls changeAvailability with correct arguments', async () => {
		const user = userEvent.setup();

		const category = 'all';
		const priceRange = [null, null];
		const availability = null;
		render(
			<Filters
				resetFilters={resetFilters}
				changeCategory={changeCategory}
				changePriceRange={changePriceRange}
				changeAvailability={changeAvailability}
				category={category}
				priceRange={priceRange}
				availability={availability}
			/>
		);

		const checkbox = screen.getByRole('checkbox');

		await user.click(checkbox);
		expect(changeAvailability).toHaveBeenCalledWith(true);

		await user.click(checkbox);
		expect(changeAvailability).toHaveBeenCalledWith(false);
	});
});
