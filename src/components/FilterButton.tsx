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
      className={`text-sm font-medium bg-green-400 rounded-2xl p-1 text-slate-900 border-[#414654] border-2 ${"bg-green-400"}`}
    >
      {props.children}
    </button>
  );
}
