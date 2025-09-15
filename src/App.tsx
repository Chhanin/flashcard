import { useEffect } from "react";
import "./App.css";
import { getAllFlashcards } from "./data/flashcards";

function App() {
  useEffect(() => {
    const data = getAllFlashcards();
    console.log("Flashcards loaded:", data);
  }, []);

  const total = getAllFlashcards().length;

  return (
    <>
      <h1>Spanish Flashcards</h1>
      <p>Welcome! Choose a mode to get started.</p>
      <div className="card">
        <button className="btn btn--study">Study Mode</button>
        <button className="btn btn--quiz">Quiz Mode</button>
        <button className="btn btn--stats">Stats</button>
      </div>
      <p>Total cards available: {total}</p>
    </>
  );
}

export default App;
