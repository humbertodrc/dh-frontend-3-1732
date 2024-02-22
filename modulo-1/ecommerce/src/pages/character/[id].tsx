import Card from "@/components/common/Card";
import { Layout } from "@/components/layouts";
import { Character } from "@/interface";
import { getCharacter } from "@/services/getCharacter";
import { getCharacters } from "@/services/getCharacters";
import { GetStaticPaths, GetStaticProps } from "next";

export default function CharacterPage({character}: {character: Character}) {
	return (
		<Layout title={character.name} description={`Figura de ${character.name}`}>
			<Card character={character} />
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
	const characters = await getCharacters();
	const idiomas = locales as string[];

	// Obtener los paths para cada idioma
	const paths = characters.flatMap((character: Character) =>
		idiomas.map((idioma) => ({params: {id: character.tail}, locale: idioma}))
	);

	return {
		paths,
		// Mostar las diferentes opcion de ISG por ejemplo: blocking, incremental
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({params}) => {
	const id = params?.id as string;

	const character = await getCharacter(id);

	return {
		props: {
			character,
		},
	};
};
