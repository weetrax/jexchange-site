import * as React from "react";
import PropTypes from "prop-types";
import { ArrowNarrowUpIcon } from "@heroicons/react/outline";

type RoadmapProps = {
  //
};

const Roadmap: React.FC<RoadmapProps> = () => {
  return (
    <div className="container mx-auto px-3 py-16">
      <div>
        <p className="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl max-w-2xl mx-auto">
          Roadmap
        </p>
        <div className="mt-12 flex flex-col md:grid grid-cols-9 mx-auto">
          <div className="flex flex-row-reverse md:contents">
            <div className="shadow shadow-primary-500/20 border dark:border-dark-600 dark:hover:border-primary-500 hover:border-primary-500 hover:shadow-[0_0_20px_-7px_rgba(0,161,154,1)] transition-all duration-200 ease-in-out col-start-1 col-end-5 p-4 rounded-md my-4 ml-auto w-full">
              <p className="font-semibold text-lg">2022 Q1</p>
              <ul className="list-disc list-inside pl-4">
                <li>Tokenomics implementation (testnet) ✅</li>
                <li>Smart contracts audit ✅</li>
                <li>Deployment on Elrond mainnet ✅</li>
                <li>JEX token public sale ✅</li>
                <li>Reward program (phase 1) ✅</li>
              </ul>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-primary-500 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-500 shadow"></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-primary-500 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-500 shadow"></div>
            </div>
            <div className="shadow shadow-primary-500/20 border dark:border-dark-600 dark:hover:border-primary-500 hover:border-primary-500 hover:shadow-[0_0_20px_-7px_rgba(0,161,154,1)] transition-all duration-200 ease-in-out col-start-6 col-end-10 p-4 rounded-md my-4 mr-auto w-full">
              <p className="font-semibold text-lg">2022 Q2</p>
              <ul className="list-disc list-inside pl-4">
                <li>Integration of other tokens of Elrond ecosystem ✅</li>
                <li>Buy/sell ESDT/NFTs feature ✅</li>
                <li>Reward program (phase 2) ✅</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="shadow shadow-primary-500/20 border dark:border-dark-600 dark:hover:border-primary-500 hover:border-primary-500 hover:shadow-[0_0_20px_-7px_rgba(0,161,154,1)] transition-all duration-200 ease-in-out col-start-1 col-end-5 p-4 rounded-md my-4 ml-auto w-full">
              <p className="font-semibold text-lg">2022 Q3</p>
              <ul className="list-disc list-inside pl-4">
                <li className="line-through">JEX V2 - new types of offer</li>
                <li>UI/UX redesign ✅</li>
              </ul>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-primary-500 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-500 shadow"></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-primary-500 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-500 shadow"></div>
            </div>
            <div className="shadow shadow-primary-500/20 border dark:border-dark-600 dark:hover:border-primary-500 hover:border-primary-500 hover:shadow-[0_0_20px_-7px_rgba(0,161,154,1)] transition-all duration-200 ease-in-out col-start-6 col-end-10 p-4 rounded-md my-4 mr-auto w-full">
              <p className="font-semibold text-lg">2022 Q4</p>
              <ul className="list-disc list-inside pl-4">
                <li className="line-through">DAO creation</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="shadow shadow-primary-500/20 border dark:border-dark-600 dark:hover:border-primary-500 hover:border-primary-500 hover:shadow-[0_0_20px_-7px_rgba(0,161,154,1)] transition-all duration-200 ease-in-out col-start-1 col-end-5 p-4 rounded-md my-4 ml-auto w-full">
              <p className="font-semibold text-lg">2023</p>
              <ul className="list-disc list-inside pl-4">
                <li>Staking V2</li>
                <li>Promote OTC trading</li>
                <li>Mystery feature ???</li>
                <li>Aggregated swaps</li>
                <li>Onboard new projects</li>
                <li>Fidelity (LKJEX)</li>
                <li>
                  <a
                    href="http://bit.ly/3UadpVm"
                    className="font-bold border-b border-primary-500 text-primary-500"
                    target={"_blank"}
                  >
                    more information
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-primary-500 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-500 shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Roadmap.propTypes = {
  //
};

export default Roadmap;
