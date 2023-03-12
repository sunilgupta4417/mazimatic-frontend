import { React, Component, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import UserDashboardHeaderTags from "../components/UserDashboarcHeaderTags";
import UserDashboardFooterTags from "../components/UserDashboardFooter";
export default function Dashboard() {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");

    if (!loggedInUser) {
      <Navigate replace to="/" />
    }
    
  }, []);

  return (
    <>
      <UserDashboardHeaderTags />
      <Sidebar />
      <div className="main-panel">
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "
          id="navigation-example"
        >
          <div className="container-fluid">
            <div className="navbar-wrapper" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-target="#navigation-example"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon icon-bar" />
              <span className="navbar-toggler-icon icon-bar" />
              <span className="navbar-toggler-icon icon-bar" />
            </button>
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav" />
            </div>
          </div>
        </nav>
        {/* End Navbar */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div
                  className="card text-white"
                  style={{ backgroundColor: "#000000ba" }}
                >
                  <div
                    className="text-center pb-1 pt-5"
                    style={{
                      color: "#3BFFC4",
                      fontSize: 26,
                      fontWeight: 600,
                      fontStyle: "italic",
                    }}
                  >
                    BUY MAZI TOKENS
                  </div>
                  <div className="card-body table-responsive">
                    <div className="row">
                      <div
                        id="ContentPlaceHolder1_amtpnl"
                        className="col-lg-6 offset-lg-3 pt-3"
                      >
                        <div className="text-center">
                          <div className="radio-toolbar">
                            <input
                              defaultValue="BNB"
                              name="ctl00$ContentPlaceHolder1$radioCrypto"
                              type="radio"
                              id="ContentPlaceHolder1_radioBnb"
                              defaultChecked="checked"
                            />
                            <label
                              className="m-1"
                              htmlFor="ContentPlaceHolder1_radioBnb"
                            >
                              BNB
                            </label>
                            <input
                              defaultValue="ETH"
                              name="ctl00$ContentPlaceHolder1$radioCrypto"
                              type="radio"
                              id="ContentPlaceHolder1_radioEth"
                            />
                            <label
                              className="m-1"
                              htmlFor="ContentPlaceHolder1_radioEth"
                            >
                              ETH
                            </label>
                          </div>
                        </div>
                        <div className="text-center">
                          <strong>Enter amount below (in Dollar)</strong>
                        </div>
                        <span className="bmd-form-group">
                          <div className="input-group">
                            <span className="input-group-addon pt-2">
                              <i className="material-icons">attach_money</i>
                            </span>
                            &nbsp;&nbsp;&nbsp;{" "}
                            <input
                              name="ctl00$ContentPlaceHolder1$total_amt_txt"
                              type="text"
                              id="ContentPlaceHolder1_total_amt_txt"
                              className="form-control text-center"
                              placeholder="eg. 100"
                              style={{
                                color: "White",
                                fontSize: 18,
                                fontWeight: "bold",
                              }}
                            />
                          </div>
                        </span>
                        <div className="text-center pt-3">
                          <input
                            type="submit"
                            name="ctl00$ContentPlaceHolder1$proceedbtn"
                            defaultValue="Proceed"
                            id="ContentPlaceHolder1_proceedbtn"
                            className="proceed_btn"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 offset-lg-3 pt-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="card card-stats total_txn_box">
                  <div className="card-header card-header-primary card-header-icon">
                    <div className="card-icon">
                      <i className="material-icons">done_all</i>
                    </div>
                    <p className="card-category text-white">
                      Total Txn. (in $)
                    </p>
                    <h3 className="card-title text-white">
                      <span id="ContentPlaceHolder1_total_txn_lbl">$ 0</span>
                    </h3>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <a href="transactions.aspx" className="text-white">
                        All Transactions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="card card-stats total_token_box">
                  <div className="card-header card-header-info card-header-icon">
                    <div className="card-icon">
                      <i className="material-icons">assistant</i>
                    </div>
                    <p className="card-category text-white">Total Tokens</p>
                    <h3 className="card-title text-white">
                      <span id="ContentPlaceHolder1_total_tokens_lbl">0</span>
                    </h3>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <a href="transactions.aspx" className="text-white">
                        All Transactions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="card card-stats token_value_box">
                  <div className="card-header card-header-success card-header-icon">
                    <div className="card-icon">
                      <i className="material-icons">🤑</i>
                    </div>
                    <p className="card-category text-white">Tokens Value</p>
                    <h3 className="card-title text-white">
                      <span id="ContentPlaceHolder1_tokens_value_lbl">
                        $ 0.0000
                      </span>
                    </h3>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <a href="transactions.aspx" className="text-white">
                        All Transactions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="copyright float-right" id="date" />
          </div>
        </footer>
      </div>
      <UserDashboardFooterTags />
    </>
  );
}
