import Profile from "./Profile";
import Tag from "./Tag";

import styles from "./Card.module.css";

function Card() {
	return (
		<article className={styles.card}>
			<img
				className={styles.cardImg}
				src="../../public/assets/images/illustration-article.svg"
				alt="Abstract image with yellow, black, and white color"
			/>
			<Tag />
			<p className={styles.cardDate}>Published 21 Dec 2023</p>
			<h1 className={styles.cardTitle}>HTML & CSS foundations</h1>
			<p className={styles.cardText}>
				These languages are the backbone of every website, defining structure,
				content, and presentation
			</p>
			<Profile />
		</article>
	);
}

export default Card;
