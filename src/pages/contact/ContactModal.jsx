import { useEffect, useState } from 'react';
import styles from './ContactModal.module.scss';


function ContactModal({ isValid, closeModal }) {
	const [modalContent, setModalContent] = useState("");
	const contentText = () => {
		if(isValid === true) {
			setModalContent(
				<div dangerouslySetInnerHTML={{ __html: "Thank you for contacting Yoona's Kitchen!<br/>We will get back to you soon." }} />
			)
		}
		else {
			setModalContent(
				<div dangerouslySetInnerHTML={{ __html: "Oops! Looks like there's an empty field.<br/>Please complete all fields before submitting." }} />
			)
		}
	}

	useEffect(() => {
		contentText();
	}, []);
	
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.contentText}>
					{modalContent}
				</div>
				<button onClick={closeModal}>Close</button>
			</div>
		</div>
	)
}

export default ContactModal