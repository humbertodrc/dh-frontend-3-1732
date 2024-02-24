import SeriesPage from "@/pages/series";
import {render, screen} from "@testing-library/react";
// Para que pueda funcionar el toBeInTheDocument
import "@testing-library/jest-dom";

// Mock de Next.js useRouter hook
jest.mock("next/router", () => ({
	useRouter: () => ({
		locale: "es",
		asPath: "/",
	}),
}));

describe("Series", () => {
	test("Render Series", () => {
		render(<SeriesPage series={[]} />);

		// Utiliza getAllByText para obtener todos los elementos que coincidan con el texto
		const titles = screen.getAllByText(/Series/i);
		expect(titles.length).toBeGreaterThan(0); // Verifica que al menos haya uno presente
		titles.forEach((title) => {
			expect(title).toBeInTheDocument();
		});
	});
});
