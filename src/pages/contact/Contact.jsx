import styles from './Contact.module.scss';
import Title from '../../components/title/Title';
import ContactForm from './ContactForm';


function Contact() {
	return (
		<main>
			<section>
				<div className={styles.title}>
					<Title label={"contact us"} />
				</div>
				<div className={styles.container}>
					<div className={styles.textContainer}>
						<p className={styles.textAddress}>3895 Bathurst St.<br />Toronto ON, M3H 5V1</p>
						<p className={styles.textOpenHours}>Tuesday - Sunday <span>(Closed Monday)</span><br />11am-6pm</p>
						<p className={styles.textPhone}>647 343 8200</p>
						<p className={styles.textEmail}>ketoyoona@gmail.com</p>
					</div>
					<div className={styles.formContainer}>
						<ContactForm />
					</div>
				</div>
			</section>
		</main>
	)
}

export default Contact