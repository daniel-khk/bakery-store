import { useState } from 'react';
import styles from './ContactForm.module.scss';
import ContactModal from './ContactModal';


function ContactForm() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isValid, setIsValid] = useState(false);
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const openModal = () => {
		setIsModalOpen(true);
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = "unset";
	};

	const handleEmailChange = (event) => {
		const value = event.target.value;
		setEmail(value);
	};

	const handleUserNameChange = (event) => {
		const value = event.target.value;
		setUserName(value);
	};

	const handleSubjectChange = (event) => {
		const value = event.target.value;
		setSubject(value);
	};

	const handleMessageChange = (event) => {
		const value = event.target.value;
		setMessage(value);
	};

	const validation = () => {
		if (email.trim() && userName.trim()
		&& subject.trim() && message.trim() !== "") {
			openModal();
			setIsValid(true);
		} else {
			openModal();
			setIsValid(false);
		}
	}

	return (
		<>
			<div className={styles.contactInput}>
				<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Email
				</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={handleEmailChange}
					aria-describedby="helper-text-explanation"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="email@gmail.com"
				/>
			</div>
			<div className={styles.contactInput}>
				<label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Name
				</label>
				<input
					type="text"
					id="userName"
					value={userName}
					onChange={handleUserNameChange}
					aria-describedby="helper-text-explanation"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Yoona"
				/>
			</div>
			<div className={styles.contactInput}>
				<label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Subject
				</label>
				<input
					type="text"
					id="subject"
					value={subject}
					onChange={handleSubjectChange}
					aria-describedby="helper-text-explanation"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="..."
				/>
			</div>
			<div className={styles.contactInput}>
				<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Message
				</label>
				<textarea
					id="message"
					value={message}
					onChange={handleMessageChange}
					rows="6"
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="..."
				></textarea>
			</div>
			<div className={styles.submitButton}>
				<input type="submit" value="Submit" onClick={() => {
					validation();
				}} />
			</div>
			{isModalOpen && <ContactModal isValid={isValid} closeModal={closeModal} />}
		</>
	)
}

export default ContactForm