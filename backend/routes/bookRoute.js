import express from "express";
import { isAdmin, isLibrarian, requireSignIn } from "../middlewares/authMiddleware.js";
import { addBookController, editBookController, deleteBookController, updateStatusController, orderController, updateRoleController, deleteUserController, getTransactionController, getBooksController, getBookByIdController } from "../controllers/bookController.js";

// Router Object
const router = express.Router();

// Routing

router.post('/add-book', requireSignIn, isLibrarian, addBookController);

router.put('/edit-book/:id', requireSignIn, isLibrarian, editBookController);

router.delete('/delete-book/:id', requireSignIn, isLibrarian, deleteBookController);

router.put('/update-status/:id', requireSignIn, isLibrarian, updateStatusController);

router.post('/order', requireSignIn, orderController);

router.put('/update-role/:id', requireSignIn, isAdmin, updateRoleController);

router.delete('/delete-user/:id', requireSignIn, isAdmin, deleteUserController);

router.get('/get-transactions', requireSignIn, getTransactionController);

router.get('/get-books', getBooksController);

router.get('/get-book/:id', getBookByIdController);

export default router;