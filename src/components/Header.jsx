import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="md:flex justify-between items-center">
        <h1 className="text-3xl font-bold">HireTechies</h1>
        <div className="flex gap-6 font-semibold">
          {/* <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/applied-jobs">Applied Jobs</Link>
          <Link to="/blog">Blog</Link> */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
          <NavLink
            to="statistics"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Statistics
          </NavLink>
          <NavLink
            to="applied-jobs"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to="blog"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Blog
          </NavLink>
        </div>
        <Link className="my-btn" to="all-jobs">
          Start Applying
        </Link>
      </div>
    </div>
  );
};

export default Header;
