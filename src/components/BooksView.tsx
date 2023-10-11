import { useEffect, useState } from "react";
import { Library } from "../types/bookTypes";
import { useBoookStore } from "../zustand/booksStore";

interface Props {
  view: boolean;
}
export default function BooksView(props: Props) {
  const [listToRender, setListToRender] = useState<Library[]>([]);
  const {
    renderBooks,
    readList,
    updateRenderBooksByGenders,
    addBookToList,
    updateViewDetails,
    updateBookDetails,
  } = useBoookStore();

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

  useEffect(() => {
    const handleLocalStorage = (event: StorageEvent) => {
      if (event.key === "renderBooks" && event.newValue) {
        updateRenderBooksByGenders(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleLocalStorage);

    return () => window.removeEventListener("storage", handleLocalStorage);
  }, [updateRenderBooksByGenders]);

  return (
    <section
      className={`flex items-center justify-center mb-20 ${
        props.view ? "block" : "hidden"
      }
      }`}
    >
      <ul className="grid grid-cols-2 gap-2 p-2 md:grid-cols-4 md:gap-4 items-center justify-center">
        {listToRender.map((item, index) => (
          <li key={index}>
            <img
              src={item.book.cover}
              alt={item.book.title}
              className={`w-40 md:h-60 rounded-sm border-2 shadow-lg shadow-black ${
                readList.includes(item.book) ? "filter brightness-50" : ""
              }`}
            />
            <div className="flex flex-row gap-1 items-center justify-center">
              <button
                onClick={() => {
                  updateViewDetails(true);
                  updateBookDetails(item.book);
                }}
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 mt-2"
              >
                Detalles
              </button>
              <button
                onClick={() => {
                  addBookToList(item.book);
                }}
                disabled={readList.includes(item.book)}
                className={`text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 mt-2 ${
                  readList.includes(item.book) ? "bg-red-400" : " bg-blue-400"
                }`}
              >
                {readList.includes(item.book) ? "En Lista" : "Añadir"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
