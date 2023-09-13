import styles from './About.module.scss';
import Title from '../../components/title/Title';
import aboutImg from '../../assets/aboutImg/about_1.webp';

function About() {
	return (
		<div className={styles.aboutMain}>
			<div className={styles.title}>
				<Title label={"about yoona lee"} />
			</div>
			<div className={styles.container}>
				<div className={styles.imageBox}>
					<img src={aboutImg} alt="Image" loading="lazy"/>
				</div>
				<div className={styles.textBox}>
					<p className={styles.textContent}>
						I am a Holistic Nutritionist who is passionate about healthy and happy living.
					</p>
					<p className={styles.textContent}>
						I am a true believer in natural medicine and its applications in the modern world and strive to educate people. I help individuals to understand their health and address the root cause of conditions that they may have. I always look to the root cause of major health issues to control, prevent, reduce and eliminate issues in the body. Each person is biochemically different and requires independent nutrition and I will help you to solve the health issues that may pertain to you.
					</p>
					<p className={styles.textContent}>
						I am also a natural skincare products formulator, selling my products in-store and online. I offer products that are exclusively handcrafted and prepared with love and passion using only clean and high-quality ingredients.
					</p>
					<br />
					<p className={styles.textContent}>
						Yours in Health and Happiness,
					</p>
					<p className={styles.textContent}>
						Yoona Lee
					</p>

				</div>
			</div>
		</div>
	)
}

export default About