import React from "react";
import { useLoaderData } from "react-router";
import AppBlock from "../../components/AppBlock/AppBlock";
const Apps = () => {
  const appData = useLoaderData();
  return (
    <div>
      <div className="mt-20 mb-10">
        <h1 className="text-[#001931] text-5xl font-bold text-center mb-4 m">
          Our All Applications
        </h1>
        <p className="text-[#627382] text-xl text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between max-w-[1440px] mx-auto mb-4">
        <h1 className="text-[#001931] font-semibold text-2xl">
          ({appData.length}) Apps Found
        </h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="max-w-[1440px] grid grid-cols-2 md:grid-cols-4 mx-auto gap-5 mb-20">
        {appData.map((app) => (
          <AppBlock key={app.id} app={app}></AppBlock>
        ))}
      </div>
      ;
    </div>
  );
};

export default Apps;
