import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movie from "./Pages/Movie/Movie.jsx";
import Tv from "./Pages/Tv/Tv.jsx";
import Layout from "./Layout.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Movie />,
      },
      {
        path: "tv-series",
        element: <Tv />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
