import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Product from './product';
import Login from './Login';
import Signup from './Signup';
import { UserProvider } from './UserContext';
import Profile from './Profile';
import App from './App';  // Import the App component
import Cart from './cart';
import ProductDetails from './ProductDetails';
import './Login.css';
import './Signup.css';
import './product.css';
import './Profile.css';
import './Cart.css';
import'./ProductDetails.css';
const Root = () => {
  
  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={ <Cart />}/>
        <Route path="/product/:productId" element={<ProductDetails />} />
      
      </Routes>
      </UserProvider>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />  {/* Render the Root component that includes all routes */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
   