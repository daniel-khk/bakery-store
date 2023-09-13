import styles from './ConsultationCard2.module.scss';


function ConsultationCard2({ service }) {
	const titleWithLineBreaks = service.title.replace(/\n/g, '<br />');
	const contentWithLineBreaks = service.content.replace(/\n/g, '<br />');
	return (
		<>
			<div className={styles.cardContainer}>
				<div className={styles.textBox}>
					<h4 dangerouslySetInnerHTML={{ __html: titleWithLineBreaks }} />
					<p dangerouslySetInnerHTML={{ __html: contentWithLineBreaks }} />
					<p>{service.sub}</p>
					<p>${service.price.toFixed(2)}</p>
				</div>
				<div className={styles.imageBox}>
					<img src={service.img} alt="Image" loading="lazy" />
				</div>
			</div>

		</>
	)
}

export default ConsultationCard2