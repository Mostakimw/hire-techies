import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">HireTechies</h1>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/applied-jobs">Applied Jobs</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <Link className="my-btn" to="/all-jobs">
          Start Applying
        </Link>
      </div>
    </div>
  );
};

export default Header;
