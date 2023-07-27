import Head from "next/head";
import Tokenomics from "../components/Tokenomics";
import type { NextPage } from "next";

const TokenomicsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JEXchange.io - Tokenomics</title>
        <meta
          name="description"
          content="Decentralized exchange and DeFi tools built on MultiversX"
        />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Tokenomics />
    </div>
  );
};

export default TokenomicsPage;
