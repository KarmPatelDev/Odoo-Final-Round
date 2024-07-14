import React from "react";
import "./Book.css";

function Treading({ book }) {
  return (
    <div className="book">
      <div className="logo">
        <img
          src={book.thumbnailUrl}
          alt={book.title}
          className="book-thumbnail"
        />
      </div>
      <div className="book-details">
        <h2>{book.title}</h2>
        {/* <p>{book.shortDescription}</p> */}
        <p>
          <span className="book-span">Authors: </span> {book.authors.join(", ")}
        </p>
        <p>
          <span className="book-span">Categories: </span>
          {book.categories.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default Treading;
