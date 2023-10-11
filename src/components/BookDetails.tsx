import { useBoookStore } from "../zustand/booksStore";

interface Props {
  view: boolean;
}
export default function BookDetails(props: Props) {
  const { bookDetails, updateViewDetails } = useBoookStore();
  return (
    <section
      className={`flex flex-col items-center justify-center m-auto mt-5 p-2 md:items-start md:mx-40 ${
        props.view ? "block" : "hidden"
      }`}
    >
      <img
        src={bookDetails?.cover}
        alt={bookDetails?.title}
        className="md:w-1/4"
      />
      <h1 className="text-xl font-medium mt-2 px-2">
        {bookDetails?.title} - {bookDetails?.author.name}
      </h1>
      <h2 className="text-lg text-start mt-4 px-2 underline">
        género: {bookDetails?.genre} páginas: {bookDetails?.pages} año:{" "}
        {bookDetails?.year}
      </h2>

      <p className="text-md text-start mt-2 px-2">{bookDetails?.synopsis}</p>
      <button
        onClick={() => updateViewDetails(false)}
        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 mt-2"
      >
        Volver
      </button>
    </section>
  );
}
