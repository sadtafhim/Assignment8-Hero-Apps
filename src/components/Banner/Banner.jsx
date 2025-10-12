import React from "react";
import { Link, NavLink } from "react-router";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import banner from "../../assets/hero.png";
const Banner = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3 mt-20">
        <h1 className="text-[#001931] font-bold text-7xl">WE Build</h1>
        <h1 className="text-[#001931] font-bold text-7xl">
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-black">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
        </p>
        <p className="text-[#627382]">
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="flex gap-2">
          <Link>
            <button className="btn bg-white font-semibold text-xl">
              <FaGooglePlay />
              Google Play
            </button>
          </Link>
          <Link>
            <button className="btn bg-white font-semibold text-xl">
              <FaAppStoreIos />
              App Store
            </button>
          </Link>
        </div>
      </div>
      <img className="hidden md:block mx-auto mt-5" src={banner} alt="" />
      <div className="h-[410px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-center gap-10">
        <h2 className="text-center font-bold text-5xl text-white">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex text-white justify-around">
          <div>
            <p className="text-center">Total Downloads</p>
            <h1 className="text-center font-extrabold my-4 text-6xl">29.6M</h1>
            <p className="text-center">21% more than last month</p>
          </div>
          <div>
            <p className="text-center">Total Reviews</p>
            <h1 className="text-center font-extrabold my-4 text-6xl">906K</h1>
            <p className="text-center">46% more than last month</p>
          </div>
          <div>
            <p className="text-center">Active Apps</p>
            <h1 className="text-center font-extrabold my-4 text-6xl">132+</h1>
            <p className="text-center">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
