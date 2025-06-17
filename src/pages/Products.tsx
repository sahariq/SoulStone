import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/Products.css';

// Product data
const products = [
  {
    id: 1,
    name: "Whisperleaf",
    emotion: "Calm",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&auto=format&fit=crop&q=60",
    description: "A soft green stone that breathes serenity into your space. Perfect for grounding yourself during moments of overwhelm."
  },
  {
    id: 2,
    name: "Emberstone",
    emotion: "Courage",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&auto=format&fit=crop&q=60",
    description: "A warm amber piece pulsing with quiet strength. For new beginnings, brave steps, and standing tall."
  },
  {
    id: 3,
    name: "Moonroot",
    emotion: "Clarity",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&auto=format&fit=crop&q=60",
    description: "Smooth and silver-flecked, this stone is for those seeking clear paths and inner stillness. Your rituals start with intention."
  },
  {
    id: 4,
    name: "Roseveil",
    emotion: "Love",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&auto=format&fit=crop&q=60",
    description: "Gentle pinks swirl within Roseveil — a stone that invites softness, healing, and connection."
  },
  {
    id: 5,
    name: "Duskflint",
    emotion: "Reflection",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&auto=format&fit=crop&q=60",
    description: "Dark and textured, Duskflint holds stories within. Best paired with night rituals or deep journaling sessions.",
    isLimited: true
  }
];

// Filter options
const emotions = ["All", "Calm", "Courage", "Clarity", "Love", "Reflection"];
const colors = ["All", "Green", "Amber", "Silver", "Pink", "Dark"];
const rarities = ["All", "Common", "Limited"];

const Products: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedRarity, setSelectedRarity] = useState("All");

  const filteredProducts = products.filter(product => {
    return (selectedEmotion === "All" || product.emotion === selectedEmotion) &&
           (selectedColor === "All") &&
           (selectedRarity === "All" || (selectedRarity === "Limited" && product.isLimited));
  });

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <h1>Find the SoulStone That Speaks to You</h1>
          <p>Each SoulStone carries a unique energy — calm, courage, clarity, or love.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filters">
        <div className="container">
          <div className="filter-grid">
            <div className="filter-group">
              <label htmlFor="emotion">Emotion</label>
              <select 
                id="emotion" 
                value={selectedEmotion}
                onChange={(e) => setSelectedEmotion(e.target.value)}
              >
                {emotions.map(emotion => (
                  <option key={emotion} value={emotion}>{emotion}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="color">Color</label>
              <select 
                id="color" 
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                {colors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="rarity">Rarity</label>
              <select 
                id="rarity" 
                value={selectedRarity}
                onChange={(e) => setSelectedRarity(e.target.value)}
              >
                {rarities.map(rarity => (
                  <option key={rarity} value={rarity}>{rarity}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid">
        <div className="container">
          <div className="grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {product.isLimited && <span className="limited-badge">Limited</span>}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <span className="emotion-badge">{product.emotion}</span>
                  <p>{product.description}</p>
                  <div className="product-footer">
                    <span className="price">${product.price.toFixed(2)}</span>
                    <Button variant="primary">View Ritual</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products; 