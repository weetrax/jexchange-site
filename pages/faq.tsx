import FAQ from "../components/FAQ";
import Head from "next/head";
import type { NextPage } from "next";

const FAQPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JEXchange.io - FAQ</title>
        <meta
          name="description"
          content="A P2P decentralized exchange built on MultiversX"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FAQ />
    </div>
  );
};

export default FAQPage;
