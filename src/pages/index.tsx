import type { NextPage } from 'next';
import Head from 'next/head';
import Home from "./home";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SharersDao | Web3 Sharers Dao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Home></Home>
    </div>
  )
}

export default IndexPage

