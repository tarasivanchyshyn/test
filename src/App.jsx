import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import ProductList from './pages/ProductList/ProductList';
import ProductView from './pages/ProductView/ProductView';
import { productURL } from './constants';
import { sortProducts } from './helpers/sorting';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch('http://localhost:4000/products')
      .then((response) => response.json())
      .then((data) => {
        const sortedProducts = data.sort(sortProducts);
        setProducts(sortedProducts);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Routes>
      <Route
        index
        element={<ProductList items={products} fetchProducts={fetchProducts} />}
      />
      <Route path={productURL} element={<ProductView products={products} />} />
    </Routes>
  );
}

export default App;
