import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css';

interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  giftMessage: string;
  carvingText: string;
  isGift: boolean;
  addCarving: boolean;
  paymentMethod: string;
}

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    giftMessage: '',
    carvingText: '',
    isGift: false,
    addCarving: false,
    paymentMethod: 'credit'
  });

  const [activeStep, setActiveStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedStone, setSelectedStone] = useState<any>(null);

  useEffect(() => {
    // Get the selected stone from localStorage
    const storedStone = localStorage.getItem('selectedStone');
    if (storedStone) {
      setSelectedStone(JSON.parse(storedStone));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const nextStep = () => {
    setActiveStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setActiveStep(prev => Math.max(prev - 1, 1));
  };

  const renderStepIndicator = () => (
    <div className="step-indicator">
      <div className={`step ${activeStep >= 1 ? 'active' : ''}`}>
        <span className="step-number">1</span>
        <span className="step-label">Shipping</span>
      </div>
      <div className={`step ${activeStep >= 2 ? 'active' : ''}`}>
        <span className="step-number">2</span>
        <span className="step-label">Personalization</span>
      </div>
      <div className={`step ${activeStep >= 3 ? 'active' : ''}`}>
        <span className="step-number">3</span>
        <span className="step-label">Payment</span>
      </div>
    </div>
  );

  const renderShippingForm = () => (
    <div className="form-section">
      <h2>Shipping Information</h2>
      <div className="form-grid">
        <div className="form-group full-width">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="address">Street Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-actions">
        <button type="button" className="next-button" onClick={nextStep}>
          Continue to Personalization
        </button>
      </div>
    </div>
  );

  const renderPersonalizationForm = () => (
    <div className="form-section">
      <h2>Personalization Options</h2>
      <div className="checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="isGift"
            checked={formData.isGift}
            onChange={handleCheckboxChange}
          />
          This is a gift
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="addCarving"
            checked={formData.addCarving}
            onChange={handleCheckboxChange}
          />
          Add personalized carving (+Rs. 500)
        </label>
      </div>

      {formData.isGift && (
        <div className="form-group">
          <label htmlFor="giftMessage">Gift Message</label>
          <textarea
            id="giftMessage"
            name="giftMessage"
            value={formData.giftMessage}
            onChange={handleInputChange}
            placeholder="Write a heartfelt message..."
            maxLength={200}
          />
          <span className="character-count">{formData.giftMessage.length}/200</span>
        </div>
      )}

      {formData.addCarving && (
        <div className="form-group">
          <label htmlFor="carvingText">Carving Text</label>
          <input
            type="text"
            id="carvingText"
            name="carvingText"
            value={formData.carvingText}
            onChange={handleInputChange}
            placeholder="Enter text to be carved..."
            maxLength={20}
          />
          <span className="character-count">{formData.carvingText.length}/20</span>
        </div>
      )}

      <div className="form-actions">
        <button type="button" className="back-button" onClick={prevStep}>
          Back to Shipping
        </button>
        <button type="button" className="next-button" onClick={nextStep}>
          Continue to Payment
        </button>
      </div>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="form-section">
      <h2>Payment Method</h2>
      <div className="payment-options">
        <button type="button" className="payment-button">
          <img src="/jazzcash-logo.png" alt="JazzCash" />
          Pay with JazzCash
        </button>
        <button type="button" className="payment-button">
          <img src="/sadapay-logo.png" alt="SadaPay" />
          Pay with SadaPay
        </button>
      </div>
      <div className="form-actions">
        <button type="button" className="back-button" onClick={prevStep}>
          Back to Personalization
        </button>
        <button type="submit" className="submit-button">
          Place My Order
        </button>
      </div>
    </div>
  );

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <header className="checkout-header">
          <Link to="/" className="logo">SoulStone</Link>
          <h1>Complete Your Order</h1>
          <p className="quote">"Your journey begins with intention."</p>
        </header>

        {renderStepIndicator()}

        <div className="checkout-content">
          <div className="checkout-main">
            <form onSubmit={handleSubmit} className="checkout-form">
              {activeStep === 1 && renderShippingForm()}
              {activeStep === 2 && renderPersonalizationForm()}
              {activeStep === 3 && renderPaymentForm()}
            </form>
          </div>

          <div className="checkout-sidebar">
            <div className="order-summary">
              <h2>Order Summary</h2>
              {selectedStone && (
                <div className="product-card">
                  <img src={selectedStone.image} alt={selectedStone.name} className="product-image" />
                  <div className="product-details">
                    <h3>{selectedStone.name}</h3>
                    <p className="emotion-type">Emotion: {selectedStone.emotion}</p>
                    <p className="price">Rs. {selectedStone.price.toFixed(2)}</p>
                  </div>
                </div>
              )}
              <div className="summary-totals">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>Rs. {selectedStone?.price.toFixed(2) || '0.00'}</span>
                </div>
                {formData.addCarving && (
                  <div className="summary-row">
                    <span>Personalized Carving</span>
                    <span>Rs. 500</span>
                  </div>
                )}
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>Rs. {formData.addCarving ? 
                    ((selectedStone?.price || 0) + 500).toFixed(2) : 
                    (selectedStone?.price || 0).toFixed(2)}</span>
                </div>
              </div>
              <div className="secure-checkout">
                <i className="fas fa-lock"></i>
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="confirmation-content">
            <div className="confirmation-icon">✓</div>
            <h2>Order Confirmed!</h2>
            <p>Thank you for your purchase. Your SoulStone will be prepared with care.</p>
            <p className="order-number">Order #12345</p>
            <div className="confirmation-actions">
              <button onClick={() => setShowConfirmation(false)}>Close</button>
              <Link to="/shop" className="continue-shopping">Continue Shopping</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout; 