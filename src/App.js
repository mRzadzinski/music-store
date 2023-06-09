import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Browser from './components/Browser';
import ProductPage from './components/ProductPage';
import Basket from './components/Basket';
import { useEffect, useState } from 'react';
import products from './products-data';

function App() {
	const [initialRender, setInitialRender] = useState(true);

	const [sortMethod, setSortMethod] = useState('Low to High');
	const [category, setCategory] = useState(null);
	const [priceRange, setPriceRange] = useState([null, null]);
	const [availability, setAvailability] = useState(null);

	const [displayProducts, setDisplayProducts] = useState(products);
	const [basketItems, setBasketItems] = useState([]);

	// Initial and consecutive sorts
	useEffect(() => {
		const productsArray = sortByPrice();
		updateDisplayProducts(productsArray);
	}, [sortMethod]);

	// Apply filters
	useEffect(() => {
		if (initialRender) {
			setInitialRender(false);
		} else {
			let tempArray = [...products];

			if (category !== null && category !== 'all') {
				tempArray = tempArray.filter(
					(product) => product.category === category
				);
			}

			if (priceRange[0] !== null && priceRange[1] !== null) {
				tempArray = tempArray.filter(
					(product) =>
						product.price >= priceRange[0] && product.price <= priceRange[1]
				);
			} else if (priceRange[0] !== null) {
				tempArray = tempArray.filter(
					(product) => product.price >= priceRange[0]
				);
			} else if (priceRange[1] !== null) {
				tempArray = tempArray.filter(
					(product) => product.price <= priceRange[1]
				);
			}

			if (availability === true) {
				tempArray = tempArray.filter(
					(product) => product.availability === true
				);
			}
			tempArray = sortByPrice(tempArray);
			updateDisplayProducts(tempArray);
		}
	}, [category, priceRange, availability]);

	function resetFilters() {
		setCategory(null);
		setPriceRange([null, null]);
		setAvailability(null);
		setSortMethod('Low to High');
	}

	function changeCategory(categoryName) {
		setCategory(categoryName);
	}

	function changePriceRange(min, max) {
		if (min === '') {
			setPriceRange([null, priceRange[1]]);
		} else if (max === '') {
			setPriceRange([priceRange[0], null]);
		} else if (min === null) {
			setPriceRange([priceRange[0], max]);
		} else if (max === null) {
			setPriceRange([min, priceRange[1]]);
		}
	}

	function changeAvailability(availability) {
		setAvailability(availability);
	}

	function changeSortMethod(sortMethod) {
		setSortMethod(sortMethod);
	}

	function updateDisplayProducts(productsArray) {
		setDisplayProducts(productsArray);
	}

	function sortByPrice(productsArray) {
		let tempArray;
		if (productsArray) {
			tempArray = [...productsArray];
		} else {
			tempArray = [...displayProducts];
		}

		tempArray.sort((prev, next) => prev.price - next.price);

		if (sortMethod === 'High to low') {
			tempArray.reverse();
		}
		return tempArray;
	}

	function addToBasket(product, quantity) {
		const tempBasket = [...basketItems];

		// Check if item is already in the basket
		let alreadyInBasket = false;
		tempBasket.forEach((item) => {
			if (item.product === product) {
				alreadyInBasket = true;
				// Limit quantity to 10 units per product
				if (item.quantity + quantity > 10) {
					item.quantity = 10;
				} else {
					item.quantity = item.quantity + quantity;
				}
			}
		});

		// Add new item
		if (!alreadyInBasket) {
			tempBasket.push({
				product: product,
				quantity: quantity,
			});
		}
		setBasketItems(tempBasket);
	}

	function updateProductQuantity(product, quantity) {
		const tempBasket = [...basketItems];

		tempBasket.forEach((item) => {
			if (item.product === product) {
				item.quantity = quantity;
			}
		});
		setBasketItems(tempBasket);
	}

	function removeFromBasket(product) {
		const tempBasket = [...basketItems];

		tempBasket.forEach((item) => {
			if (item.product === product) {
				const index = tempBasket.indexOf(item);
				tempBasket.splice(index, 1);
			}
		});
		setBasketItems(tempBasket);
	}

	return (
		<div className='App'>
			<Header
				changeCategory={changeCategory}
				resetFilters={resetFilters}
				basketItems={basketItems}
			/>
			<div className='content'>
				<Routes>
					<Route path='/' element={<MainPage resetFilters={resetFilters} />} />
					<Route
						path='/browser'
						element={
							<Browser
								displayProducts={displayProducts}
								resetFilters={resetFilters}
								changeCategory={changeCategory}
								changePriceRange={changePriceRange}
								changeAvailability={changeAvailability}
								changeSortMethod={changeSortMethod}
								sortByPrice={sortByPrice}
								category={category}
								priceRange={priceRange}
								availability={availability}
								sortMethod={sortMethod}
							/>
						}
					/>
					<Route
						path='/product-page/:id'
						element={
							<ProductPage
								displayProducts={displayProducts}
								basketItems={basketItems}
								addToBasket={addToBasket}
							/>
						}
					/>
					<Route
						path='/basket'
						element={
							<Basket
								basketItems={basketItems}
								updateProductQuantity={updateProductQuantity}
								removeFromBasket={removeFromBasket}
							/>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;