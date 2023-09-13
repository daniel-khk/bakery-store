import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './global/navbar/Navbar';
import Footer from './global/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Keto from './pages/keto/Keto';
import Consultation from './pages/consultation/Consultation';
import Contact from './pages/contact/Contact';
import ScrollToTop from './components/ScrollToTop';


function App() {
	return (
		<div id="app">
			<BrowserRouter>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/keto" element={<Keto />} />
					<Route path="/consultation" element={<Consultation />} />
					<Route path="/contact" element={<Contact />} />

				</Routes>
				<Footer />				
			</BrowserRouter>		
		</div>
	)
}

export default App
