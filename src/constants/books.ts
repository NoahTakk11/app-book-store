import books from "../mocks/books.json";
import { Library } from "../types/bookTypes";
interface Book {
  title: string;
  cover: string;
  ISBN: string;
  genre: string;
}

export const BOOKS: Library[] = books.library.map((item) => item);
export const GENDERS: string[] = [
  ...new Set(books.library.map((book) => book.book.genre)),
];
export const DATABOOKTORENDER: Book[] = books.library.map((element) => {
  const { title, cover, ISBN, genre } = element.book;
  return { title, cover, ISBN, genre };
});
