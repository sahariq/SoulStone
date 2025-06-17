import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/Home.css';

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const testimonials: Testimonial[] = [
  {
    text: "My SoulStone has become my daily companion. The digital rituals help me stay centered and mindful.",
    author: "Sarah M.",
    role: "Yoga Instructor"
  },
  {
    text: "The emotional connection I feel with my stone is incredible. It's like having a piece of my journey with me always.",
    author: "Michael T.",
    role: "Artist"
  },
  {
    text: "The personalized carvings make my stone truly unique. It's a beautiful reminder of my intentions.",
    author: "Emma R.",
    role: "Writer"
  }
];

const features: Feature[] = [
  {
    title: "Emotional Meaning",
    description: "Each stone carries a unique emotional significance, chosen just for you.",
    icon: "💫"
  },
  {
    title: "Daily Digital Rituals",
    description: "Connect with your stone through guided daily practices and meditations.",
    icon: "✨"
  },
  {
    title: "Personalized Carvings",
    description: "Custom engravings that speak to your personal journey and intentions.",
    icon: "🌟"
  }
];

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Discover Your <span>SoulStone</span></h1>
          <p>Connect with your inner self through personalized digital companions</p>
          <div className="cta-buttons">
            <Link to="/quiz">
              <Button variant="primary">Find Your Stone</Button>
            </Link>
            <Link to="/shop">
              <Button variant="secondary">Explore Collection</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose <span>SoulStone</span></h2>
        <div className="container">
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Companion Section */}
      <section className="digital-companion">
        <div className="container">
          <div className="companion-content">
            <h2>Your Digital <span>Companion</span></h2>
            <p>Experience daily rituals and meditations designed to strengthen your connection with your stone</p>
            <Link to="/companion">
              <Button variant="primary">Start Your Journey</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Community <span>Says</span></h2>
        <div className="container">
          <div className="testimonial-carousel">
            <div className="testimonial-card">
              <p>{testimonials[currentTestimonial].text}</p>
              <div className="testimonial-author">
                <h4>{testimonials[currentTestimonial].author}</h4>
                <span>{testimonials[currentTestimonial].role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <h2>Join Our <span>Community</span></h2>
          <p>Be the first to know about new arrivals and exclusive offers</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 