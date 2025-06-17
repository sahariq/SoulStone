import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
