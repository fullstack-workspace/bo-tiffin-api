import { Request, Response } from "express";
import books from "../models/bookModel";

// Define the Book type
type Book = {
  id: number;
  title: string;
};

export const getBooks = (req: Request, res: Response): void => {
  res.json(books);
};

export const getBookById = (req: Request, res: Response): void => {
  const book = (books as Book[]).find(b => b.id === parseInt(req.params.id));
  if (!book) res.status(404).json({ message: "Book not found" });
  res.json(book);
};

export const addBook = (req: Request, res: Response): void => {
  const newBook: Book = { id: books.length + 1, title: req.body.title };
  (books as Book[]).push(newBook);
  res.status(201).json(newBook);
};

export const updateBook = (req: Request, res: Response): void => {
  const book = (books as Book[]).find(b => b.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).json({ message: "Book not found" });
  } else {
    book.title = req.body.title || book.title;
    res.json(book);
  }
};

export const deleteBook = (req: Request, res: Response): void => {
  const index = (books as Book[]).findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) res.status(404).json({ message: "Book not found" });
  (books as Book[]).splice(index, 1);
  res.json({ message: "Book deleted" });
};