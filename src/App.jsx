import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="md:w-[80%] mx-auto">
      <Header></Header>
      <div className="min-h-[calc(100vh-290px)] px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
