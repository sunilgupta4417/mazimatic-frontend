import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);
  const Logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.replace("/");
  };
  return (
    <div className="sidebar" data-color="purple" data-background-color="black">
      <div className="logo">
        <Link to="/" className="simple-text logo-normal">
          <img src="/logo/mazimatic_logo_db.png" className="img-fluid" alt="" />
        </Link>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li
            className={`nav-item ${location.pathname == "/" ? "active" : ""}`}
          >
            <Link
              className={`nav-link ${location == "/" ? "active_btn" : ""}`}
              to="/"
            >
              <i className="material-icons">home</i>
              <p>Visit Homepage</p>
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname == "/dashboard" ? "active" : ""
            }`}
          >
            <Link
              className={`nav-link ${
                location.pathname == "/dashboard" ? "active_btn" : ""
              }`}
              to="/dashboard"
            >
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname == "/transactions" ? "active" : ""
            }`}
          >
            <Link
              className={`nav-link ${
                location.pathname == "/transactions" ? "active_btn" : ""
              }`}
              to="/transactions"
            >
              <i className="material-icons">library_books</i>
              <p>Transactions</p>
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname == "/profile" ? "active" : ""
            }`}
          >
            <Link
              className={`nav-link ${
                location.pathname == "/profile" ? "active_btn" : ""
              }`}
              to="/profile"
            >
              <i className="material-icons">bubble_chart</i>
              <p>Profile</p>
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname == "/settings" ? "active" : ""
            }`}
          >
            <Link
              className={`nav-link ${
                location.pathname == "/settings" ? "active_btn" : ""
              }`}
              to="/settings"
            >
              <i className="material-icons">build</i>
              <p>Settings</p>
            </Link>
          </li>
          <li className={`nav-item`}>
            <Link className="nav-link" onClick={Logout}>
              <i className="material-icons">exit_to_app</i>
              <p>Log Out</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;