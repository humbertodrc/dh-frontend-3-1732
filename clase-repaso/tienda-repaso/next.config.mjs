/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fakestoreapi.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	i18n:{
		locales: ['es-ES', 'pt-BR', 'en-US'],
		defaultLocale: 'es-ES'
	}
};

export default nextConfig;
