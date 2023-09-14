import styles from './Consultation.module.scss';
import Title from '../../components/title/Title';
import ConsultationCard from './ConsultationCard';
import ConsultationCard2 from './ConsultationCard2';
import consultData from '../../data/consultData';


function Consultation() {
	const services = consultData;

	return (
		<main>
			<section>
				<div className={styles.title}>
					<Title label={"consultation"} />
				</div>

				<div className={styles.textContainer}>
					<h3 className={styles.textTitle}>
						A Holistic Nutritionist Can Help You With:
					</h3>
					<div className={styles.textList}>
						<ul>
							<li>Allergies</li>
							<li>Digestive Disorders</li>
							<li>Inflammation</li>
							<li>Diabetes</li>
							<li>High Blood Pressure or Cholesterol</li>
							<li>Skin Problems</li>
							<li>Infertility</li>
							<li>Muscular Problems</li>

						</ul>
						<ul>
							<li>Fatigue or Low Energy</li>
							<li>Weight Concerns</li>
							<li>Depression</li>
							<li>Hormonal Imbalances</li>
							<li>Insomnia</li>
							<li>Candida or Yeast Overgrowth</li>
							<li>Stress or Anxiety</li>
							<li>and much more!</li>
						</ul>
					</div>
				</div>
			</section>
			<section className={styles.container}>
				{services?.map((service, i) => {
					return (
						<div className={styles.consultList} key={service.id}>
							{(service.id % 2 === 0)
								? <ConsultationCard2 service={service} />
								: <ConsultationCard service={service} />
							}
						</div>
					)
				})}
			</section>
		</main>
	)
}

export default Consultation