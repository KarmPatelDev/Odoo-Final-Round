import userModel from "../models/userModel.js";
import bookModel from "../models/bookModel.js";
import transactionModel from "../models/transactionModel.js";

const addBookController = async (req, res) => {
    try{
        const data = req.body;

        const book = await new bookModel(data);
        book.save();

        res.status(201).send({
            success: true,
            message: `Book Added`,
            book: book
        });
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error In Add Book',
            error: error,
        });
    }
};


const editBookController = async (req, res) => {
    try{
        const { id } = req.params;
        const data = req.body;

        const book = await bookModel.findByIdAndUpdate(id, data, {new: true});

        res.status(201).send({
            success: true,
            message: `Book Edited`,
            book: book
        });
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: 'Error In Edit Book',
            error: error,
        });
    }
};

const deleteBookController = async (req, res) => {
    try{
        const { id } = req.params;
         
        await bookModel.findByIdAndDelete(id);

        res.status(201).send({
            success: true,
            message: `Book Deleted`,
        });
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: 'Error In Delete Book',
            error: error,
        });
    }
};

const updateStatusController = async (req, res) => {
    try{
        const { id } = req.params;
        const { status } = req.body;

        const bookedUser = await transactionModel.findByIdAndUpdate(id, { status }, {new : true});

        if(status == "Returned" || status == "Canceled"){
            const updateBook = await bookModel.findById(bookUser.book);
            await bookModel.findByIdAndUpdate(book, {quantity: updateBook.quantity + 1}, {new: true});
        }

        res.status(201).send({
            success: true,
            message: `Status Updated`,
            bookedUser: bookedUser
        });
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: 'Error In Update Status',
            error: error,
        });
    }
};


const orderController = async (req, res) => {
    try{
        const { book, user, deadlineDate, checkoutDate } = req.body;

        const transaction = await new transactionModel({ book, user, deadlineDate, checkoutDate });
        transaction.save();

        const updateBook = await bookModel.findById(book);
        await bookModel.findByIdAndUpdate(book, {quantity: updateBook.quantity - 1}, {new: true});

        res.status(201).send({
            success: true,
            message: `Successfully Booked`,
            bookedUser: bookedUser
        });
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: 'Error In Checkout',
            error: error,
        });
    }
};


const updateRoleController = async (req, res) => {
    try{
        const { id } = req.params;
        const { role } = req.body;

        const user = await userModel.findByIdAndUpdate(id, { role }, {new: true});
        user.save();

        res.status(201).send({
            success: true,
            message: `Successfully Updated`,
            user: user
        });
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: 'Error In Update Role',
            error: error,
        });
    }
};

const deleteUserController = async (req, res) => {
    try{
        const { id } = req.params;

        const user = await userModel.findByIdAndDelete(id);
        user.save();

        res.status(201).send({
            success: true,
            message: `Successfully Deleted`,
            user: user
        });
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: 'Error In Delete',
            error: error,
        });
    }
};

const getTransactionController = async (req, res) => {
    try{
        const transactions = await transactionModel.find({}).populate("book").populate("user");

        res.status(201).send({
            success: true,
            message: `Successfully Deleted`,
            transactions: transactions
        });
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: 'Error In Transaction',
            error: error,
        });
    }
};

const getBooksController = async (req, res) => {
    try{
        const books = await bookModel.find({});

        res.status(201).send({
            success: true,
            message: `Successfully, Books Got.`,
            books: books
        });
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: 'Error In Getting',
            error: error,
        });
    }
};

const getBookByIdController = async (req, res) => {
    try{
        const { id } = req.params;
        const book = await bookModel.findById(id);;

        res.status(201).send({
            success: true,
            message: `Successfully, Book Got.`,
            book: book
        });
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: 'Error In Getting',
            error: error,
        });
    }
};

export {addBookController, editBookController, deleteBookController, updateStatusController, orderController, updateRoleController, deleteUserController, getTransactionController, getBooksController, getBookByIdController };


