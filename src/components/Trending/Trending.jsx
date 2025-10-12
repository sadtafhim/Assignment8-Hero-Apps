import React from "react";
import { trendingAppSorter } from "../../utilities/trendingAppSorter";
import AppBlock from "../AppBlock/AppBlock";

const Trending = ({ data }) => {
  const apps = trendingAppSorter(data);
  console.log(apps);
  return (
    <div>
      <div>
        <h1>Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div>
        {apps.map((app) => (
          <AppBlock app={app}></AppBlock>
        ))}
      </div>
    </div>
  );
};

export default Trending;
