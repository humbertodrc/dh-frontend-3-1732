import "@/styles/globals.css";
import theme from "@/theme";
import {CssBaseline} from "@mui/material";
import {AppCacheProvider} from "@mui/material-nextjs/v13-pagesRouter";
import type {AppProps} from "next/app";
import Head from "next/head";
import {ThemeProvider} from "react-jss";

export default function App({Component, pageProps}: AppProps) {
	return (
		<AppCacheProvider>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</AppCacheProvider>
	);
}
