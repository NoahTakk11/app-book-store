import { useBoookStore } from "../zustand/booksStore";
import { useEffect, useState } from "react";
import { Library } from "../types/bookTypes";

interface Props {
  view: boolean;
}
export default function BooksView(props: Props) {
  const [listRenderBooks, setListRenderBooks] = useState<Library[]>([]);
  const { renderBooks } = useBoookStore();

  useEffect(() => {
    setListRenderBooks(renderBooks);
  }, [renderBooks]);
  return (
    <section
      className={`flex items-center justify-center ${
        props.view ? "block" : "hidden"
      }`}
    >
      <ul className="grid grid-cols-2 gap-2 p-2">
        {listRenderBooks.map((item, index) => (
          <li key={index}>
            <img
              src={item.book.cover}
              alt={item.book.title}
              className="w-40 rounded-sm border-2"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
