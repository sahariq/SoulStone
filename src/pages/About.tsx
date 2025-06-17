import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="hero">
        <div className="container">
          <h1>Our <span>Story</span></h1>
          <p>Where ancient wisdom meets modern meaning</p>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <h2>Our <span>Journey</span></h2>
          <p>SoulStone was born from a simple yet profound realization: in our fast-paced digital world, we yearn for tangible connections to meaning and purpose. Each stone in our collection is more than a beautiful object—it's a vessel for intention, a companion for reflection, and a bridge between the physical and digital realms.</p>
          <p>We believe that everyday objects can become extraordinary when imbued with intention and story. Each SoulStone comes alive through its unique name, origin story, and digital companion experience, creating a space for personal growth and emotional connection.</p>
          <Button variant="primary" as={Link} to="/shop">Discover Your Stone</Button>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our <span>Philosophy</span></h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Meaningful Connection</h3>
              <p>Each stone is carefully selected and paired with rituals, affirmations, and intention-setting prompts that help you connect with your inner self and express your emotions authentically.</p>
            </div>
            <div className="value-card">
              <h3>Digital Harmony</h3>
              <p>We bridge the physical and digital worlds, creating experiences that enhance your connection to your stone through guided rituals and mindful practices.</p>
            </div>
            <div className="value-card">
              <h3>Gift of Presence</h3>
              <p>Our stones are more than gifts—they're invitations to pause, reflect, and create meaningful moments in an increasingly busy world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="invitation">
        <div className="container">
          <h2>Join Our <span>Community</span></h2>
          <p>Whether you're seeking a personal companion for your journey, a meaningful gift for someone special, or simply a moment of connection in your day, SoulStone invites you to explore the intersection of physical beauty and digital wisdom.</p>
          <p>Each stone you choose becomes part of your story, carrying your intentions and growing with you through life's moments—both big and small.</p>
        </div>
      </section>
    </div>
  );
};

export default About; 