import React from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import PropTypes from "prop-types";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type TokenomicsProps = {
  //
};

const data = {
  plugins: [ChartDataLabels],
  labels: ["Team", "Sales", "Marketing", "Dynamic Distribution"],
  datasets: [
    {
      data: [100000000, 200000000, 300000000, 400000000],
      backgroundColor: ["#cceceb", "#66c7c2", "#00a19a", "#00615c"],
      hoverBackgroundColor: ["#99d9d7", "#33b4ae", "#00817b", "#00403e"],
      borderWidth: 2,
      color: "white",
    },
  ],
};

const Tokenomics: React.FC<TokenomicsProps> = () => {
  return (
    <div id="contact" className="container mx-auto px-3 py-16">
      <div>
        <div className="text-center">
          <p className="my-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl max-w-2xl mx-auto">
            <span className="text-primary-500">JEX</span> Tokenomics
          </p>
          <p>
            The total supply of <span className="text-primary-500">$JEX</span>{" "}
            token is <span className="font-bold">1,000,000,000</span>.
          </p>
        </div>
        <div className="py-8">
          <div className="w-1/2 md:w-1/3 mx-auto">
            <Doughnut datasetIdKey="tokenomics" data={data} />
          </div>
        </div>
        <div>
          <div className="shadow overflow-auto border-b border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-dark-200">
              <thead className="bg-gray-200 dark:bg-dark-600">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Allocation
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    %
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Nb tokens
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Cliff&#42;
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-200 bg-white dark:bg-dark-600/50 text-left">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    Dynamic Distribution
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">40</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    400,000,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    Marketing
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    300,000,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    Sales
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">20</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    200,000,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    Team
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    100,000,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    6 months&#42;&#42;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="pt-8 pb-16 flex flex-col gap-4">
          <p>
            &#42; cliff : during this period, tokens are locked and cannot be
            claimed, staked, exchanged or sold.
          </p>
          <p>
            &#42;&#42; the tokens allocated to the team will be locked in a
            smart contract that will prevent any claim before the end of the
            lock-up period (6 month after the launch on MultiversX mainnet).
          </p>
          <p>
            The official JEX token identifier on MultiversX blockchain is:{" "}
            <span className="text-primary-500 font-bold">JEX-9040ca</span>
          </p>
          <p>
            The details and attributes of the token are available on the
            official MultiversX explorer:{" "}
            <a
              className="text-primary-500"
              href="https://explorer.multiversx.com/tokens/JEX-9040ca"
              rel="noreferrer"
              target={"_blank"}
            >
              https://explorer.multiversx.com/tokens/JEX-9040ca
            </a>
          </p>
        </div>
        <div className="mb-8">
          <p className="text-xl font-extrabold">Dynamic distribution</p>
          <div className="py-4 flex flex-col gap-4">
            <p>
              40% of the supply will be distributed through a dynamic
              distribution process managed by the smart contract each time an
              offer <span className="font-semibold">is paid with wEGLD.</span>
            </p>
            <p>
              A fraction of these JEX will be sent to the buyer and the seller
              in equal parts.
            </p>
            <p>
              The amount of distributed tokens during each exchange will depend
              on the amount of remaining JEX tokens allocated to this reward
              program and the amount of exchanged wEGLD :
            </p>
            <img className="max-w-xl" src="/assets/img/tokenomics.png" />
            <ul className="list-disc list-inside">
              <li>
                nbJEX : distributed amount of JEX tokens (50% for buyer, 50% for
                seller)
              </li>
              <li>
                disrib_balJEX : amount of remaining JEX tokens to be distributed
              </li>
              <li>nbwEGLD : payment amount in wEGLD</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">Example:</p>
          <div className="py-4 flex flex-col gap-4">
            <p>
              100,000,000 JEX remain in the distribution balance. Alice spends
              1,5 wEGLD to fill Bob’s offer.
            </p>
            <p className="leading-5 py-2">
              nbJEX = 100,000,000 x √1.5 x 10–6
              <br />
              nbJEX = 122.47
            </p>
            <p className="leading-5">
              50 % allocated to Alice
              <br />
              50 % allocated to Bob
              <br />
              (61.23 JEX each)
            </p>
            <ul className="list-disc list-inside">
              <li>
                nbJEX : distributed amount of JEX tokens (50% for buyer, 50% for
                seller)
              </li>
              <li>disrib_balJEX : 100,000,000</li>
              <li>nbwEGLD : 1.5</li>
            </ul>
            <p>The distribution will follow this curve:</p>
            <img className="max-w-xl" src="/assets/img/tokenomics_curve.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

Tokenomics.propTypes = {
  //
};

export default Tokenomics;
