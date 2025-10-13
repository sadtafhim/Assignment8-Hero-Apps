import React from "react";
import { useParams, useLoaderData } from "react-router";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const AppData = () => {
  const { appId } = useParams();
  const intId = parseInt(appId);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === intId);
  console.log(singleApp);
  const {
    id,
    title,
    companyName,
    description,
    size,
    ratings,
    image,
    ratingAvg,
    downloads,
    reviews,
  } = singleApp;

  const ratingsReversed = [...ratings].reverse();

  console.log(ratingsReversed);

  console.log(ratingsReversed);
  return (
    <div className="max-w-[1440px] mx-auto my-20">
      <div className="max-w-[1440px] h-[350px] flex gap-10">
        <img className="w-[350px] h-[350px] object-cover" src={image} alt="" />
        <div>
          <div className="h-20 flex flex-col justify-between mb-[30px]">
            <h3 className="font-bold text-4xl">{title}</h3>
            <p className="text-xl text-[#627382]">
              Developed by <span className="text-[#9F62F2]">{companyName}</span>
            </p>
          </div>
          <div className="border-t-2 w-full py-[30px] flex gap-10">
            <div>
              <p className="text-[#54CF68]">
                <FiDownload size={32} />
              </p>
              <p className="mt-4">Downloads</p>
              <h1 className="font-extrabold text-[40px]">
                {downloads >= 1000000000
                  ? `${downloads / 1000000000}B`
                  : downloads > 1000000
                  ? `${downloads / 1000000}M`
                  : downloads}
              </h1>
            </div>
            <div>
              <p className="mb-4 text-[#FF8811]">
                <FaStar size={32} />
              </p>
              <p>Average Ratings</p>
              <p className="font-extrabold text-[40px]">{ratingAvg}</p>
            </div>
            <div>
              <p className="mb-4 text-[#9F62F2]">
                <FaRegThumbsUp size={32} />
              </p>
              <p>Reviews</p>
              <p className="font-extrabold text-[40px]">
                {reviews >= 1000000
                  ? `${reviews / 1000000}M`
                  : reviews > 1000
                  ? `${reviews / 1000}Thousand`
                  : reviews}
              </p>
            </div>
          </div>
          <button className="btn btn-success text-white">
            Install Now ({size}MB)
          </button>
        </div>
      </div>
      <div className="h-[430px] border-y-2 mt-5 flex flex-col justify-center items-between ">
        <h1>Ratings</h1>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            layout="vertical"
            data={ratingsReversed}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" /> <YAxis type="category" dataKey="name" />{" "}
            <Tooltip />
            <Legend />
            <Bar
              dataKey="count"
              fill="#FF8811"
              activeBar={<Rectangle fill="#116EFF" stroke="#FFD166" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h1 className=" text-2xl font-semibold mb-6 text-[#001931]">
          Description
        </h1>
        <p className="text-xl text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppData;
