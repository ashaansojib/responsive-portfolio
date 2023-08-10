import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="my-container">
      <div className="lg:flex justify-between items-center p-2 bg-gray-100">
        <h2 className="text-2xl font-semibold">Ashaduzzaman Sojib</h2>
        <div className="lg:flex items-center justify-between gap-2 lg:mt-0 mt-2">
          <ul className="lg:flex flex-row md:justify-end items-center gap-1">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/skill"
            >
              Skills
            </NavLink>
          </ul>
          <Link to="#">
            <button className="download-btn">
              Download Resume
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
