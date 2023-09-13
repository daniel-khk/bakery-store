import styles from './Navbar.module.scss';
import MainLogo from '../../assets/logo_large.svg'
import { Link, useLocation } from 'react-router-dom';
import NavbarMobile from './NavbarMobile';


function Navbar() {
	const location = useLocation();

	return (
		<>
			<header className={styles.navbarWeb}>
				<div className={styles.navbar}>
					<nav className={styles.wrapper}>
						<div className={styles.navMenu}>
							<ul>
								<li className={`${styles.menu}`}>
									<Link to="/">home</Link>
								</li>
								<li className={`${styles.menu} ${location.pathname === '/about' ? styles.active : ''}`}>
									<Link to="/about">about</Link>
								</li>
								<li className={`${styles.menu} ${location.pathname === '/keto' ? styles.active : ''}`}>
									<Link to="/keto">keto</Link>
								</li>
								<li className={`${styles.menu} ${location.pathname === '/consultation' ? styles.active : ''}`}>
									<Link to="/consultation">consultation</Link>
								</li>
								<li className={`${styles.menu} ${location.pathname === '/contact' ? styles.active : ''}`}>
									<Link to="/contact">contact</Link>
								</li>
							</ul>
						</div>
						<div className={styles.navLogo}>
							<img className={styles.mainLogo} src={MainLogo} alt="Main Logo" />
						</div>
					</nav>
				</div>
			</header>
			<NavbarMobile />
		</>
	)
}

export default Navbar