import React from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import Category from "./Category";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { categories, featuredJob } = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Category categories={categories}></Category>
      <Feature featuredJob={featuredJob}></Feature>
    </div>
  );
};

export default Home;
