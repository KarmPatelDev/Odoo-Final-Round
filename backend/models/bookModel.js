import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  ISBN: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('books', bookSchema);
