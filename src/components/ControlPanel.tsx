import { GENDERS } from "../constants/books";
import { useBoookStore } from "../zustand/booksStore";
import { useEffect, useState } from "react";

//Components
import FilterButton from "./FilterButton";

export default function ControlPanel() {
  const [inputNumberPages, setInputNumberPages] = useState(0);
  const {
    updateRenderBooksByGenders,
    resetRenderList,
    updateGendersList,
    deleteGender,
    updateRenderBooksByPages,
    genderList,
    viewDetails,
  } = useBoookStore();

  const addFilter = (gender: string) => {
    if (genderList === gender) {
      deleteGender();
      resetRenderList();
    } else {
      resetRenderList();
      updateGendersList(gender);
    }
  };

  const resetFilters = () => {
    deleteGender();
    resetRenderList();
  };

  useEffect(() => {
    if (genderList.length === 0) {
      return resetRenderList();
    }
    updateRenderBooksByGenders(genderList);
  }, [updateRenderBooksByGenders, resetRenderList, genderList]);

  useEffect(() => {
    const inputFilter = document.getElementById(
      "filter-pages"
    ) as HTMLInputElement;

    const handleInput = (event: Event) => {
      resetRenderList();
      const inputValue = (event.target as HTMLInputElement).value;
      if (inputValue) {
        const numberPages = parseInt(inputValue, 10);
        setInputNumberPages(numberPages);
        updateRenderBooksByPages(numberPages);
      }
    };

    inputFilter?.addEventListener("input", handleInput);

    return () => {
      inputFilter?.removeEventListener("input", handleInput);
    };
  }, [updateRenderBooksByPages, inputNumberPages, resetRenderList]);

  return (
    <section className="flex flex-col p-5 items-center justify-center">
      <p className={`${viewDetails ? "hidden" : "block"}`}>
        Puedes filtrar por género y número de páginas
      </p>
      <div
        className={`flex flex-row gap-1 mt-1 ${
          viewDetails ? "hidden" : "block"
        }`}
      >
        <FilterButton callback={resetFilters} id={5}>
          Ver todos
        </FilterButton>
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

      <div
        className={`flex flex-row gap-1 items-center mt-10 ${
          viewDetails ? "hidden" : "block"
        }`}
      >
        <label htmlFor="pag-filter" className="text-lg">
          Minimo de páginas:
        </label>
        <input
          id="filter-pages"
          type="number"
          name="pag-filter"
          max={1000}
          placeholder="0"
          className="w-16 text-center text-black text-lg rounded-sm border-2"
        />
      </div>
    </section>
  );
}
