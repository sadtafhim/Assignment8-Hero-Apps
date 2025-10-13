import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppBlock = ({ app }) => {
  const { image, downloads, title, ratingAvg, id } = app;
  return (
    <div>
      <Link to={`/AppData/${id}`}>
        <div className="card shadow-sm max-w-[350px] h-[435px] p-5 bg-[#FFFFFF]">
          <figure>
            <img
              className="w-[300px] h-[300px] object-cover rounded-xl"
              src={image}
              alt={title}
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-between">
              <div className="badge bg-[#F1F5E8] text-[#00D390]">
                <LuDownload />
                {downloads >= 1000000000
                  ? `${downloads / 1000000000}B`
                  : downloads > 1000000
                  ? `${downloads / 1000000}M`
                  : downloads}
              </div>
              <div className="badge bg-[#FFF0E1] text-[#FF8811]">
                <FaStar />
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppBlock;
