import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Test Footer', () => {
	test('render Footer', () => {
		render(<App />);

		expect(screen.getByText(/© 2023 Guitar/)).toBeInTheDocument();
	});
});
