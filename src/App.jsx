import { React, useEffect } from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import PortFolio from './Components/Portfolio/PortFolio';
import InterPersonal from './Components/InterPersonal/InterPersonal';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import { init } from './ThreeJs/Model';

const App = () => {
	useEffect(() => {
		init();
	}, []);

	return (
		<>
			<Header />

			<Navbar />
			<About />
			<Experience />
			<Education />
			<PortFolio />
			<InterPersonal />
			<Contacts />
			<Footer />
		</>
	);
};

export default App;
