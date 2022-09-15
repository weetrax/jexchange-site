import PropTypes from "prop-types";
import React from "react";

type ContactProps = {
  //
};

const Contact: React.FC<ContactProps> = () => {
  return (
    <div id="contact" className="container mx-auto px-3 py-16">
      <div className="text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl max-w-2xl mx-auto">
          Want to list your <span className="text-primary-500">token</span>,
          launch your <span className="text-primary-500">IDO</span> or become a
          JEX <span className="text-primary-500">partner</span> ?
        </p>
        <div className="pt-8">
          <a
            rel="noreferrer"
            target={"_blank"}
            className="px-3 py-2 text-white bg-primary-500 border border-primary-500 hover:bg-primary-400 rounded text-lg transition-all duration-200 ease-in-out hover:border-primary-500"
            href="https://docs.google.com/forms/d/12iFKlN0XztRGmay49ubtzpPRGEpd_juHkmEOQP1D56c/"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  //
};

export default Contact;
