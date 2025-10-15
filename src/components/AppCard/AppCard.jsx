import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { handleUnistall } from "../../utilities/handleUnistall";
import { toast } from "react-toastify";

const AppCard = ({ handleRemove, app }) => {
  const { image, downloads, title, ratingAvg, size, id } = app;
  const uninstalled = () => toast(`${title} Uninstalled`);
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all mb-3">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 rounded-lg object-cover bg-gray-200"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>

          <div className="flex gap-4 text-sm text-gray-500 mt-1">
            <p className="flex items-center gap-1 text-green-500">
              <FiDownload size={14} />{" "}
              {downloads >= 1000000000
                ? `${downloads / 1000000000}B`
                : downloads > 1000000
                ? `${downloads / 1000000}M`
                : downloads}
            </p>
            <p className="flex items-center gap-1 text-orange-400">
              <FaStar size={14} /> {ratingAvg}
            </p>
            <p>{size} MB</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          uninstalled(), handleUnistall(id), handleRemove(id);
        }}
        className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-4 py-2 text-sm font-medium transition"
      >
        Uninstall
      </button>
    </div>
  );
};

export default AppCard;
