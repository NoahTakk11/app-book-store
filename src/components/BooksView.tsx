import { useEffect, useState } from "react";
import { Library } from "../types/bookTypes";
import { useBoookStore } from "../zustand/booksStore";

interface Props {
  view: boolean;
}
export default function BooksView(props: Props) {
  const [listToRender, setListToRender] = useState<Library[]>([]);
  const { renderBooks, updateRenderBooks } = useBoookStore();

  useEffect(() => {
    if (renderBooks && renderBooks.length > 0) {
      localStorage.setItem("renderBooks", JSON.stringify(renderBooks));
    }

    const renderBooksStorage = localStorage.getItem("renderBooks");
    if (renderBooksStorage && renderBooksStorage.length > 0) {
      const parseList = JSON.parse(renderBooksStorage) as Library[];
      setListToRender(parseList);
    } else {
      setListToRender(renderBooks);
    }
  }, [renderBooks]);

  console.log("listToRender -> ", listToRender);
  console.log("renderBoks -> ", renderBooks);

  useEffect(() => {
    const handleLocalStorage = (event: StorageEvent) => {
      if (event.key === "renderBooks" && event.newValue) {
        updateRenderBooks(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleLocalStorage);

    return () => window.removeEventListener("storage", handleLocalStorage);
  }, [updateRenderBooks]);

  return (
    <section
      className={`flex items-center justify-center ${
        props.view ? "block" : "hidden"
      }
      }`}
    >
      <ul className="grid grid-cols-2 gap-2 p-2">
        {listToRender.map((item, index) => (
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
