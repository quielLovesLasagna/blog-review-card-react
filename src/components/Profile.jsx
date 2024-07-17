import styles from "./Profile.module.css";

function Profile() {
	return (
		<div className={styles.profile}>
			<img
				className={styles.profilePic}
				src="../../public/assets/images/image-avatar.webp"
				alt="Author avatar"
			/>
			<p className={styles.profileName}>Greg Hooper</p>
		</div>
	);
}

export default Profile;
