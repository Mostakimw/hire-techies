import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-[85%] mx-auto mt-6">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
