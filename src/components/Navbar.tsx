import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <b>SoulStone</b>
          <div className="glitter"></div>
        </Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/quiz">Find Your Stone</Link>
        <Link to="/checkout" className="checkout-link">Checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar; 