import React from "react";
import error from "../../assets/App-Error.png";

import { Link } from "react-router";

const AppErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20 mb-20">
        <div className="mt-12 mb-4">
          <img className="mx-auto" src={error} alt="" />
          <h1 className="text-center text-5xl font-semibold text-[#001931] mt-10 mb-3">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="text-center text-[#627382] text-xl">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
        </div>
        <Link to="/Apps">
          <button className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            Go Back!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppErrorPage;
