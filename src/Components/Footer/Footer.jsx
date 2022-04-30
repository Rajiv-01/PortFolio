import React from 'react';
import './footer.css';

const Footer = () => {
	return (
		<footer>
			<a href='#' className='footer_logo'>
				Rajiv Sharma
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#services'>My Skills</a>
				</li>
				<li>
					<a href='#portfolio'>Projects</a>
				</li>
				<li>
					<a href='#interpersonal'>InterPersonal Skills</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			<div className='footer_socials'>
				<a
					href='https://www.linkedin.com/in/rajiv-sharma-101949210/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fab fa-linkedin'></i>
				</a>
				<a
					href='https://github.com/Rajiv-01'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fab fa-github'></i>
				</a>
				<a
					href='https://www.instagram.com/r.a.j.i.v_01/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fab fa-instagram'></i>
				</a>
				<a href='https://leetcode.com/rajivsharma4180/'>
					<i className='fas fa-code'></i>
				</a>
			</div>
			<div className='footer_copyright'>
				<small>&copy; Rajiv Sharma 2022. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
