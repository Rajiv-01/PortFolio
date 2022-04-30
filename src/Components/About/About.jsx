import React from 'react';
import './about.css';
import me2 from '../../Assets/IMG_8757.webp';
import Fade from 'react-reveal/Fade';

const About = () => {
	return (
		<section id='about' className='section'>
			<h5>Get to know</h5>
			<h2>About Me</h2>
			<div className='container about_container'>
				<Fade left>
					<div className='about_me'>
						<div className='about_me image'>
							<img src={me2} alt='me2' />
						</div>
					</div>
				</Fade>
				<Fade right>
					<div className='about_content'>
						<div className='about_cards'>
							<article className='about_card'>
								<i className='fas fa-briefcase about_icon'></i>
								<h5>Under-Graduate</h5>
								<small>3rd year B.Tech CSE student. </small>
							</article>
							<article className='about_card'>
								<i className='fas fa-user about_icon'></i>
								<h5>Web Developer</h5>
								<small> Quite familiar with frameworks.</small>
							</article>
							<article className='about_card'>
								<i className='fas fa-laptop about_icon'></i>
								<h5>Love Challenges</h5>
								<small> I love working in a challenging situations.</small>
							</article>
						</div>
						<p>
							<b>
								"Commit yourself to lifelong learning. The most valuable asset
								you'll ever have is your mind and what you put into it."
							</b>{' '}
							<br />
							Currently pursuing my B.Tech in Computer Science and Engineering
							from Chandigarh Group of Colleges Landran, Punjab. I am 21 year
							old, focusing on my short as well as long term goals. I am a
							person who is always open to new ideas and challenges. What i need
							is a supportive people who will help me to grow and learn from
							them. I can easily settle in a new enviorment with new people,
							work with everyone as a team.
						</p>
						<a href='#contact'>Let's Talk</a>
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default About;
