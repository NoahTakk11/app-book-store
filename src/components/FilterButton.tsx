import { useState, useEffect } from "react";

interface Props {
  callback: () => void;
  children: string;
  id: number;
}
export default function FilterButton(props: Props) {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleButtonClick = () => {
      setIsActive((prev) => {
        const newState = !prev;
        localStorage.setItem(`isActive_${props.id}`, JSON.stringify(newState));

        return newState;
      });
    };

    const changeButton = document.getElementById(String(props.id));
    changeButton?.addEventListener("click", handleButtonClick);

    return () => {
      if (changeButton) {
        changeButton.removeEventListener("click", handleButtonClick);
      }
    };
  }, [props.id, isActive]);

  useEffect(() => {
    const handleChangeStorage = (event: StorageEvent) => {
      if (event.key === `isActive_${props.id}` && event.newValue !== null) {
        setIsActive(Boolean(JSON.parse(event.newValue)));
      }
    };

    window.addEventListener("storage", handleChangeStorage);

    return () => window.removeEventListener("storage", handleChangeStorage);
  }, [props.id]);

  return (
    <button
      id={String(props.id)}
      onClick={() => {
        props.callback();
      }}
      className={`text-sm font-medium bg-green-400 rounded-lg p-1 border-white border-2 ${
        isActive ? "bg-green-400" : "bg-green-950"
      }`}
    >
      {props.children}
    </button>
  );
}
