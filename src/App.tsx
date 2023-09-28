import { useBoookStore } from "./zustand/booksStore";
import { useState } from "react";

//Componetns
import ControlPanel from "./components/ControlPanel";
import StoreDetails from "./components/StoreDetails";
import BooksView from "./components/BooksView";
import ReadList from "./components/ReadList";
import BookDetails from "./components/BookDatails";

function App() {
  const [view, setView] = useState(true);
  const { readList, viewDetails } = useBoookStore();

  const handleButtonClick = () => {
    setView((prev) => !prev);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <StoreDetails />
      <ControlPanel />
      <div className="flex flex-col items-start justify-center md:text-left">
        <button
          onClick={handleButtonClick}
          className={`font-medium rounded-2xl border-2 bg-blue-400 p-1 mx-2 md:ml-0 text-slate-900 ${
            viewDetails ? "hidden" : "block"
          }`}
        >
          {view ? `Lista de Lectura ${readList.length}` : "Volver"}
        </button>
        <BookDetails view={viewDetails} />
        <BooksView view={viewDetails ? false : view} />
        <ReadList view={viewDetails ? false : !view} />
      </div>
    </div>
  );
}

export default App;
