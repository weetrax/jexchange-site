import PropTypes from "prop-types";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";

type FAQProps = {
  //
};

type FAQType = {
  question: string;
  answer: JSX.Element;
};

const questions: FAQType[] = [
  {
    question: "Do I need to wrap EGLD ?",
    answer: (
      <div>
        <p>Yes, you need to wrap you EGLD before doing any swap on the JEX.</p>
        <p>
          This can be done on the JEX in the wallet (top right, where it
          displays your EGLD value) or, if you prefer, on the Maiar DEX.
        </p>
        <p className="mt-4">
          Trading directly with EGLD, via automatic wrapping, will be
          implemented in the future.
        </p>
      </div>
    ),
  },
  {
    question: "Why do I have to wrap EGLD to trade ?",
    answer: (
      <div>
        <p>
          Because wEGLD is an EDST (Elrond Digital Standard Token) and JEX is an
          ESDT trading platform.
        </p>
        <p>
          You cannot trade EGLD directly, it must be wrapped in wEGLD just like
          on Maiar DEX. Except it is automatic on Maiar DEX (1 transaction for
          wrapping and 1 for swapping).
        </p>
        <p className="mt-4">
          Trading directly with EGLD, via automatic wrapping, will be
          implemented in the future.
        </p>
      </div>
    ),
  },
  {
    question: "When are you listing on the Maiar DEX ?",
    answer: (
      <div>
        <p>
          This isn’t currently in the roadmap. The team is concentrating on
          launching all functionality of the JEX and working to the roadmap in
          the litepaper.
        </p>
      </div>
    ),
  },
  {
    question: "I can't see my see my offer in Search Offers ?",
    answer: (
      <div>
        <p>
          This is as per design. You can only see your offers in the “My Offers”
          tab. Rest assured your offer is visible to all other users in the
          “Search Offers” tab.
        </p>
      </div>
    ),
  },
  {
    question: "Why can't I see my $JEX (and other tokens) in the Maiar app ?",
    answer: (
      <div>
        <p>
          Maiar app only displays a limited number of tokens at present (EGLD,
          MEX, USDC, BNB, ETH, BTC {`&`} RIDE). No other tokens can be viewed on
          the app.
        </p>
        <p>
          You can see your balance of these tokens in the JEX, in the MultiversX
          web wallet or on the MultiversX explorer.
        </p>
      </div>
    ),
  },
  {
    question:
      "My offer disappeared and I don't see a transaction on explorer with the tokens being transferred ?",
    answer: (
      <div>
        <p>
          Please refresh the {'"'}My Offers{'"'} page to see if your offer is
          there. If not reconnect + refresh to see if your offer is there.
        </p>
        <p>
          Failing that you may visit the blockchain explorer to find the
          transaction and see if it has been filled.
        </p>
      </div>
    ),
  },
  {
    question: "Are there any slippage fees for buying/selling ?",
    answer: (
      <div>
        <p>
          There{"'"}s a fixed fee for trades. This fee can be seen just above
          the submit button when creating a sell offer or by clicking the i when
          viewing an offer to buy.
        </p>
      </div>
    ),
  },
  {
    question:
      "I have a suggestion for how the JEX can be improved. How should I make this suggestion ?",
    answer: (
      <div>
        <p>
          Firstly, have a look in the #👷-todo channel on{" "}
          <a
            className="text-primary-500"
            rel="noreferrer"
            target={"_blank"}
            href="https://discord.gg/CuthPz9uxv"
          >
            {" "}
            Discord{" "}
          </a>{" "}
          to see if it{"'"}s already on the list improvements the team is taking
          care of.{" "}
        </p>
        <p>
          If not, pop along to the 💡-suggestions channel, have a quick read to
          see if your suggestion is already made. If not, document it there and
          the team will have a look.
        </p>
      </div>
    ),
  },
  {
    question: "I have a problem not covered by these FAQs. What can I do ?",
    answer: (
      <div>
        <p>
          Report your issue in the 📞-support channel on{" "}
          <a
            className="text-primary-500"
            rel="noreferrer"
            target={"_blank"}
            href="https://discord.gg/CuthPz9uxv"
          >
            {" "}
            Discord{" "}
          </a>{" "}
          and someone will have a look. Try to detail as much useful information
          as possible such as; summary of what happened, what you were doing
          (buying or selling), can the issue be repeated, etc.
        </p>
      </div>
    ),
  },
  {
    question:
      "My offer disappeared and I don't see a transaction on explorer with the tokens being transferred ?",
    answer: (
      <div>
        <p>
          Some user had display bug in the {'"'}My offer{'"'} section. Please
          try the following troubleshooting steps:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>Refresh your browser</li>
          <li>Disconnect and reconnect to JEXchange</li>
          <li>Verify if transaction goes through on the Blockchain Explorer</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Where are LKMEX fees ?",
    answer: (
      <div>
        <p>
          LKMEX colledted fees are staked on Maiar Exchange during the
          accumulation period. You can check at any time the balance of LKMEX
          and LKFARM (staked LKMEX) tokens using our partner{"'"}s tool{" "}
        </p>
        <p className="break-words">
          WalletFP :{" "}
          <a
            target={"_blank"}
            rel="noreferrer"
            className="text-primary-500"
            href="https://walletfp.com/esdt/?address=erd1272et87h3sa7hlg5keuswh50guz2ngmd6lhmjxkwwu0ah6gdds5qhka964"
          >
            https://walletfp.com/esdt/?address=erd1272et87h3sa7hlg5keuswh50guz2ngmd6lhmjxkwwu0ah6gdds5qhka964
          </a>
        </p>
      </div>
    ),
  },
  {
    question: "What was the price of the $JEX at launch ?",
    answer: (
      <div>
        <p>There were 4 launch phases:</p>
        <ul className="list-disc list-inside pl-4">
          <li>10 million JEX at $0.004</li>
          <li>20 million JEX at $0.0065</li>
          <li>50 million JEX at $0.0075</li>
          <li>100 million JEX at $0.0095</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How many offer can I create ?",
    answer: (
      <div>
        <p>Free plan: you can have 3 open offers at the same time</p>
        <p>Then you must pay 50 $JEX for each extra offer</p>
        <ul className="list-disc list-inside pl-4">
          <li>4th offer: 50 JEX</li>
          <li>5th offer: 100 JEX</li>
          <li>6th offer: 150 JEX</li>
          <li>7th offer: 200 JEX</li>
          <li>8th offer: 250 JEX</li>
          <li>...th offer: 250 JEX</li>
        </ul>
      </div>
    ),
  },
];

const FAQ: React.FC<FAQProps> = () => {
  return (
    <div className="container mx-auto px-3 py-16">
      <div>
        <p className="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl max-w-2xl mx-auto">
          FAQ
        </p>
        <div className="py-8 max-w-4xl mx-auto flex flex-col gap-4">
          {questions.map((question, questionIndex) => {
            return (
              <Disclosure key={questionIndex} defaultOpen={false}>
                {({ open }) => (
                  <div>
                    <Disclosure.Button
                      className={`flex justify-between w-full px-4 py-2 font-medium text-left bg-white dark:bg-dark-600 ${
                        open &&
                        "rounded-b-none bg-gray-200/50 dark:bg-dark-700 border-b dark:border-dark-500"
                      } rounded-lg hover:bg-gray-200/50 dark:hover:bg-dark-700 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75`}
                    >
                      <span className="w-11/12">{question.question}</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel
                      className={`px-2 pt-4 pb-2 bg-white ${
                        open && "rounded-b-lg bg-gray-200/50 dark:bg-dark-700"
                      }`}
                    >
                      {question.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            );
          })}
        </div>
        <div className="flex gap-4 justify-center">
          <a
            rel="noreferrer"
            target={"_blank"}
            className="flex items-center px-3 py-2 border border-dark-100 dark:border-dark-400 rounded text-base transition-colors duration-200 ease-in-out hover:border-primary-500 dark:hover:border-primary-500"
            href="https://medium.com/@jexchangep2p/jex-litepaper-b5d48e69b084"
          >
            LITEPAPER (EN)
          </a>
          <a
            rel="noreferrer"
            target={"_blank"}
            className="flex items-center px-3 py-2 border border-dark-100 dark:border-dark-400 rounded text-base transition-colors duration-200 ease-in-out hover:border-primary-500 dark:hover:border-primary-500"
            href="https://medium.com/@jexchangep2p/jex-litepaper-11c5a168d1dc"
          >
            LITEPAPER (FR)
          </a>
        </div>
      </div>
    </div>
  );
};

FAQ.propTypes = {
  //
};

export default FAQ;
