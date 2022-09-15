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
          content="A P2P decentralized exchange built on Elrond"
        />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Tokenomics />
    </div>
  );
};

export default TokenomicsPage;
