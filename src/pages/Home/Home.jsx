import React from "react";
import Banner from "../../components/Banner/Banner";
import Trending from "../../components/Trending/Trending";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Trending data={data}></Trending>
    </div>
  );
};

export default Home;
