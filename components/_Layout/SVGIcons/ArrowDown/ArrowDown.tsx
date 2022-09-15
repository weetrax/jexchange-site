import * as React from "react";
import PropTypes from "prop-types";

type ArrowDownProps = {
  //
};

const ArrowDown: React.FC<ArrowDownProps> = () => {
  return (
    <svg
      width="16"
      height="49"
      viewBox="0 0 16 49"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto featured-page-header-arrow relative"
    >
      <path
        opacity="0.5"
        d="M7.2929 48.7071C7.68342 49.0976 8.31658 49.0976 8.70711 48.7071L15.0711 42.3431C15.4616 41.9526 15.4616 41.3195 15.0711 40.9289C14.6805 40.5384 14.0474 40.5384 13.6569 40.9289L8 46.5858L2.34315 40.9289C1.95262 40.5384 1.31946 40.5384 0.928934 40.9289C0.53841 41.3195 0.53841 41.9526 0.928934 42.3431L7.2929 48.7071ZM7 4.37114e-08L7 48L9 48L9 -4.37114e-08L7 4.37114e-08Z"
      ></path>
    </svg>
  );
};

ArrowDown.propTypes = {
  //
};

export default ArrowDown;
