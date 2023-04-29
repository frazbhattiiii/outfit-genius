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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/auth",
    element: <Authentication/>

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
