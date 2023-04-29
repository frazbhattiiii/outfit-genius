import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./routes/home";
import Authentication from "./routes/Authentication";
import NavBar from "./components/common/NavBar";
import Search from "./routes/Search";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/auth",
    element: <Authentication/>

  },
  {
    path:"/search",
    element: <Search/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
