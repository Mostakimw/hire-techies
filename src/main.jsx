import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Statistics from "./components/Statistics";
import Home from "./components/Home";
import AppliedJobs from "./components/AppliedJobs";
import Blog from "./components/Blog";
import { loadData } from "./utils/Loaders/loadData";
import JobDetails from "./components/JobDetails";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: loadData,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: loadData,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/feature.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
