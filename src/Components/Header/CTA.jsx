import React from 'react';
import resume from '../../Assets/Rajiv_Sharma_Resume.pdf';

const CTA = () => {
	return (
		<div className='cta'>
			<a className='btn' href={resume} download>
				Download Resume
			</a>
			<a className='btn btn-primary' href='#contact'>
				Contact Me
			</a>
		</div>
	);
};

export default CTA;
