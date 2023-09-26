import { GENDERS } from "../constants/books";
import { useBoookStore } from "../zustand/booksStore";
import { useEffect } from "react";

//Components
import FilterButton from "./FilterButton";

export default function ControlPanel() {
  const {
    updateRenderBooks,
    resetRenderList,
    updateGendersList,
    deleteGender,
    genderList,
  } = useBoookStore();

  const addFilter = (gender: string) => {
    if (genderList.includes(gender)) {
      deleteGender(gender);
      resetRenderList();
    } else {
      updateGendersList(gender);
    }
  };

  useEffect(() => {
    if (genderList.length === 0) {
      return resetRenderList();
    }
    updateRenderBooks(genderList);
  }, [updateRenderBooks, resetRenderList, genderList]);

  return (
    <section className="flex flex-col p-5">
      <p>Puedes filtrar por género y número de páginas</p>
      <div className="flex flex-row gap-1 mt-1">
        {GENDERS.map((gender, index) => (
          <FilterButton
            callback={() => {
              addFilter(gender);
            }}
            id={index}
            key={index}
          >
            {gender}
          </FilterButton>
        ))}
      </div>

      <div className="flex flex-row gap-1 items-center mt-10">
        <label htmlFor="pag-filter" className="text-lg">
          Minimo de páginas:
        </label>
        <input
          type="number"
          name="pag-filter"
          max={1000}
          placeholder="0"
          className="w-12 text-center text-black text-lg rounded-sm border-2"
        />
      </div>
    </section>
  );
}
