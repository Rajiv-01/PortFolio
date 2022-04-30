import React from 'react';
import './experience.css';
import SkillBar from 'react-skillbars';
import Flip from 'react-reveal/Flip';

const skills = [
	{ type: 'Python', level: 85 },
	{ type: 'Java', level: 75 },
	{ type: 'C++', level: 50 },
	{ type: 'Docker', level: 30 },
	{ type: 'Git', level: 60 },
	{ type: 'AWS', level: 50 },
	{ type: 'CP', level: 80 },
];

const Experience = () => {
	return (
		<section id='experience' style={{ width: '100%' }} className='section'>
			<h5>The Skills I Have</h5>
			<h2>My Skills</h2>
			<div className='container experience_container'>
				<Flip left>
					<div className='experience_frontend'>
						<h3>Frontend Development</h3>
						<div className='experience_content'>
							<article className='experience_details'>
								<i className='fab fa-html5'></i>
								<div>
									<h4>HTML</h4>
									<small className='text-light'>Experienced</small>
								</div>
							</article>
							<article className='experience_details'>
								<i className='fab fa-css3'></i>
								<div>
									<h4>CSS</h4>
									<small className='text-light'>Intermediate</small>
								</div>
							</article>
							<article className='experience_details'>
								<i className='fab fa-js'></i>
								<div>
									<h4>JavaScript</h4>
									<small className='text-light'>Intermediate</small>
								</div>
							</article>
							<article className='experience_details'>
								<i className='fab fa-react'></i>
								<div>
									<h4>React</h4>
									<small className='text-light'>Experienced</small>
								</div>
							</article>
							<article className='experience_details'>
								<i className='fab fa-react'></i>
								<div>
									<h4>ThreeJs</h4>
									<small className='text-light'>Beginner</small>
								</div>
							</article>
							<article className='experience_details'>
								<i className='fab fa-bootstrap'></i>
								<div>
									<h4>Bootstrap</h4>
									<small className='text-light'>Intermediate</small>
								</div>
							</article>
						</div>
					</div>
				</Flip>
				<Flip right>
					<div className='experience_backend'>
						<h3>Backend Development</h3>
						<div className='experience_content'>
							<article className='experience_details'>
								<i className='fab fa-python'></i>
								<div>
									<h4>Django</h4>
									<small className='text-light'>Intermediate</small>
								</div>
							</article>
							<article className='experience_details'>
								<i className='fas fa-flask'></i>
								<div>
									<h4>Flask</h4>
									<small className='text-light'>Intermediate</small>
								</div>
							</article>
							<article className='experience_details'>
								<i className='fab fa-node'></i>
								<div>
									<h4>NodeJs</h4>
									<small className='text-light'>Begineer</small>
								</div>
							</article>
							<article className='experience_details'>
								<i className='fab fa-node-js'></i>
								<div>
									<h4>Express</h4>
									<small className='text-light'>Begineer</small>
								</div>
							</article>
							<article className='experience_details'>
								<i className='fas fa-database'></i>
								<div>
									<h4>MySql</h4>
									<small className='text-light'>Intermediate</small>
								</div>
							</article>
							<article className='experience_details'>
								<i className='fas fa-database'></i>
								<div>
									<h4>MongoDB</h4>
									<small className='text-light'>Begineer</small>
								</div>
							</article>
						</div>
					</div>
				</Flip>
			</div>
			<div className='slider container'>
				<SkillBar skills={skills} height={30} />
			</div>
		</section>
	);
};

export default Experience;
