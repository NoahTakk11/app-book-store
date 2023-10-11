import { useBoookStore } from "./zustand/booksStore";
import { useState } from "react";

//Componetns
import ControlPanel from "./components/ControlPanel";
import StoreDetails from "./components/StoreDetails";
import BooksView from "./components/BooksView";
import ReadList from "./components/ReadList";
import BookDetails from "./components/BookDetails";

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
          className={`ml-2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 mt-2 ${
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
