import { useState } from "react";

interface Props {
  key: number;
  id: number;
  number: number;
  handleClickBoard: (id: number) => void;
}

export function Card({ key, id, number, handleClickBoard }: Props) {
  const [color, setColor] = useState("red");
  const [uncovered, setUncovered] = useState(false);
  const handleClick = (id: number) => {
    handleClickBoard(id);
    setColor("blue");
    setUncovered(true);
  };
  return (
    <div
      key={key}
      style={{ backgroundColor: color }}
      className=" cursor-pointer rounded-2xl w-20 h-28 flex flex-col justify-center items-center"
      onClick={() => handleClick(id)}
    >
      <h1 style={{ opacity: uncovered ? 1 : 0 }}>{number}</h1>
      {uncovered && <p>uncovered</p>}
    </div>
  );
}
