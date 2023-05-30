import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '../../../components/Browser/ProductCard';
import { BrowserRouter } from 'react-router-dom';

const product = {
	name: 'Fender Player Series Strat MN BCR',
	price: 689,
	availability: true,
	imgSmall: 'nothing',
};

describe('Test ProductCard', () => {
	test('renders all elements using product data', () => {});
	render(
		<BrowserRouter>
			<ProductCard product={product} />
		</BrowserRouter>
	);

	const img = screen.getByRole('img');
	const name = screen.getByText('Fender Player Series Strat MN BCR');
	const availability = screen.getByText('In stock');
	const price = screen.getByText('$689');

	expect(img).toBeInTheDocument();
	expect(img).toHaveAttribute('src', 'nothing');

	expect(name).toBeInTheDocument();
	expect(availability).toBeInTheDocument();
	expect(price).toBeInTheDocument();
});
