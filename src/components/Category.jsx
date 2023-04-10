import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCategory from "./SingleCategory";

const Category = ({ categories }) => {
  return (
    <div className="mt-24">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Job Category List
        </h1>
        <p className="text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="md:grid grid-cols-12 gap-6">
        {categories.map((cat) => (
          <SingleCategory key={cat.id} category={cat}></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Category;
