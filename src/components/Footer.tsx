import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/quiz">Find Your Stone</Link>
            <Link to="/checkout">Checkout</Link>
          </div>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; 2023 SoulStone. All rights reserved.</p>
          <p className="tagline">Connecting you to your inner peace, one stone at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 