import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import {Home, Auth, Search, About, ContactPage} from "./pages";
import NavBar from "./components/common/NavBar";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/logout" element={<Navigate to="/contact" />} />
      </Routes>
    </Router>

  </React.StrictMode>
);
