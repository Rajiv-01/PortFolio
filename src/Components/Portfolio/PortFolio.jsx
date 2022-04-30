import React from 'react';
import './portfolio.css';
import IMG1 from '../../Assets/Nft.jpeg';
import IMG2 from '../../Assets/HomePage.png';
import IMG3 from '../../Assets/PStack.png';
import IMG4 from '../../Assets/Music_controller.jpg';
import IMG5 from '../../Assets/NewsFlash.png';
import IMG6 from '../../Assets/Pyment.png';
import Fade from 'react-reveal/Fade';

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'NFT-HUB',
		description:
			'A decentralized NFT platform to buy and sell AI generated token',
		github: 'https://github.com/Rajiv-01/NFT_HUB',
		demo: 'https://nft-hub-rho.vercel.app/',
	},
	{
		id: 2,
		image: IMG2,
		title: 'Dog Adoption Site',
		description: 'A website to adopt dogs and to buy their toys at low price',
		github: 'https://github.com/Rajiv-01/Dog-Adoption-Site',
		demo: 'https://adoption-site.azurewebsites.net/index.html',
	},
	{
		id: 3,
		image: IMG3,
		title: 'Professional-Stack',
		description:
			'This is a project that I am working on using React and Django. This website would act as mix of Quora, Stack Exchange and Discord',
		github: 'https://github.com/Rajiv-01/ProfessionalStack',
		demo: null,
	},
	{
		id: 4,
		image: IMG4,
		title: 'Music-Controller',
		description:
			'A music player aka platform where users can join a room and with the help of voting system they can skip a song.',
		github: 'https://github.com/Rajiv-01/MLH-LHD/tree/master/music_controller',
		demo: null,
	},
	{
		id: 5,
		image: IMG5,
		title: 'News-Flash',
		description:
			'A news feed website where users can post their news and get it in real time',
		github: 'https://github.com/Rajiv-01/newsapp',
		demo: null,
	},
	{
		id: 6,
		image: IMG6,
		title: 'Payment-Gateway',
		description:
			'A payment gateway website where users can doante for good cause and help feed stray dogs',
		github:
			'https://github.com/Rajiv-01/Payment-Gateway-Integration-For-TSF-GRIP',
		demo: 'http://reactprojectbyrajiv.me/Payment-Gateway-Integration-For-TSF-GRIP/',
	},
];
const PortFolio = () => {
	return (
		<section id='portfolio' className='section'>
			<h5>My Recent Work</h5>
			<h2>Projects</h2>
			<div className='container portfolio_container'>
				{data.map((article) => (
					<Fade bottom key={article.id}>
						<article key={article.id} className='portfolio_item'>
							<div className='portfolio_item-img'>
								<img src={article.image} alt='project' />
							</div>
							<h3>
								<i>{article.id}. </i>
								{article.title}
							</h3>
							<p className='description'>{article.description}</p>
							<div className='project_btn'>
								<a className='btn' href={article.github} target='_blank'>
									View Code
								</a>
								{article.demo && (
									<a
										className='btn btn-primary'
										href={article.demo}
										target='_blank'
									>
										Live Demo
									</a>
								)}
							</div>
						</article>
					</Fade>
				))}
			</div>
		</section>
	);
};

export default PortFolio;
