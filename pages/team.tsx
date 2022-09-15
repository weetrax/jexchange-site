import Head from "next/head";
import Team from "../components/Team";
import type { NextPage } from "next";

const FAQPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JEXchange.io - Our team</title>
        <meta
          name="description"
          content="A P2P decentralized exchange built on Elrond"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Team />
    </div>
  );
};

export default FAQPage;
