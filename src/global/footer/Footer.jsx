import styles from './Footer.module.scss';

function Footer() {
	return (
		<footer>
			<div className={styles.container}>
				<section className={styles.wrapper}>
					<ul>
						<li className={styles.menu}>Yoona's Kitchen<br/>Designed & Developed by Daniel.K</li>
					</ul>
				</section>
			</div>
		</footer>


	)
}

export default Footer