import HomePage from "@/pages";
import {render, screen} from "@testing-library/react";
// Para que pueda funcionar el toBeInTheDocument
import "@testing-library/jest-dom";
import {getCharacters} from "@/services/getCharacters";
import {Character } from "@/interface";

// Mock de Next.js useRouter hook
jest.mock("next/router", () => ({
	useRouter: () => ({
		locale: "es",
		asPath: "/",
	}),
}));

// Mock del servicio que trae los caracteres
jest.mock("../src/services/getCharacters.ts", () => ({
	getCharacters: jest.fn(),
}));

describe("Home", () => {
	test('Render Home"', () => {
		render(<HomePage characters={[]} />);

		const title = screen.getByText(/Ecomerce/i);

		expect(title).toBeInTheDocument();
	});

	test('Render characters"', () => {
		const characters: Character[] = [
			{
				tail: "1",
				name: "Mario",
				image:
					"https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png",
				amiiboSeries: "Super Smash Bros.",
				character: "Mario",
				gameSeries: "Super Mario",
				head: "00000000",
				release: {
					au: "2014-11-29",
					eu: "2014-11-28",
					jp: "2014-12-06",
					na: "2014-11-21",
				},
				type: "Figure",
			},
			{
				tail: "2",
				name: "Luigi",
				image:
					"https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-000c0002.png",
				amiiboSeries: "Super Smash Bros.",
				character: "Luigi",
				gameSeries: "Super Mario",
				head: "00010000",
				release: {
					au: "2014-11-29",
					eu: "2014-11-28",
					jp: "2014-12-06",
					na: "2014-11-21",
				},
				type: "Figure",
			},
		];

		(getCharacters as jest.Mock).mockResolvedValue(characters);

		render(<HomePage characters={characters} />);

	});
});
