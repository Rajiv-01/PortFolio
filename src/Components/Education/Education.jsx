import React from 'react';
import './educaiton.css';
import LightSpeed from 'react-reveal/LightSpeed';

const Education = () => {
	return (
		<section id='education' className='section'>
			<h5>What i have learned</h5>
			<h2>My Experience</h2>
			<div className='experience-grid container'>
				<LightSpeed left cascade>
					<div className='experience-item'>
						<h3>Education</h3>
						<section className='experience-cell'>
							<h4>Bachelors of Technology - Computer Science Engineering</h4>
							<section className='education-year'>
								<p>2019 - 2023</p>
								<p>8.50 CGPA</p>
							</section>
							<p>Chandigarh Group of Colleges Landran</p>
							<p>Punjab Technical University</p>
						</section>
						<section className='experience-cell'>
							<h4>Intermediate (Non-Medical with Computer Science)</h4>
							<section className='education-year'>
								<p>2018 - 2019</p>
								<p>89.4 %</p>
							</section>
							<p>MDK Arya Sr Secondary School, Pathankot</p>
							<p>Central Board of Secondary Education</p>
						</section>
						<section className='experience-cell'>
							<h4>Matric</h4>
							<section className='education-year'>
								<p>2016 - 2017</p>
								<p>92.8 %</p>
							</section>
							<p>Little Flower Convent School</p>
							<p>Indian Certificate of Secondary Education</p>
						</section>
					</div>
				</LightSpeed>
				<LightSpeed right cascade>
					<div className='experience-item'>
						<h3>Internships</h3>

						<section className='experience-cell'>
							<h4>Future Ready Talent Intern</h4>
							<p>October 2021 - March 2022</p>
							<p>Microsoft</p>
						</section>
						<section className='experience-cell'>
							<h4>Web Developer Intern</h4>
							<p>January 2022 - February 2022</p>
							<p>LetsGrowMore</p>
						</section>
						<section className='experience-cell'>
							<h4>Web Developer Intern</h4>
							<p>October 2021 - November 2021</p>
							<p>The Sparks Foundation</p>
						</section>
						<section className='experience-cell'>
							<h4>Artificial Intelligence Training</h4>
							<p>March 2021 - April 2021</p>
							<p>ThinkNext Mohali</p>
						</section>
					</div>
				</LightSpeed>
				<LightSpeed left cascade>
					<div className='experience-item'>
						<h3>Certifications</h3>
						<section className='experience-cell'>
							<h4>ACM PrePlacement Event- 1st position</h4>
						</section>
						<section className='experience-cell'>
							<h4>AWS_Academy_Graduate</h4>
						</section>
						<section className='experience-cell'>
							<h4>Make4Thon Certificate</h4>
						</section>
						<section className='experience-cell'>
							<h4>Certificate BusIT Week</h4>
						</section>
						<section className='experience-cell'>
							<h4>Infosys Django Developer</h4>
						</section>
					</div>
				</LightSpeed>
				{/* <LightSpeed right cascade>
					<div className='experience-item'>
						<h3>Internships</h3>
						<section className='experience-cell'>
							<h4>Bachelors of Technology - Computer Science Engineering</h4>
							<section className='education-year'>
								<p>2019 - 2023</p>
								<p>8.39 CGPA</p>
							</section>
							<p>Chandigarh Group of Colleges Landran</p>
							<p>Punjab Technical University</p>
						</section>
						<section className='experience-cell'>
							<h4>Intermediate (Non-Medical with Computer Science)</h4>
							<section className='education-year'>
								<p>2018 - 2019</p>
								<p>84.4 %</p>
							</section>
							<p>Kendriya Vidyalaya</p>
							<p>Central Board of Secondary Education</p>
						</section>
						<section className='experience-cell'>
							<h4>Matric</h4>
							<section className='education-year'>
								<p>2016 - 2017</p>
								<p>9.4 CGPA</p>
							</section>
							<p>Kendriya Vidyalaya</p>
							<p>Central Board of Secondary Education</p>
						</section>
					</div>
				</LightSpeed> */}
			</div>
		</section>
	);
};

export default Education;
