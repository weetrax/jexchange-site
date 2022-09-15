import Contact from "../components/Contact";
import Head from "next/head";
import type { NextPage } from "next";

const FAQPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JEXchange.io - Contact us</title>
        <meta
          name="description"
          content="A P2P decentralized exchange built on Elrond"
        />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Contact />
    </div>
  );
};

export default FAQPage;
