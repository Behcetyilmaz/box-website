import { imagesUrl } from "../assets/images";
import styles from "../styles/Index.module.css";

export default function Home() {
	return (
		<>
			<div className={styles.indexContainer}>
				<div className={styles.image}>
					<img src={imagesUrl.abcd123} />
				</div>
				<div className={styles.text}>
					<h1>To be a strong and effective brand in Europe.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						amet temporibus nisi placeat
					</p>
				</div>
			</div>

			<div className={styles.indexContainer}>
				<div className={styles.text}>
					<h1>To be a strong and effective brand in Europe.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						amet temporibus nisi placeat
					</p>
				</div>

				<div className={styles.image}>
					<img src={imagesUrl.abcd122} />
				</div>
			</div>

			<div className={styles.indexContainer}>
				<div className={styles.image}>
					<img src={imagesUrl.abcd123} />
				</div>
				<div className={styles.text}>
					<h1>To be a strong and effective brand in Europe.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						amet temporibus nisi placeat
					</p>
				</div>
			</div>

			<div className={styles.indexContainer}>
				<div className={styles.text}>
					<h1>To be a strong and effective brand in Europe.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						amet temporibus nisi placeat
					</p>
				</div>

				<div className={styles.image}>
					<img src={imagesUrl.abcd122} />
				</div>
			</div>
		</>
	);
}
