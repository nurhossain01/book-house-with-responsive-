import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='md:container mx-auto'>
      <Header></Header>
      <div className='py-8 '>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;