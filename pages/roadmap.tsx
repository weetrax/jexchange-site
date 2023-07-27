import Head from "next/head";
import Roadmap from "../components/Roadmap";
import type { NextPage } from "next";

const RoadmapPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JEXchange.io - Roadmap</title>
        <meta
          name="description"
          content="Decentralized exchange and DeFi tools built on MultiversX"
        />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Roadmap />
    </div>
  );
};

export default RoadmapPage;
