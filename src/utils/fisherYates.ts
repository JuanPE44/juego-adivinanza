import { CardType } from "../types";

export function shuffleArray(array: CardType[]) {
  const newArray = [...array]; // Para no modificar el original
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Intercambiar
  }
  return newArray;
}
