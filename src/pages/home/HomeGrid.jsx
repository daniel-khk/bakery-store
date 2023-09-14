import styles from './HomeGrid.module.scss';
import Title from '../../components/title/Title';
import homeGridData from '../../data/homeGridData';
import { Link } from 'react-router-dom';


function HomeGrid() {
	const items = homeGridData;

	return (
		<section>
			<div className={styles.title}>
				<Title label={"best sellers"} />
			</div>
			<div className={styles.gridContainer}>
				{items.map((item, i) => {
					return (						
						<div className={`${styles.imageBox} ${styles[`gridItem${item.id}`]}`} key={item.id}>
							<div className={styles.gridTextBox}>
								<span className={styles.gridText}>{item.name}</span>
							</div>
							<Link to="/keto"><img src={item.img} alt="Item Image" loading="lazy" /></Link>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default HomeGrid