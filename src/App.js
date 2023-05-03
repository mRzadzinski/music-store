import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Browser from './components/Browser';
import ProductPage from './components/ProductPage';
import Basket from './components/Basket';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<div className='content'>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/browser' element={<Browser />} />
						<Route path='/product-page' element={<ProductPage />} />
						<Route path='/basket' element={<Basket />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
