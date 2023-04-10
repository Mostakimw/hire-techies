import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Feature from "./Feature";
import Category from "./Category";
import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Category categories={categories}></Category>
      <Feature></Feature>
    </div>
  );
};

export default Home;
