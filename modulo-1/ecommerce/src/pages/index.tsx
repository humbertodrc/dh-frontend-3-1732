import Image from "next/image";
import {Raleway} from "next/font/google";
import {useEffect, useState} from "react";
import {Character} from "@/interface";

const raleway = Raleway({subsets: ["latin"]});

export default function Home() {
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
			<h1>Ecomerce</h1>
			<section className="grid grid-cols-4 gap-7 mt-6 rounded-[10px]">
				{character.map((item) => (
					<div key={item.tail} className="col-span-1">
            <p>{item.name}</p>
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
            />
					</div>
				))}
			</section>
		</main>
	);
}