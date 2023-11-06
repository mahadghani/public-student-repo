// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Houses from "./components/Houses";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
          <ul className="navbar-nav">
            <li
              className="nav-item"
              style={{ backgroundColor: "#FFC107", width: "150px" }}
            >
              <Link
                className="nav-link text-center text-white fw-bold fs-5"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ backgroundColor: "#28A745", width: "150px" }}
            >
              <Link
                className="nav-link text-center text-white fw-bold fs-5"
                to="/search"
              >
                Search
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ backgroundColor: "#007BFF", width: "150px" }}
            >
              <Link
                className="nav-link text-center text-white fw-bold fs-5"
                to="/houses"
              >
                Houses
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/houses" element={<Houses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
