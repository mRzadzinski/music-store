import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from '../../components/MainPage';

let resetFilters = jest.fn();

beforeEach(() => {
	resetFilters = jest.fn();
});

afterEach(() => {
	jest.clearAllMocks();
});

describe('Test MainPage', () => {
	test('render MainPage with proper class', () => {
		render(
			<div>
				<BrowserRouter>
					<MainPage resetFilters={resetFilters} />
				</BrowserRouter>
			</div>
		);

		const main = screen.getByTestId('main-page');

		expect(main).toBeInTheDocument();
		expect(main).toHaveClass('MainPage');
	});

	test('render main-left div with proper class', () => {
		render(
			<div>
				<BrowserRouter>
					<MainPage resetFilters={resetFilters} />
				</BrowserRouter>
			</div>
		);

		const mainLeft = screen.getByTestId('main-left');

		expect(mainLeft).toBeInTheDocument();
		expect(mainLeft).toHaveClass('main-left');
	});

	test('main-left has 3 children', () => {
		render(
			<div>
				<BrowserRouter>
					<MainPage resetFilters={resetFilters} />
				</BrowserRouter>
			</div>
		);

		const mainLeft = screen.getByTestId('main-left');

		expect(mainLeft.childNodes.length).toEqual(3);
	});

	test('button SHOP NOW calls resetFilters', async () => {
		const user = userEvent.setup();
		render(
			<div>
				<BrowserRouter>
					<MainPage resetFilters={resetFilters} />
				</BrowserRouter>
			</div>
		);

		const mainLeft = screen.getByTestId('main-left');
		const button = within(mainLeft).getByRole('button');

		await user.click(button);

		expect(resetFilters).toHaveBeenCalled();
	});
});
