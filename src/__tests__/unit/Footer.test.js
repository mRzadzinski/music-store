import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../components/Footer';

describe('Test Footer', () => {
	test('render Footer', () => {
		render(<Footer />);

		expect(screen.getByText(/© 2023 Guitar/)).toBeInTheDocument();
	});
});
