import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HomeCarousel.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image01 from '../../assets/homeCarouselImg/homeCarousel_1.webp';
import image02 from '../../assets/homeCarouselImg/homeCarousel_2.webp';
import image03 from '../../assets/homeCarouselImg/homeCarousel_3.webp';
import image04 from '../../assets/homeCarouselImg/homeCarousel_4.webp';

function HomeCarousel() {
	return (
		<section className="carousel-container">
			<Swiper
				spaceBetween={0}
				centeredSlides={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide><img className="slideImage" src={image01} alt="Image 1" /></SwiperSlide>
				<SwiperSlide><img className="slideImage" src={image02} alt="Image 2" /></SwiperSlide>
				<SwiperSlide><img className="slideImage" src={image03} alt="Image 3" /></SwiperSlide>
				<SwiperSlide><img className="slideImage" src={image04} alt="Image 4" /></SwiperSlide>
			</Swiper>
		</section>
	)
}

export default HomeCarousel;
