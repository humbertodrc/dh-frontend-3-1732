import Head from "next/head";
import { Navbar } from "../common/Navbar";

interface LayoutProps {
  title: string;
  description: string;
  keywoards?: string;
  children: React.ReactNode;
}


export default function Layout({children, title, description, keywoards}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || "Ecomerce DH"}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywoards} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/next.svg" type="image/x-icon" />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}