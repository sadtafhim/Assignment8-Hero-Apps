import React, { useState, useEffect, lazy } from "react";
import { getInstalledApps } from "../../utilities/addToDB";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Circles } from "react-loader-spinner";

const AppCard = lazy(() => import("../../components/AppCard/AppCard"));

const Installation = () => {
  const [database, setDatabase] = useState([]);
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    fetch("appData.json")
      .then((res) => res.json())
      .then((data) => {
        setAppData(data);
      });
  }, []);

  useEffect(() => {
    const datas = getInstalledApps();
    const newData = appData.filter((app) => datas.includes(app.id));
    setDatabase(newData);
  }, [appData]);

  const handleRemove = (id) => {
    setDatabase((prev) => prev.filter((app) => app.id !== id));
  };

  const sorterFunc = (newData, status) => {
    if (status === 1) {
      newData = [...newData].sort((a, b) => b.size - a.size);
      setDatabase(newData);
    }
    if (status === 2) {
      newData = [...newData].sort((a, b) => a.size - b.size);
      setDatabase(newData);
    }
  };

  return (
    <div>
      <div className="my-20">
        <h1 className="text-5xl font-bold text-[#001931] text-center">
          Your Installed Apps
        </h1>
        <p className="mt-4 text-[#627382] text-xl text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between max-w-[1440px] mx-auto mb-4">
        <div>
          <h1 className="text-[#001931] font-semibold text-2xl">
            ({database.length}) Apps Found
          </h1>
        </div>
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Size <MdKeyboardArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => sorterFunc(database, 1)}>High-Low</a>
            </li>
            <li>
              <a onClick={() => sorterFunc(database, 2)}>Low-High</a>
            </li>
          </ul>
        </div>
      </div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-[50vh]">
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
            />
          </div>
        }
      >
        <div className="max-w-[1440px] mx-auto mb-30">
          {database.length === 0 ? (
            <h1 className="col-span-2 md:col-span-4 text-center font-bold text-6xl my-36">
              No App Installed
            </h1>
          ) : (
            database.map((app) => (
              <AppCard handleRemove={handleRemove} key={app.id} app={app} />
            ))
          )}
        </div>
      </Suspense>
      <ToastContainer />
    </div>
  );
};

export default Installation;
