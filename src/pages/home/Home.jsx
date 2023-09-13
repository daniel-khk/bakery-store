import styles from './Home.module.scss';
import HomeCarousel from './HomeCarousel';
import HomeGrid from './HomeGrid';


function Home() {

	return (
		<main className={styles.homeMain}>
			<HomeCarousel />
			<HomeGrid />
		</main>
	)
}

export default Home