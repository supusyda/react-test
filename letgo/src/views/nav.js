import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
const nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Navbar</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              ToDo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/count"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Count
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/youtubesreach"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              YouTubeSreach
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 d-inline-flex p-2">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default nav;
