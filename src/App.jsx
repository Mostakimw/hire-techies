import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
