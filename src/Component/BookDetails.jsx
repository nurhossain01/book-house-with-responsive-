import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
  const singleBooks = useLoaderData();
  const { authors, image, isbn10, language, pages, price, publisher, rating, year } = singleBooks;

  return (
    <div className="max-w-xs mx-auto p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
          Author: {authors}
        </span>
        <h5 className="font-semibold tracking-wide">
          Publisher: {publisher}
        </h5>
        <h5 className="font-semibold tracking-wide">
        Language: {language}
        </h5>
        <h5 className="font-semibold tracking-wide">
          ID: {isbn10}
        </h5>
        <h5 className="font-semibold tracking-wide">
        Pages: {pages}
        </h5>
        <h5 className="font-semibold tracking-wide">
        Price: {price}
        </h5>
       <div className='flex justify-between pt-4'>
       <h5 className="font-semibold tracking-wide">
        Year: {year}
        </h5>
        <h5 className="font-semibold tracking-wide">
        Rating: {rating}
        </h5>
       </div>
      </div>
    </div>
  );
};

export default BookDetails;