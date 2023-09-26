import { useBoookStore } from "../zustand/booksStore";
import { useEffect } from "react";

export default function SaveLocalStorage() {
  const { genderList, readList, renderBooks } = useBoookStore();

  useEffect(() => {
    localStorage.setItem("genderList", JSON.stringify(genderList));
    localStorage.setItem("readList", JSON.stringify(readList));
    localStorage.setItem("renderBooks", JSON.stringify(renderBooks));
  }, [genderList, readList, renderBooks]);

  return <></>;
}
