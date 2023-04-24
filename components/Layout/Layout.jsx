import React from 'react'
import Head from 'next/head';
import { Footer } from '../Footer/Footer';
export const Layout = ({children}) => {
  return (
    <>
    <Head>
      <title>Rick and Morty Character Info</title>
      <meta name="description" content="Find information on your favorite characters from the series" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
    <Footer/>
    </>
  );
}
