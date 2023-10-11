import { useEffect } from "react";

interface Props {
  callback: () => void;
  children: string;
  id: number;
}
export default function FilterButton(props: Props) {
  useEffect(() => {
    const handleButtonClick = () => {
      const button = document.getElementById(String(props.id));
      button?.classList.add("scale-105");
      setTimeout(() => {
        button?.classList.remove("scale-105");
      }, 300);
    };

    const changeButton = document.getElementById(String(props.id));
    changeButton?.addEventListener("click", handleButtonClick);

    return () => {
      if (changeButton) {
        changeButton.removeEventListener("click", handleButtonClick);
      }
    };
  }, [props.id]);

  return (
    <button
      id={String(props.id)}
      onClick={() => {
        props.callback();
      }}
      className="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-1 py-1 mr-2 mb-2 "
    >
      {props.children}
    </button>
  );
}
