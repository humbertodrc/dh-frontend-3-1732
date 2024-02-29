import {MainLayout} from "@/components/layouts";
import styles from "@/styles/Home.module.css";

export default function Home() {
	return (
		<MainLayout>
			<main className={styles.main}>
				<h1>Tienda</h1>
				<div className={styles.grid}>
					<p>Mostar los datos</p>
				</div>
			</main>
		</MainLayout>
	);
}
