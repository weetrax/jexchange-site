import ArrowDown from "../components/_Layout/SVGIcons/ArrowDown";
import classNames from "classnames";
import Container from "../components/_Layout/Container";
import Head from "next/head";
import Stats from "../components/Stats";
import { esdt, sortedEsdt } from "../esdt";
import { Token } from "../types";
import { useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [text] = useTypewriter({
    words: esdt.map((x) => x.name),
    loop: 0,
    typeSpeed: 90,
    deleteSpeed: 60,
    delaySpeed: 1200,
  });

  const [tokens, setTokens] = useState<Token[]>([]);
  const [loaded, setLoaded] = useState<boolean[]>([]);

  // Fonction pour marquer une image comme chargée après le délai aléatoire
  const randomDelay = () => Math.random() * 1800;
  const markImageAsLoaded = (index: number) => {
    setTimeout(() => {
      setLoaded((prevLoaded) => {
        const newLoaded = [...prevLoaded];
        newLoaded[index] = true;
        return newLoaded;
      });
    }, randomDelay());
  };

  useEffect(() => {
    const _tokens = sortedEsdt();
    _tokens.forEach((token, index) => {
      const img = new Image();
      img.onload = () => markImageAsLoaded(index);
      img.src = token.imgUrl;
    });
    setTokens(_tokens);
  }, []);

  return (
    <div>
      <Head>
        <title>JEXchange.io</title>
        <meta
          name="description"
          content="Decentralized exchange and DeFi tools built on MultiversX"
        />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Container>
        <div className="fadein-item my-8 min-h-screen-nav flex items-center justify-center md:justify-start relative">
          <div className="text-center md:text-left z-10">
            <h1
              style={{
                textShadow: "0 0 40px rgba(192, 219, 255, 0.3)",
              }}
              className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight"
            >
              <strong>
                <span className="text-primary-500">JEX</span>CHANGE.IO
              </strong>
            </h1>
            <h2 className="tracking-tight text-xl">
              Decentralized exchange and DeFi tools built on MultiversX
            </h2>
            <h3 className="text-lg mt-12">
              Start trading your{" "}
              <span className="text-primary-500 font-semibold">
                {text}
                <CursorBlink />
              </span>{" "}
              now !
            </h3>
            <div className="mt-4 flex justify-center md:justify-start gap-2">
              <a
                rel="noreferrer"
                target="_blank"
                className="flex items-center px-3 py-2 text-white bg-primary-500 border border-primary-500 hover:bg-primary-400 rounded text-base transition-colors duration-200 ease-in-out hover:border-primary-500"
                href="https://app.jexchange.io/"
              >
                APP
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="flex items-center px-3 py-2 border border-dark-100 dark:border-dark-400 rounded text-base transition-colors duration-200 ease-in-out hover:border-primary-500 dark:hover:border-primary-500"
                href="https://medium.com/@JEXchangeDefi/jex-litepaper-b5d48e69b084"
              >
                LITEPAPER (EN)
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="flex items-center px-3 py-2 border border-dark-100 dark:border-dark-400 rounded text-base transition-all duration-200 ease-in-out hover:border-primary-500 dark:hover:border-primary-500"
                href="https://medium.com/@JEXchangeDefi/jex-litepaper-11c5a168d1dc"
              >
                LITEPAPER (FR)
              </a>
            </div>
          </div>
          <div className="absolute w-full">
            <div className="esdt-gallery">
              <div
                className="grid gap-4 justify-center"
                style={{
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gridTemplateRows: "1fr 1fr 1fr",
                }}
              >
                {tokens?.map((x, i) => {
                  return (
                    <a
                      key={i}
                      rel="noreferrer"
                      target={"_blank"}
                      href={`https://app.jexchange.io/trade?token_a=${x.identifier}&token_b=WEGLD-bd4d79`}
                      className={classNames(
                        "hover:shadow-[0_0_20px_-7px_rgba(0,161,154,1)] pointer-events-none md:pointer-events-auto min-w-[100px] rounded border dark:border dark:border-dark-600 hover:border-primary-500 dark:hover:border-primary-500 duration-200 transition-all ease-in-out",
                        !loaded[i] ? "opacity-0" : "opacity-100 fadein-item"
                      )}
                    >
                      <div className="flex flex-col text-center">
                        <div className="p-1">
                          <img
                            className="mx-auto w-24 h-24 md:h-32 md:w-32 object-cover rounded-full"
                            src={x.imgUrl}
                          ></img>
                        </div>
                        <div className="bg-gray-200 dark:bg-dark-600 px-3 py-2">
                          {x.name}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="text-center fill-dark-400">
        <ArrowDown />
      </div>
      <div className="py-16 text-center px-8">
        <Stats />
      </div>
      <div className="text-center fill-dark-400">
        <ArrowDown />
      </div>
      <Container>
        <div className="py-16">
          <div className="text-center">
            <p className="text-primary-500 mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              All-in-one Platform
            </p>
            <p className="mt-4 max-w-2xl text-xl mx-auto">
              <strong className="text-primary-500 font-bold text-xl">
                JEX
              </strong>{" "}
              aims at being a decentralized exchange that allows safe exchange
              of MultiversX ecosystem tokens between users.
            </p>
          </div>
          <div className="mt-10">
            <dl className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="flex gap-4 group">
                <img
                  className="h-28 w-28 group-hover:-translate-y-3 transition-transform duration-200 ease-in-out"
                  src="/assets/img/trade.png"
                ></img>
                <div>
                  <p className="text-lg leading-6 font-semibold">Trade</p>
                  <div className="mt-2 text-base">
                    Buy &amp; sell a large range of{" "}
                    <span className="font-bold">ESDT</span> (Elrond Standard
                    Digital Token) tokens through a our secure smart contract.
                  </div>
                </div>
              </div>
              <div className="flex gap-4 group">
                <img
                  className="h-28 w-28 group-hover:-translate-y-3 transition-transform duration-200 ease-in-out"
                  src="/assets/img/earn.png"
                ></img>
                <div>
                  <p className="text-lg leading-6 font-semibold">Earn</p>
                  <div className="mt-2 text-base">
                    Generate yield and earn up to 100+ assets at the same time
                    by staking <span className="font-bold">$JEX</span>.
                  </div>
                </div>
              </div>
              <div className="flex gap-4 group">
                <img
                  className="h-28 w-28 group-hover:-translate-y-3 transition-transform duration-200 ease-in-out"
                  src="/assets/img/flash.png"
                ></img>
                <div>
                  <p className="text-lg leading-6 font-semibold">Governance</p>
                  <div className="mt-2 text-base">
                    Decide the path for the future of financial services using
                    the <span className="font-bold">$JEX</span> governance
                    token.
                  </div>
                </div>
              </div>
              <div className="flex gap-4 group">
                <img
                  className="h-28 w-28 group-hover:-translate-y-3 transition-transform duration-200 ease-in-out"
                  src="/assets/img/launchpad.png"
                ></img>
                <div>
                  <p className="text-lg leading-6 font-semibold">Launchpad</p>
                  <div className="mt-2 text-base">
                    JEX Launchpad allows you to{" "}
                    <span className="font-bold">participate</span> in
                    early-stage projects and in their{" "}
                    <span className="font-bold">public sales</span> rounds.
                  </div>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </div>
  );
};

const CursorBlink = () => {
  return (
    <>
      <style jsx>{`
        @keyframes blink {
          from,
          to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .cursor {
          animation: blink 1s linear infinite forwards;
        }
      `}</style>
      <span className="cursor blink">|</span>
    </>
  );
};

export default Home;
