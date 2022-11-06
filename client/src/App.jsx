import {Routes, Route} from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import MensProducts from './pages/MensProducts';
import WomensProducts from './pages/WomensProducts';
import SingleProductPage from './pages/SingleProductPage';
import Cart from './pages/CartPage';
import Checkout from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import NavBar from './components/NavBar';



function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/mens" element={<MensProducts />} />
        <Route path="/womens" element={<WomensProducts />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
