import Head from "next/head";

interface LayoutProps {
  title: string;
  description: string;
  keywoards?: string;
  children: React.ReactNode;
}


export default function LayoutLogin({children, title, description, keywoards}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || "Ecomerce DH"}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywoards} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/next.svg" type="image/x-icon" />
      </Head>
      <main className="flex justify-center items-center h-screen">
        {children}
      </main>
    </>
  )
}