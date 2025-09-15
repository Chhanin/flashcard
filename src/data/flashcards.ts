export type Flashcard = {
  id: string;
  spanish: string;
  english: string;
  category: "Animals" | "Food" | "Verbs";
};

export const flashcards: Flashcard[] = [
  { id: "a1", spanish: "gato", english: "cat", category: "Animals" },
  { id: "a2", spanish: "perro", english: "dog", category: "Animals" },
  { id: "f1", spanish: "manzana", english: "apple", category: "Food" },
  { id: "f2", spanish: "pan", english: "bread", category: "Food" },
  { id: "v1", spanish: "comer", english: "to eat", category: "Verbs" },
  { id: "v2", spanish: "beber", english: "to drink", category: "Verbs" },
];

export function getAllFlashcards(): Flashcard[] {
  return flashcards;
}
