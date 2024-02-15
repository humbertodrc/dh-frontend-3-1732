import {Character} from "@/interface";
import Image from "next/image";

interface CardProps {
	character: Character;
}

export default function Card({character}: CardProps) {
	return (
		<div className="max-w-xs rounded overflow-hidden shadow-lg">
			<Image
				className="w-full"
				src={character.image}
				alt={character.name}
				width={180}
				height={250}
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{character.name}</div>
				<p className="text-gray-700 text-base">
					<strong>Character:</strong> {character.character}
				</p>
				<p className="text-gray-700 text-base">
					<strong>Amiibo Series:</strong> {character.amiiboSeries}
				</p>
				<p className="text-gray-700 text-base">
					<strong>Game Series:</strong> {character.gameSeries}
				</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					Type: {character.type}
				</span>
			</div>
		</div>
	);
}
