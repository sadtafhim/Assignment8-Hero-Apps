import React from "react";
import error from "../../assets/error-404.png";
import { Link } from "react-router";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col justify-center items-center mt-20 mb-20">
        <div className="mt-12 mb-4">
          <img className="mx-auto" src={error} alt="" />
          <h1 className="text-center text-5xl font-semibold text-[#001931] mt-10 mb-3">
            Oops, page not found!
          </h1>
          <p className="text-center text-[#627382] text-xl">
            The page you are looking for is not available.
          </p>
        </div>
        <Link to="/">
          <button className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            Go Back!
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
