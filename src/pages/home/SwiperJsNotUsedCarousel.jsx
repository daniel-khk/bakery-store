import styles from './HomeCarousel.module.scss';
import image01 from '../../assets/homeCarouselImg/homeCarousel_1.webp';
import image02 from '../../assets/homeCarouselImg/homeCarousel_2.webp';
import image03 from '../../assets/homeCarouselImg/homeCarousel_3.webp';
import image04 from '../../assets/homeCarouselImg/homeCarousel_4.webp';
import { useEffect, useState } from 'react';


function SwiperJsNotUsedCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = 4;

	useEffect(() => {
		const intervalId = setInterval(() => {
			// Move to the next slide (or the first slide if at the end)
			setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
		}, 3500); // Adjust the duration (in milliseconds) as needed

		// Clear the interval when the component unmounts
		return () => clearInterval(intervalId);
	}, [currentSlide, totalSlides]);

	return (
		<div className={styles.container}>
			<div className={styles.imageBox}>
				<div className={styles.content}
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
					<img src={image01} alt="Image 1" />
					<img src={image02} alt="Image 2" />
					<img src={image03} alt="Image 3" />
					<img src={image04} alt="Image 4" />
				</div>
			</div>
			<div className={styles.leftButton}>
				<button onClick={() => {
					if (0 < currentSlide) {
						setCurrentSlide(currentSlide - 1);
					}
					else {
						setCurrentSlide(0);
					}
				}}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-10 h-10">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</button>
			</div>
			<div className={styles.rightButton}>
				<button onClick={() => {
					if (currentSlide < totalSlides - 1) {
						setCurrentSlide(currentSlide + 1);
					}
					else {
						setCurrentSlide(0);
					}
				}}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-10 h-10">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</button>
			</div>
			<div className={styles.indicators}>
				<button className={`${styles.circles1} ${0 === currentSlide ? styles.active : ''} ${styles.circles}`}
					onClick={() => {
						setCurrentSlide(0);
					}}></button>
				<button className={`${styles.circles2} ${1 === currentSlide ? styles.active : ''} ${styles.circles}`}
					onClick={() => {
						setCurrentSlide(1);
					}}></button>
				<button className={`${styles.circles3} ${2 === currentSlide ? styles.active : ''} ${styles.circles}`}
					onClick={() => {
						setCurrentSlide(2);
					}}></button>
				<button className={`${styles.circles4} ${3 === currentSlide ? styles.active : ''} ${styles.circles}`}
					onClick={() => {
						setCurrentSlide(3);
					}}></button>
			</div>
		</div>
	);
}

export default SwiperJsNotUsedCarousel;