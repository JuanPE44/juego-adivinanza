import { useEffect, useState } from "react";
import { shuffleArray } from "../utils/fisherYates";
import { Card } from "./Card";
import { generateCards } from "../utils/generateCard";

const CARDS = generateCards(16);
const BOARD_4X4 = shuffleArray(CARDS);
export function Board() {
  const [board, setBoard] = useState(BOARD_4X4);
  const [moves, setMoves] = useState<number[]>([]);

  useEffect(() => {
    console.log(moves);
  }, [moves]);
  const handleClick = (id: number) => {
    setMoves([...moves, id]);
  };
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 ">
      {board.map((card, index) => {
        return (
          <Card
            key={index}
            id={card.id}
            number={card.number}
            handleClickBoard={handleClick}
          />
        );
      })}
    </div>
  );
}
