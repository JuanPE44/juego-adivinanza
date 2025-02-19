export function generateCards(length: number) {
  const cards = [];
  for (let i = 0; i < length; i++) {
    cards.push({
      id: i * 100,
      number: Math.floor(i / 2),
      uncovered: false,
      canSeen: false,
    });
  }
  return cards;
}
