import {Layout} from "@/components/layouts";
import {Serie} from "@/interface";
import {getSeries} from "@/services/getSeries";
import {GetServerSideProps, NextPage} from "next";

interface SeriesPageProps {
	series: Serie[];
}

const SeriesPage: NextPage<SeriesPageProps> = ({series}) => {
	return (
		<Layout title="Series" description="Listado de series de amiibo">
			<main>
				<h1 className="text-3xl font-bold my-6">Series</h1>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{series.map((serie) => (
						<div key={serie.key} className="bg-slate-950/45 rounded-lg shadow-md p-4">
							<h2 className="text-lg font-semibold mb-2">{serie.name}</h2>
						</div>
					))}
				</div>
			</main>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const series = await getSeries();
  
  // Esta cabecera permite que la página se cachee en el CDN por 60 segundos
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");

	return {
		props: {
			series,
		},
	};
};

export default SeriesPage;
