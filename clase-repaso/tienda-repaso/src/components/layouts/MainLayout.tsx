import React, { FC } from "react";
import { Header } from '../ui/header';
import Head from 'next/head';


export const MainLayout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tienda</title>
        <meta name="description" content="Tienda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Tienda" />
      </Head>
      <Header />
      {children}
    </>
  );
};