import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
