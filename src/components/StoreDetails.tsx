export default function StoreDetails() {
  const booksAvaible = 12;
  const booskInReadList = 10;
  return (
    <header className="p-5">
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
