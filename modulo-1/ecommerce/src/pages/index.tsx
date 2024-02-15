import Image from "next/image";
import {Raleway} from "next/font/google";
import {useEffect, useState} from "react";
import {Character} from "@/interface";
import Link from "next/link";

const raleway = Raleway({subsets: ["latin"]});

export default function HomePage() {
	const [character, setCharacter] = useState<Character[]>([]);

	const getCharacter = async () => {
		const response = await fetch("https://amiiboapi.com/api/amiibo/");
		const data = await response.json();
		return data.amiibo.slice(0, 20);
	};

	useEffect(() => {
		getCharacter().then((data) => setCharacter(data));
	}, []);

	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${raleway.className}`}
    >
			<h1 className="text-2xl font-bold">Ecomerce</h1>
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0">
				{character.map((item) => (
					<div key={item.tail} className="col-span-1 border border-gray-700 p-2 rounded-xl">
            <p>{item.name}</p>
            <Image
              src={item.image}
              alt={item.name}
              width={200}
							height={200}
							priority
							className="aspect-square object-contain"
						/>
						<Link className="underline text-gray-600" href={`/character/${item.tail}`}>
							Ver más
						</Link>
					</div>
				))}
			</section>
		</main>
	);
}