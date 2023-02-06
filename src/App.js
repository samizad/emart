import './App.css';
import Navbar from './component/SiteNavbar';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

import Checkout from './component/Checkout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products"
          element={<Products />}
        ></Route>
        <Route
          path="/products/:id"
          element={<Product />}
        ></Route>
        <Route
          path="/checkout"
          element={<Checkout />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}
export default App;
