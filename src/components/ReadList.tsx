import { useBoookStore } from "../zustand/booksStore";

interface Props {
  view: boolean;
}
export default function ReadList(props: Props) {
  const { readList, deleteToList } = useBoookStore();
  return (
    <section className={`mb-20 ${props.view ? "block" : "hidden"}`}>
      <ul className="grid grid-cols-2 gap-2 p-2 md:grid-cols-4 md:gap-4 items-center justify-center">
        {readList.map((item, index) => (
          <li key={index}>
            <img
              src={item.cover}
              alt={item.title}
              className="w-40 md:h-60 rounded-sm border-2"
            />
            <button
              onClick={() => deleteToList(item)}
              id="btn-add"
              className="flex flex-col m-auto  mt-2 rounded-lg border-2 p-1 font-medium bg-red-400"
            >
              Borrar de lista
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
