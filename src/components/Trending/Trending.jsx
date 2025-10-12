import React from "react";
import { trendingAppSorter } from "../../utilities/trendingAppSorter";
import AppBlock from "../AppBlock/AppBlock";

const Trending = ({ data }) => {
  const apps = trendingAppSorter(data);
  console.log(apps);
  return (
    <div className="mt-20 flex flex-col gap-8 mb-20">
      <div>
        <h1 className="text-[#001931] text-5xl font-bold text-center mb-4">
          Trending Apps
        </h1>
        <p className="text-[#627382] text-xl text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="max-w-[1440px] grid grid-cols-2 md:grid-cols-4 mx-auto gap-5">
        {apps.map((app) => (
          <AppBlock app={app}></AppBlock>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Trending;
