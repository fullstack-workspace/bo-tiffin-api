import books from "../models/bookModel.js";

export const getBooks = (req, res) => {
  res.json(books);
};

export const getBookById = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

export const addBook = (req, res) => {
  const newBook = { id: books.length + 1, title: req.body.title };
  books.push(newBook);
  res.status(201).json(newBook);
};

export const updateBook = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });
  book.title = req.body.title || book.title;
  res.json(book);
};

export const deleteBook = (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Book not found" });
  books.splice(index, 1);
  res.json({ message: "Book deleted" });
};
