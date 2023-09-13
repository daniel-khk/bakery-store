import { useState } from 'react';
import styles from './ItemCard.module.scss';
import ImagePopup from '../imagePopup/ImagePopup';


function ItemCard({ item }) {
	const [imageUrl, setImageUrl] = useState('');
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const openPopup = (imageUrl) => {
		setImageUrl(imageUrl);
		setIsPopupOpen(true);
		document.body.style.overflow = "hidden";
	};

	const closePopup = () => {
		setIsPopupOpen(false);
		document.body.style.overflow = "unset";
	};

	return (
		<>
			<div className={styles.container} onClick={() => {openPopup(item.img)}}>
				<div className={styles.imageBox}>
					<img src={item.img} alt="Item Image" loading="lazy" />
				</div>
				<div className={styles.textBox}>
					<h3>{item.name}</h3>
					<h4>${item.price.toFixed(2)}</h4>
				</div>
			</div>
			{isPopupOpen && <ImagePopup imageUrl={imageUrl} closePopup={closePopup} />}
		</>
	)
}

export default ItemCard
