import React from "react";
import PropTypes from "prop-types";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { useScrollPercentage } from "react-scroll-percentage/dist";

type RoadmapProps = {
  //
};

const Roadmap: React.FC<RoadmapProps> = () => {
  const [ref, percentage] = useScrollPercentage();

  return (
    <div className="container mx-auto px-3 py-16" ref={ref}>
      <div>
        <p className="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl max-w-2xl mx-auto">
          Roadmap
        </p>
        <div className="mt-12 flex flex-col md:grid grid-cols-9 mx-auto dark:text-gray-200">
          <div className="flex flex-row-reverse md:contents">
            <div className="border shadow-sm shadow-primary-500 border-dark-900 hover:border-primary-500 transition-all duration-200 ease-in-out col-start-1 col-end-5 p-4 rounded-md my-4 ml-auto w-full">
              <p className="font-semibold text-lg dark:text-gray-100">
                2022 Q1
              </p>
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
                <div
                  className={`h-full w-1 ${"bg-primary-500"} pointer-events-none`}
                ></div>
              </div>
              <div
                className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full ${"bg-primary-500"} shadow`}
              ></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div
                  style={{ transformOrigin: "top bottom" }}
                  className={`h-full w-1 transition-all duration-500 ease-in-out ${
                    percentage.toPrecision(2) >= "0.37"
                      ? "bg-primary-500"
                      : "bg-gray-200"
                  } pointer-events-none`}
                ></div>
              </div>
              <div
                style={{ transformOrigin: "top bottom" }}
                className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full transition-all duration-500 ease-in-out ${
                  percentage.toPrecision(2) >= "0.37"
                    ? "bg-primary-500"
                    : "bg-gray-200"
                } shadow`}
              ></div>
            </div>
            <div className="border shadow-sm shadow-primary-500 border-dark-900 hover:border-primary-500 transition-all duration-200 ease-in-out col-start-6 col-end-10 p-4 rounded-md my-4 mr-auto w-full">
              <p className="font-semibold text-lg dark:text-gray-100">
                2022 Q2
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>Integration of other tokens of Elrond ecosystem ✅</li>
                <li>Buy/sell ESDT/NFTs feature ✅</li>
                <li>Reward program (phase 2) ✅</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="border shadow-sm shadow-primary-500 border-dark-900 hover:border-primary-500 transition-all duration-200 ease-in-out col-start-1 col-end-5 p-4 rounded-md my-4 ml-auto w-full">
              <p className="font-semibold text-lg dark:text-gray-100">
                2022 Q3
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  <s>JEX V2 - new types of offer</s> (postponed)
                </li>
                <li>UI/UX redesign ✅</li>
              </ul>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div
                  style={{ transformOrigin: "top bottom" }}
                  className={`h-full w-1 transition-all duration-500 ease-in-out ${
                    percentage.toPrecision(2) >= "0.46"
                      ? "bg-primary-500"
                      : "bg-gray-200"
                  } pointer-events-none`}
                ></div>
              </div>
              <div
                style={{ transformOrigin: "top bottom" }}
                className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full transition-all duration-500 ease-in-out ${
                  percentage.toPrecision(2) >= "0.46"
                    ? "bg-primary-500"
                    : "bg-gray-200"
                } shadow`}
              ></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div
                  style={{ transformOrigin: "top bottom" }}
                  className={`h-full w-1 transition-all duration-500 ease-in-out ${
                    percentage.toPrecision(2) >= "0.55"
                      ? "bg-primary-500"
                      : "bg-gray-200"
                  } pointer-events-none`}
                ></div>
              </div>
              <div
                style={{ transformOrigin: "top bottom" }}
                className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full transition-all duration-500 ease-in-out ${
                  percentage.toPrecision(2) >= "0.55"
                    ? "bg-primary-500"
                    : "bg-gray-200"
                } shadow`}
              ></div>{" "}
            </div>
            <div className="border shadow-sm shadow-primary-500 border-dark-900 hover:border-primary-500 transition-all duration-200 ease-in-out col-start-6 col-end-10 p-4 rounded-md my-4 mr-auto w-full">
              <p className="font-semibold text-lg dark:text-gray-100">
                2022 Q4
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  <s>DAO creation</s>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div className="border shadow-sm shadow-primary-500 border-dark-900 hover:border-primary-500 transition-all duration-200 ease-in-out col-start-1 col-end-5 p-4 rounded-md my-4 ml-auto w-full">
              <p className="font-semibold text-lg dark:text-gray-100">
                2023 Q1
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>Staking V2 ✅</li>
                <li>Stable Swap ✅</li>
                <li>Aggregated swaps ✅</li>
              </ul>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div
                  style={{ transformOrigin: "top bottom" }}
                  className={`h-full w-1 transition-all duration-500 ease-in-out ${
                    percentage.toPrecision(2) >= "0.64"
                      ? "bg-primary-500"
                      : "bg-gray-200"
                  } pointer-events-none`}
                ></div>
              </div>
              <div
                style={{ transformOrigin: "top bottom" }}
                className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full transition-all duration-500 ease-in-out ${
                  percentage.toPrecision(2) >= "0.64"
                    ? "bg-primary-500"
                    : "bg-gray-200"
                } shadow`}
              ></div>{" "}
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div
                  style={{ transformOrigin: "top bottom" }}
                  className={`h-full w-1 transition-all duration-500 ease-in-out ${
                    percentage.toPrecision(2) >= "0.7"
                      ? "bg-primary-500"
                      : "bg-gray-200"
                  } pointer-events-none`}
                ></div>
              </div>
              <div
                style={{ transformOrigin: "top bottom" }}
                className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full transition-all duration-500 ease-in-out ${
                  percentage.toPrecision(2) >= "0.7"
                    ? "bg-primary-500"
                    : "bg-gray-200"
                } shadow`}
              ></div>{" "}
            </div>
            <div className="border shadow-sm shadow-primary-500 border-dark-900 hover:border-primary-500 transition-all duration-200 ease-in-out col-start-6 col-end-10 p-4 rounded-md my-4 mr-auto w-full">
              <p className="font-semibold text-lg dark:text-gray-100">
                2023 Q2 - Q4
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>Promote OTC trading</li>
                <li>Onboard new projects</li>
                <li>Fidelity (LKJEX)</li>
                <li>
                  <a
                    href="http://bit.ly/3UadpVm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <b className="text-primary-500 underline">
                      more information
                      <ExternalLinkIcon className="inline ml-2" width={16} />
                    </b>
                  </a>
                </li>
              </ul>
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
