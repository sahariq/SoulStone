import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quiz.css';

interface Question {
  id: number;
  text: string;
  options: string[];
  type: 'emotion' | 'healing' | 'color' | 'location' | 'affirmation';
}

interface Stone {
  id: number;
  name: string;
  emotion: string;
  price: number;
  image: string;
  description: string;
  isLimited?: boolean;
}

const questions: Question[] = [
  {
    id: 1,
    text: "What emotion is strongest in your life right now?",
    options: ["Peace", "Joy", "Hope", "Courage", "Love"],
    type: "emotion"
  },
  {
    id: 2,
    text: "Which kind of healing do you seek?",
    options: ["Peace", "Clarity", "Closure", "Joy", "Strength"],
    type: "healing"
  },
  {
    id: 3,
    text: "Pick a color that calls to you",
    options: ["Lavender", "Rose", "Sage", "Mist", "Moonlight"],
    type: "color"
  },
  {
    id: 4,
    text: "Where would you keep your SoulStone?",
    options: ["Desk", "Pocket", "Altar", "Gift Box", "Window Sill"],
    type: "location"
  },
  {
    id: 5,
    text: "What affirmation feels right today?",
    options: [
      "I am worthy of peace",
      "My heart knows the way",
      "I trust my journey",
      "I am surrounded by love",
      "I am becoming"
    ],
    type: "affirmation"
  }
];

const stones: Stone[] = [
  {
    id: 1,
    name: "Whisperleaf",
    emotion: "Peace",
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

const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedStone, setSelectedStone] = useState<Stone | null>(null);
  const navigate = useNavigate();

  const selectStone = (answers: string[]) => {
    // Map emotions to stones
    const emotionMap: { [key: string]: string } = {
      "Peace": "Whisperleaf",
      "Joy": "Duskflint",
      "Hope": "Moonroot",
      "Courage": "Emberstone",
      "Love": "Roseveil"
    };

    // Get the emotion from the first question
    const primaryEmotion = answers[0];
    const stoneName = emotionMap[primaryEmotion] || "Whisperleaf";
    
    // Find the matching stone
    const stone = stones.find(s => s.name === stoneName);
    return stone || stones[0];
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const stone = selectStone(newAnswers);
      setSelectedStone(stone);
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRetake = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
    setSelectedStone(null);
  };

  const handleOrder = () => {
    if (selectedStone) {
      // Store the selected stone in localStorage for the checkout page
      localStorage.setItem('selectedStone', JSON.stringify(selectedStone));
      navigate('/checkout');
    }
  };

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        {!showResult ? (
          <>
            <div className="quiz-header">
              <h1>✨ Find Your SoulStone ✨</h1>
              <p>A gentle journey into your spirit — discover the stone that speaks to your soul.</p>
            </div>

            <div className="quiz-progress">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`progress-dot ${index <= currentStep ? 'active' : ''}`}
                />
              ))}
            </div>

            <div className="quiz-content">
              <div className="question-container">
                <h2>{questions[currentStep].text}</h2>
                <div className="options-grid">
                  {questions[currentStep].options.map((option, index) => (
                    <button
                      key={index}
                      className="option-button"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="quiz-navigation">
              {currentStep > 0 && (
                <button className="nav-button back" onClick={handleBack}>
                  Back
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="result-container">
            {selectedStone && (
              <>
                <div className="stone-preview">
                  <img src={selectedStone.image} alt={selectedStone.name} />
                  <div className="stone-glow"></div>
                </div>
                <h2>Your SoulStone: {selectedStone.name}</h2>
                <p>{selectedStone.description}</p>
                <div className="result-actions">
                  <button 
                    className="primary-button"
                    onClick={handleOrder}
                  >
                    Order My SoulStone
                  </button>
                  <button 
                    className="secondary-button"
                    onClick={handleRetake}
                  >
                    Retake Quiz
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      <div className="floating-quote">
        "The stone you choose has already chosen you."
      </div>
    </div>
  );
};

export default Quiz; 