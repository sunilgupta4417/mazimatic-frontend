import { React, Component } from "react";
import { Link } from "react-router-dom";
import { UserConsumer, UserContext } from "../UserContext";

export default class HomeNavBar extends Component {
  render() {
    const token = localStorage.getItem("token");
    // console.log(user._currentValue);
    return (
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "transparent" }}
      >
        <Link className="navbar-brand" to="#">
          <img
            src="/assets/logo/mazimatic_logo_db.png"
            style={{ width: 175 }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#vision-content">
                Our Vision
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="http://nft.mazimatic.com">
                NFT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#Features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#Contact">
                Contact Us
              </Link>
            </li>
            {token != null ? (
              <li id="dash_nav" className="nav-item">
                <Link className="nav-link" to="dashboard">
                  Dashboard
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
