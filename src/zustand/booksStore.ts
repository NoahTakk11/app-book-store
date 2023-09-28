import { create } from "zustand";
import { BOOKS } from "../constants/books";
import { Book, Library } from "../types/bookTypes";

type State = {
  renderBooks: Library[];
  readList: Book[];
  genderList: string;
  bookDetails: Book | null;
  viewDetails: boolean;
};

type Actions = {
  resetRenderList: () => void;
  updateRenderBooksByGenders: (renderBooks: string) => void;
  addBookToList: (readList: Book) => void;
  deleteToList: (readList: Book) => void;
  updateGendersList: (gender: string) => void;
  deleteGender: () => void;
  updateRenderBooksByPages: (renderBooks: number) => void;
  updateBookDetails: (bookDetails: Book) => void;
  updateViewDetails: (viewDetails: boolean) => void;
};

export const useBoookStore = create<State & Actions>((set) => ({
  renderBooks: BOOKS,
  readList: [],
  genderList: "",
  bookDetails: null,
  viewDetails: false,

  resetRenderList: () =>
    set((state) => ({ renderBooks: (state.renderBooks = BOOKS) })),

  updateRenderBooksByGenders: (filter: string) =>
    set((state) => ({
      renderBooks: state.renderBooks.filter((book) =>
        book.book.genre.includes(filter)
      ),
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
      genderList: (state.genderList = gender),
    })),

  deleteGender: () =>
    set((state) => ({
      genderList: (state.genderList = ""),
    })),

  updateRenderBooksByPages: (pages: number) =>
    set((state) => ({
      renderBooks: state.renderBooks.filter((book) => {
        return book.book.pages >= pages;
      }),
    })),

  updateBookDetails: (book: Book) =>
    set((state) => ({
      bookDetails: (state.bookDetails = book),
    })),

  updateViewDetails: (view: boolean) =>
    set((state) => ({
      viewDetails: (state.viewDetails = view),
    })),
}));
