import React, { useRef } from 'react';
import './contacts.css';
import emailjs from 'emailjs-com';
import Bounce from 'react-reveal/Bounce';

const Contacts = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			'service_lwx7jn4',
			'template_plip81q',
			form.current,
			'7NvSQHZXqZlGM7S_9'
		);
		e.target.reset();
	};
	return (
		<section id='contact' className='section'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className='container contact_container'>
				<Bounce left>
					<div className='contact_options'>
						<article className='contact_option'>
							<i className='fas fa-paper-plane'></i>
							<h4>Email</h4>
							<h5>rajivsharma4180@gmail.com</h5>
							<a href='mailto:rajivsharma4180@gmail.com' target='_blank'>
								{' '}
								Send a message
							</a>
						</article>
						<article className='contact_option'>
							<i className='fab fa-instagram'></i>
							<h4>Instagram</h4>
							<h5>r.a.j.i.v_01</h5>
							<a href='https://instagram.com/r.a.j.i.v_01' target='_blank'>
								DM me
							</a>
						</article>
						<article className='contact_option'>
							<i className='fab fa-whatsapp'></i>
							<h4>Whatsapp</h4>
							<h5>98771-48528</h5>
							<a
								href='https://api.whatsapp.com/send?phone=9877148528'
								target='_blank'
							>
								Ping Me
							</a>
						</article>
					</div>
				</Bounce>
				<Bounce right>
					<form ref={form} onSubmit={sendEmail}>
						<input
							type='text'
							name='name'
							placeholder='Your Cute Name'
							required
						/>
						<input
							type='email'
							name='email'
							placeholder='Your Email'
							required
						/>
						<textarea
							name='message'
							placeholder='Your Message'
							rows='7'
							required
						></textarea>
						<button className='btn btn-primary' type='submit'>
							Send Message
						</button>
					</form>
				</Bounce>
			</div>
		</section>
	);
};

export default Contacts;
