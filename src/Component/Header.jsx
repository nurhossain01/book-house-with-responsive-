import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/open-book.png';
import { IoClose, IoReorderThree } from "react-icons/io5";


const Header = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className={`flex py-8 lg:py-0 ${toggle ? 'h-52' : ''} lg:h-24   justify-between shadow-2xl px-8 mx-auto lg:items-center`}>
			<div className='lg:flex  items-center'>
				<div className='flex items-center  animate-bounce'>
					<img className='h-12' src={Logo} alt="" />
					<span className='text-2xl font-bold pl-4'>Book <span className='text-red-400'>house</span></span>
				</div>
				<div className='h-'>
					<ul className={`lg:flex lg:static animate-pulse absolute duration-500 text-xl font-bold ${toggle ? 'top-20' : '-top-48'}`}>
						<li className='lg:mx-8'>
							<Link to='/home'>Home</Link>
						</li>
						<li className='lg:mx-8'>
							<Link to='/library'>Library Catalogue</Link>
						</li>
						<li className='lg:mx-8'>
							<Link to='/contact'>Contact Us</Link>
						</li>
						<li className=' lg:hidden'>
							<Link to='/login'>Login</Link>
						</li>
					</ul>
				</div>
			</div>
			<Link to='/login'>
			<button className='btn hidden lg:block'>Login</button>
			</Link>
			<div onClick={() => setToggle(!toggle)} className='lg:hidden  text-4xl'>
				{
					toggle ?
						<IoClose></IoClose> :
						<IoReorderThree></IoReorderThree>
				}
			</div>
		</div>

	);
};

export default Header;