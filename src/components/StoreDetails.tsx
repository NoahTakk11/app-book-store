import { useBoookStore } from "../zustand/booksStore";
import { BOOKS } from "../constants/books";
export default function StoreDetails() {
  const { readList } = useBoookStore();
  const booksAvaible = BOOKS.length - readList.length;
  const booskInReadList = readList.length;
  return (
    <header className="p-5 lg:flex lg:flex-col lg:items-center lg:justify-center">
      <h1 className="text-4xl text-center p-1">My Book Store</h1>
      <h2 className="text-xl font-medium p-1">
        Quedan {booksAvaible} libros disponibles
      </h2>
      <h3 className="text-lg font-medium p-1">
        {booskInReadList} en lista de lectura
      </h3>
    </header>
  );
}
