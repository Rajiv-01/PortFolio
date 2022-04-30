import { React, useState } from 'react';
import './navbar.css';

const Navbar = () => {
	const [activeNav, setactiveNav] = useState('#');
	return (
		<nav id='nav'>
			<a
				href='#'
				onClick={() => setactiveNav('#')}
				className={activeNav === '#' ? 'active' : ''}
			>
				<i className='fas fa-house-user'></i>
			</a>
			<a
				href='#about'
				onClick={() => setactiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			>
				<i className='fas fa-user'></i>
			</a>
			<a
				href='#experience'
				onClick={() => setactiveNav('#experience')}
				className={activeNav === '#experience' ? 'active' : ''}
			>
				<i className='fas fa-book'></i>
			</a>
			<a
				href='#portfolio'
				onClick={() => setactiveNav('#service')}
				className={activeNav === '#service' ? 'active' : ''}
			>
				<i className='fas fa-laptop'></i>
			</a>

			<a
				href='#contact'
				onClick={() => setactiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			>
				<i className='fas fa-id-badge'></i>
			</a>
		</nav>
	);
};

export default Navbar;
