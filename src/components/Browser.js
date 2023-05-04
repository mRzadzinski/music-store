import React from 'react';
import '../styles/Browser.scss';
import Filters from './Browser/Filters';
import Display from './Browser/Display';

const Browser = () => {
	return (
		<div className='Browser'>
			<Filters />
			<Display />
		</div>
	);
};

export default Browser;
