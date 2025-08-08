import { Router, Request, Response } from "express";
import { getBooks, getBookById, addBook, updateBook, deleteBook } from "../controllers/bookController";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => getBooks(req, res));
router.get("/:id", (req: Request, res: Response) => getBookById(req, res));
router.post("/", (req: Request, res: Response) => addBook(req, res));
router.put("/:id", (req: Request, res: Response) => updateBook(req, res));
router.delete("/:id", (req: Request, res: Response) => deleteBook(req, res));

export default router;