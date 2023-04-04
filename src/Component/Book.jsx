import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const { isbn13, image, title, price, subtitle } = book
  return (
    <div className='px-4 pb-8 lg:px-0 lg:pb-0'>
      <div className="card w-full mx-auto bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Book</h2>
          <p>{subtitle}</p>
          <div className="card-actions justify-end">
            <Link to={`/bookDetails/${isbn13}`}>
            <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;