import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const books = () => {
  const booksData= useLoaderData();
  return (
    <div className='lg:grid grid-cols-3 gap-10 mx-auto'>
      {
        booksData.books.map((book) => <Book key={book.isbn13} book={book}></Book>)
      }
    </div>
  );
};

export default books;