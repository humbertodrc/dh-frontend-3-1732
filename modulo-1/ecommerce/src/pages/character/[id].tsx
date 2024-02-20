import Card from "@/components/common/Card";
import { Layout } from "@/components/layouts";
import { Character } from "@/interface";
import { GetStaticPaths, GetStaticProps } from "next";

export default function CharacterPage({character}: {character: Character}) {
	return (
		<Layout title={character.name} description={`Figura de ${character.name}`}>
			<Card character={character} />
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
	const response = await fetch("https://amiiboapi.com/api/amiibo/");
	const data = await response.json();
	const characters = data.amiibo.slice(0, 20);

	const idiomas = locales as string[];

	// Obtener los paths para cada idioma
	const paths = characters.flatMap((character: Character) =>
		idiomas.map((idioma) => ({params: {id: character.tail}, locale: idioma}))
	);

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({params}) => {
	const id = params?.id as string;

	const response = await fetch(`https://amiiboapi.com/api/amiibo/?tail=${id}`);
	const data = await response.json();
	const character = data.amiibo[0];

	return {
		props: {
			character,
		},
	};
};
