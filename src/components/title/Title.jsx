import styles from './Title.module.scss';

function Title({ label }) {
	return (
		<div className={styles.titleContainer}>
			<h2 className={styles.titleText}>{label}</h2>
		</div>
	)
}

export default Title