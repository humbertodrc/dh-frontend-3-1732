import {MainLayout} from "@/components/layouts";
import { Card } from "@/components/ui/card";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from "next/router";
import { DEFAULT_LOCALE, TEXTS_BY_LANGUAGE } from "../locale/constants";
import { ProductsAPIResponse } from "@/interface";

interface HomeProps {
	data: ProductsAPIResponse
}

const Home:NextPage<HomeProps> = ({ data }) => {

	const {locale} = useRouter()
	
	if (!data) return <h1>loading...</h1>
	
	const {MAIN } = TEXTS_BY_LANGUAGE[locale as keyof typeof TEXTS_BY_LANGUAGE] ?? TEXTS_BY_LANGUAGE[DEFAULT_LOCALE]

	return (
		<MainLayout>
			<main className={styles.main}>
				<h1>{MAIN.PRODUCTS}</h1>
				<div className={styles.grid}>
					{data && data.map((product) => (
							<Card key={product.id} product={product} />
						))}
				</div>
			</main>
		</MainLayout>
	);
}


export const getServerSideProps: GetServerSideProps = async ({locale}) => {

	// Cambiar la URL por una variable de entorno, que es la que viene de Next
	const baseURL = "http://localhost:3000/"

	const response = await fetch(`${baseURL}api/products/${locale}`)

	const data = await response.json()

	return {
		props: {
			data
		}
	}
}


export default Home;
