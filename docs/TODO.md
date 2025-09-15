# ✅ Spanish Flashcards Web App — TODO Checklist

## Phase 1: Project Setup & Basics

- [ ] **Initialize Project with Vite + React + TypeScript**

  - _Acceptance Criteria:_ Running `npm run dev` launches a React app in the browser.

- [ ] **Add Static Flashcard Data**

  - _Acceptance Criteria:_ JSON/TypeScript object of cards exists and can be logged/displayed in console.

- [ ] **Create Home Page**
  - _Acceptance Criteria:_ Displays welcome message + navigation buttons: "Study Mode", "Quiz Mode", "Stats".

---

## Phase 2: Flashcard Study Mode

- [ ] **Render Flashcards**

  - _Acceptance Criteria:_ Spanish word shows on front of card; clicking flips to English.

- [ ] **Add Right/Wrong Buttons**

  - _Acceptance Criteria:_ After flipping, two buttons appear ("I got it right", "I got it wrong").

- [ ] **Track Wrong Cards in State**
  - _Acceptance Criteria:_ Wrong cards are stored in state and can be retrieved later.

---

## Phase 3: Categories

- [ ] **Category Selection Page**

  - _Acceptance Criteria:_ User can select Animals, Food, or Verbs before starting study/quiz.

- [ ] **Filter Cards by Category**
  - _Acceptance Criteria:_ Only cards from the chosen category are shown.

---

## Phase 4: Redo Mode

- [ ] **Redo Mode Component**

  - _Acceptance Criteria:_ User can study only the cards they previously got wrong.

- [ ] **Reset Wrong List**
  - _Acceptance Criteria:_ Clicking reset clears all tracked wrong cards.

---

## Phase 5: Quiz Mode

- [ ] **Multiple Choice Quiz**

  - _Acceptance Criteria:_ Displays Spanish word + 4 options; selecting correct option shows "Correct"; wrong option shows "Incorrect".

- [ ] **Fill-in-the-Blank Quiz**

  - _Acceptance Criteria:_ User types answer; app checks case-insensitive exact match; feedback shown.

- [ ] **Category Support in Quiz**
  - _Acceptance Criteria:_ User can choose quiz category before starting; only that category’s cards are included.

---

## Phase 6: Statistics

- [ ] **Track Session Stats**

  - _Acceptance Criteria:_ Number of studied cards, right vs wrong, and accuracy percentage are shown on Stats page.

- [ ] **Persist Stats with localStorage**
  - _Acceptance Criteria:_ Refreshing the page keeps stats intact; clearing storage resets them.

---

## Phase 7: Polish & Extras

- [ ] **Flashcard Flip Animation**

  - _Acceptance Criteria:_ Smooth flip effect when revealing translation.

- [ ] **Basic Styling with Tailwind or CSS Modules**

  - _Acceptance Criteria:_ Layout is clean, responsive, and visually distinct between pages.

- [ ] **Optional: Zustand / Context for State Management**
  - _Acceptance Criteria:_ State is centralized, making wrong answers, stats, and category selection accessible across components.
