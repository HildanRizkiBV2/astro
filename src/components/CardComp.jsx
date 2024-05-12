import React from "react";

const CardComp = ({ title, description, author }) => {
  return (
    <div className="bg-white border shadow-lg p-4 rounded-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{author}</p>
      <div className="mt-4">
        <p className="text-gray-600">{description}</p>
      </div>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        delete
      </button>
    </div>
  );
};
export default CardComp;
