import React from 'react';

import confident from '../../Assets/confident.webp';
import communication from '../../Assets/communication.webp';
import leaderhip from '../../Assets/leadership.webp';
import teamwork from '../../Assets/teamwork.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCube, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import './InterPersonal.css';

const data = [
	{
		id: 1,
		title: 'Great Confidence',
		des: 'I know my strengths and weakness well, and have a positive view of myself. I am confident in my ability to work in any given conditions either it be multitasking or a large project.',
		image: confident,
	},
	{
		id: 2,
		title: 'Good Communication Skills',
		des: 'Confident, articulate, and professional speaking abilities (and experience). I am able to communicate effectively  in a team. In past my good speaking skills have been beneficial to me and my team.',
		image: communication,
	},
	{
		id: 3,
		title: 'Teamwork',
		des: 'I am able to work in a team effecientily and with a cheerful vibe. I always try to bring up best from my team members. I always try to be helpful to my fellow peers.',
		image: teamwork,
	},
	{
		id: 4,
		title: 'A good Leaderhip Quality',
		des: 'I am able to lead a team and to bring out the best from my team members. I try to give them a positive feedback and encourage them to work harder. Giving them a path to follow and to give assistance at each step.',
		image: leaderhip,
	},
];
const InterPersonal = () => {
	return (
		<section id='interpersonal' className='section'>
			<h5>The skills that also matters</h5>
			<h2>Interpersonal Skills</h2>
			<Swiper
				effect={'cube'}
				grabCursor={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				modules={[Autoplay, EffectCube, Pagination]}
				className='interpersonal_container container'
			>
				{data.map((article) => (
					<SwiperSlide
						key={article.id}
						className='interskill'
						style={{ height: '300px' }}
					>
						<div className='interskill-img'>
							<img src={article.image} alt='skill' />
						</div>
						<h3>{article.title}</h3>
						<small>{article.des}</small>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default InterPersonal;
