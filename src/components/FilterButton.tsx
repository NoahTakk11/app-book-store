import { useState } from "react";

interface Props {
  callback: () => void;
  children: string;
}
export default function FilterButton(props: Props) {
  const [isActive, setIsActive] = useState(true);

  const handleButtonClick = () => {
    props.callback();
    setIsActive((prev) => !prev);
  };

  return (
    <button
      onClick={() => {
        handleButtonClick();
      }}
      className={`text-sm font-medium bg-green-400 rounded-lg p-1 border-white border-2 ${
        isActive ? "bg-green-400" : "bg-green-950"
      }`}
    >
      {props.children}
    </button>
  );
}
