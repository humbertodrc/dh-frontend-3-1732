import Card from "@/components/common/Card";
import { Layout } from "@/components/layouts";
import {Character} from "@/interface";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function CharacterPage() {
	const [character, setCharacter] = useState({} as Character);
	const {query} = useRouter();

	const getCharacter = async () => {
		try {
			if (query.id) {
				const res = await fetch(
					`https://amiiboapi.com/api/amiibo/?tail=${query.id}`
				);
				const data = await res.json();
				const characterapi = data.amiibo[0];
				setCharacter(characterapi);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getCharacter();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query.id]);

	return (
		<Layout title={character.name} description={`Figura de ${character.name}`}>
			{character.name && <Card character={character} />}
			</Layout>
		);
}
