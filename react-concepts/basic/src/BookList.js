import React from "react";
import { books } from "./data";
import Book from "./Book";

function BookList() {
  return (
    <section>
      {/*  <Book t={book1.title} a={book1.author} i={book1.img} />
      <Book t={book2.title} a={book2.author} i={book2.img} /> */}
      {books.map((book) => {
        //const { title, author, img } = book;
        /* return <Book book={book} />; */
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}
export default BookList;
