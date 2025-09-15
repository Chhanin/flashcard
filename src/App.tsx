import { useEffect, useState } from "react";
import "./App.css";
import { getAllFlashcards } from "./data/flashcards";

function App() {
  useEffect(() => {
    const data = getAllFlashcards();
    console.log("Flashcards loaded:", data);
  }, []);

  const cards = getAllFlashcards();
  const [showStudy, setShowStudy] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const current = cards[currentIndex];

  function handleFlip() {
    setIsFlipped((prev) => !prev);
  }

  function goToNextCard() {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setIsFlipped(false);
  }

  return (
    <>
      <h1>Spanish Flashcards</h1>
      <p>Welcome! Choose a mode to get started.</p>
      <div className="card">
        <button className="btn btn--study" onClick={() => setShowStudy(true)}>
          Study Mode
        </button>
        <button className="btn btn--quiz">Quiz Mode</button>
        <button className="btn btn--stats">Stats</button>
      </div>
      <p>Total cards available: {cards.length}</p>

      {showStudy && current && (
        <div style={{ marginTop: "1.5rem" }}>
          <h2>Study Mode</h2>
          <p>Click the card to flip between Spanish and English.</p>
          <div
            onClick={handleFlip}
            style={{
              margin: "1rem auto",
              maxWidth: 480,
              padding: "2rem",
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#111827",
              color: "#fff",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            {!isFlipped ? (
              <>
                <div style={{ opacity: 0.7, fontSize: 14 }}>Spanish</div>
                <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>
                  {current.spanish}
                </div>
              </>
            ) : (
              <>
                <div style={{ opacity: 0.7, fontSize: 14 }}>English</div>
                <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>
                  {current.english}
                </div>
              </>
            )}
          </div>

          {isFlipped && (
            <div style={{ marginTop: "0.5rem" }}>
              <button className="btn btn--study" onClick={goToNextCard}>
                I got it right
              </button>
              <button className="btn btn--stats" onClick={goToNextCard}>
                I got it wrong
              </button>
            </div>
          )}

          <div style={{ marginTop: "0.75rem", opacity: 0.8 }}>
            Card {currentIndex + 1} of {cards.length}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
