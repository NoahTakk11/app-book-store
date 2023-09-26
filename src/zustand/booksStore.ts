import { create } from "zustand";
import { BOOKS } from "../constants/books";
import { Book, Library } from "../types/bookTypes";
// import {DATABOOKTORENDER} from '../constants/books'

type State = {
  renderBooks: Library[];
  readList: (Library | Book)[];
  genderList: string[];
};

type Actions = {
  resetRenderList: () => void;
  updateRenderBooks: (renderBooks: string[]) => void;
  addBookToList: (readList: Book) => void;
  deleteToList: (readList: Book) => void;
  updateGendersList: (gender: string) => void;
  deleteGender: (gender: string) => void;
};

export const useBoookStore = create<State & Actions>((set) => ({
  renderBooks: BOOKS,
  readList: [],
  genderList: [],

  resetRenderList: () =>
    set((state) => ({ renderBooks: (state.renderBooks = BOOKS) })),

  updateRenderBooks: (filters: string[]) =>
    set((state) => ({
      renderBooks: state.renderBooks.filter((book) => {
        return filters.every((filter) => book.book.genre.includes(filter));
      }),
    })),

  addBookToList: (book: Book) =>
    set((state) => ({
      readList: [...state.readList, book],
    })),

  deleteToList: (book: Book) =>
    set((state) => ({
      readList: state.readList.filter((element) => element !== book),
    })),

  updateGendersList: (gender: string) =>
    set((state) => ({
      genderList: [...state.genderList, gender],
    })),

  deleteGender: (gender: string) =>
    set((state) => ({
      genderList: state.genderList.filter((element) => element !== gender),
    })),
}));
