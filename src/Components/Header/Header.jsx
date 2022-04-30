import React from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../Assets/me.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
	return (
		<header>
			<div className='container header_container'>
				<h4>Hello I am</h4>
				<h1>Rajiv Sharma</h1>
				<div className='text-light'>Full Stack Web Developer</div>
				<CTA />
				
				<div className='me'>
					<img src={me} alt='me' />
				</div>

				<a href='#contact' className='scroll_down'>
					Scroll Down
				</a>
				<HeaderSocial />
			</div>
		</header>
	);
};

export default Header;
