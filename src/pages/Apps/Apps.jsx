import React, { useEffect, useState, Suspense, lazy } from "react";
import { Circles, ColorRing } from "react-loader-spinner";

const AppBlock = lazy(() => import("../../components/AppBlock/AppBlock"));

const Apps = () => {
  const [appData, setAppData] = useState([]);
  const [input, setInput] = useState("");
  let status = true;
  const [dataset, setDataset] = useState([]);
  const handleInputChange = (e) => {
    status = false;
    setInput(e.target.value);
    console.log(input);
    const datas = appData.filter((dat) =>
      dat.title.toLowerCase().includes(input)
    );
    setDataset(datas);
    input === "" && setDataset([]);
  };

  useEffect(() => {
    fetch("appData.json")
      .then((res) => res.json())
      .then((data) => {
        setAppData(data);
      });
  }, []);

  return (
    <div>
      <div className="mt-20 mb-10">
        <h1 className="text-[#001931] text-5xl font-bold text-center mb-4">
          Our All Applications
        </h1>
        <p className="text-[#627382] text-xl text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between max-w-[1440px] mx-auto mb-4">
        <h1 className="text-[#001931] font-semibold text-2xl">
          ({dataset.length > 0 ? `${dataset.length}` : `${appData.length}`})
          Apps Found
        </h1>
        <label className="input flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2">
          <svg
            className="h-[1.2em] opacity-50"
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
          <form action="">
            {status || (
              <span className="absolute right-3">
                <ColorRing
                  visible={true}
                  height="25"
                  width="25"
                  ariaLabel="search-loading"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </span>
            )}
            <input
              type="search"
              required
              placeholder="Search App"
              className="outline-none border-none bg-transparent"
              onChange={handleInputChange}
            />
          </form>
        </label>
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
        <div className="max-w-[1440px] grid grid-cols-2 md:grid-cols-4 mx-auto gap-5 mb-20">
          {input.length > 0 && dataset.length === 0 ? (
            <h1 className="col-span-2 md:col-span-4 text-center font-bold text-6xl my-10">
              No App Found
            </h1>
          ) : dataset && dataset.length > 0 ? (
            dataset.map((app) => <AppBlock key={app.id} app={app} />)
          ) : (
            appData.map((app) => <AppBlock key={app.id} app={app} />)
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Apps;
