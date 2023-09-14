import styles from './Keto.module.scss';
import Title from '../../components/title/Title';
import ItemCard from '../../components/itemCard/ItemCard';
import ketoData from '../../data/ketoData';


function Keto() {
	const items = ketoData;

	return (
		<main>
			<section>
				<div className={styles.title}>
					<Title label={"keto products"} />
				</div>
				<div className={styles.container}>
					{items?.map((item, i) => {
						return (
							<div className={styles.itemList} key={item.id}>
								<ItemCard item={item} />
							</div>
						)
					})}
				</div>
			</section>
		</main>
	)
}

export default Keto