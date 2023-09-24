import books from "../mocks/books.json";
import { Library } from "../types/bookTypes";

export const BOOKS: Library[] = books.library.map((item) => item);
export const GENDERS: string[] = [
  ...new Set(books.library.map((book) => book.book.genre)),
];
