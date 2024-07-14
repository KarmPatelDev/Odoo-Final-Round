// src/Home.js

import React, { useState } from "react";
import "./auth/Home.css";
import Navbar from "./auth/Navbar";
import UserProfileDropdown from "./auth/UserProfileDropdown";
import BookDetails from "./auth/BookDetails";
import Treading from "./auth/Treading";
import PopularBooks from "./PopularBooks/PopularBooks";
import RecentAddedBooks from "./RecentAddBooks/RecentAddedBooks";

function Home() {
  const Books = [
    {
      title: "Unlocking Android",
      isbn: "1933988673",
      pageCount: 416,
      publishedDate: "2009-04-01",
      thumbnailUrl:
        "http://books.google.com/books/content?id=dwApAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      shortDescription:
        "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
      authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
      categories: ["Open Source", "Mobile"],
    },
    {
      title: "Android in Action, Second Edition",
      isbn: "1935182722",
      pageCount: 592,
      publishedDate: "2011-01-14",
      thumbnailUrl:
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
      shortDescription:
        "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond 'Hello Android,' this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples.",
      authors: ["W. Frank Ableson", "Robi Sen"],
      categories: ["Java"],
    },
  ];

  console.log(Books);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for login status

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div>
          <div className="search-container">
            <input placeholder="Search Your Books"></input>
            <button>Search</button>
          </div>
          <PopularBooks />
          <div className="Books_container">
            <div className="books">
              <span className="h1">New Arrivals</span>
              {Books.map((book, index) => (
                <BookDetails key={index} book={book} /> // Pass book as a prop
              ))}
            </div>

            <div className="treading margin">
              <span className="h1 ">Treading🚀🚀</span>
              {Books.map((book, index) => (
                <Treading key={index} book={book} /> // Pass book as a prop
              ))}
            </div>
          </div>
          <RecentAddedBooks />
        </div>
      </div>
      {isLoggedIn && <UserProfileDropdown />}
    </div>
  );
}

export default Home;
