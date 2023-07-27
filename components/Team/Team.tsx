import isEmpty from "is-empty";
import PropTypes from "prop-types";
import React from "react";
import SVGJavier from "./SVGJavier";
import SVGJulien from "./SVGJulien";
import SVGPierre from "./SVGPierre";

type TeamProps = {
  //
};

type TeamMember = {
  username: string;
  role: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  svg?: any;
};

const teamMembers: TeamMember[] = [
  {
    username: "Javier",
    role: "Founder & Senior Full Stack Developper",
    twitterUrl: "https://twitter.com/JavierNFT",
    svg: SVGJavier,
  },
  {
    username: "Pierre",
    role: "Graphic Designer & Statistician",
    twitterUrl: "https://twitter.com/pierre101099",
    svg: SVGPierre,
  },
  {
    username: "Julien",
    role: "Community Manager",
    twitterUrl: "https://twitter.com/StradiJulius",
    svg: SVGJulien,
  },
];

const Team: React.FC<TeamProps> = () => {
  return (
    <div className="container mx-auto px-3 py-16">
      <div className="text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl max-w-2xl mx-auto">
          Meet our team
        </p>
        <p className="pt-8 w-2/3 mx-auto">
          Gathered around MultiversX (previously Elrond) technology as a common
          interest, we shared our ideas and our vision to identify the needs of
          the community. From there we decided to use our skills and resources
          to imagine an innovative solution to remedy this problem and fit the
          needs of users of MultiversX blockchain.
        </p>
        <ul
          role="list"
          className="py-8 mx-auto space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
        >
          {teamMembers.map((teamMember) => {
            return (
              <li
                key={teamMember.username}
                className="p-6 shadow shadow-primary-500/20 border dark:border-dark-600 dark:hover:border-primary-500 hover:border-primary-500 hover:shadow-[0_0_20px_-7px_rgba(0,161,154,1)] transition-all duration-200 ease-in-out rounded-lg xl:px-10 xl:text-left"
              >
                <div className="space-y-6 xl:space-y-10">
                  <div className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56">
                    {<teamMember.svg />}
                  </div>
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="">{teamMember.username}</h3>
                      <p className="text-primary-500 w-full mx-auto lg:mx-0 xl:w-3/4">
                        {teamMember.role}
                      </p>
                    </div>

                    <ul role="list" className="flex justify-center space-x-5">
                      <li>
                        <a
                          href={teamMember.twitterUrl}
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      {teamMember.linkedinUrl &&
                        !isEmpty(teamMember.linkedinUrl) && (
                          <li>
                            <a
                              href={teamMember.linkedinUrl}
                              className="text-gray-400 hover:text-gray-300"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        )}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Team.propTypes = {
  //
};

export default Team;
