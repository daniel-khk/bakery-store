import styles from './Navbar.module.scss';
import MainLogo from '../../assets/logo_large.svg'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';


function NavbarMobile() {
	const location = useLocation();
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	const openSideMenu = () => {
		setIsSideMenuOpen(true);
		document.body.style.overflow = "hidden";
	}

	const closeSideMenu = () => {
		setIsSideMenuOpen(false);
		document.body.style.overflow = "unset";
	}

	return (
		<header className={styles.navbarMobile}>
			<div className={styles.navbarMobileWrapper}>
				<div className={styles.navbar}>
					<nav className={styles.wrapper}>
						<div className={styles.navLogo}>
							<a href="/"><img className={styles.mainLogo} src={MainLogo} alt="Main Logo" /></a>
						</div>
						<div className={styles.mobileMenu} >
							{!isSideMenuOpen
								? <div className={styles.barMenuIcon} onClick={() => {
									openSideMenu()
								}}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
										<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
									</svg>
								</div>
								: <div className={styles.barMenuIcon} onClick={() => {
									closeSideMenu()
								}}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</div>
							}
						</div>
					</nav>
				</div>
			</div>
			<div className={`${styles.sideMenu} ${isSideMenuOpen && styles.active}`}>
				<ul>
					<li className={`${styles.menu}`} onClick={() => { closeSideMenu() }}>
						<Link to="/">home</Link>
					</li>
					<li className={`${styles.menu} ${location.pathname === '/about' ? styles.clicked : ''}`} onClick={() => { closeSideMenu() }}>
						<Link to="/about">about</Link>
					</li>
					<li className={`${styles.menu} ${location.pathname === '/keto' ? styles.clicked : ''}`} onClick={() => { closeSideMenu() }}>
						<Link to="/keto">keto</Link>
					</li>
					<li className={`${styles.menu} ${location.pathname === '/consultation' ? styles.clicked : ''}`} onClick={() => { closeSideMenu() }}>
						<Link to="/consultation">consultation</Link>
					</li>
					<li className={`${styles.menu} ${location.pathname === '/contact' ? styles.clicked : ''}`} onClick={() => { closeSideMenu() }}>
						<Link to="/contact">contact</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default NavbarMobile