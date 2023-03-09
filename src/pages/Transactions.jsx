import {React, Component} from "react";

import Sidebar from '../components/Sidebar'
import UserDashboardHeaderTags from "../components/UserDashboarcHeaderTags";
import UserDashboardFooterTags from "../components/UserDashboardFooter";

export default class Transactions extends Component {
  render() {
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
                <div className="col-lg-10 offset-lg-1">
                  <div
                    className="card"
                    style={{ backgroundColor: "#000000ba" }}
                  >
                    <div className="card-body table-responsive text-white">
                      <div
                        className="text-center pb-4"
                        style={{
                          color: "#3BFFC4",
                          fontSize: 30,
                          fontWeight: 600,
                          fontStyle: "italic",
                        }}
                      >
                        TRANSACTIONS
                      </div>
                      <table
                        className="table text-white font-weight-bold"
                        style={{ fontWeight: "500 !important", fontSize: 15 }}
                      >
                        <thead className="text-white">
                          <tr>
                            <th className="text-white" style={{ fontSize: 16 }}>
                              <strong>Order ID</strong>
                            </th>
                            <th className="text-white" style={{ fontSize: 16 }}>
                              <strong>Date</strong>
                            </th>
                            <th className="text-white" style={{ fontSize: 16 }}>
                              <strong>Amount</strong>
                            </th>
                            <th className="text-white" style={{ fontSize: 16 }}>
                              <strong>Gateway</strong>
                            </th>
                            <th className="text-white" style={{ fontSize: 16 }}>
                              <strong>Tokens</strong>
                            </th>
                            <th className="text-white" style={{ fontSize: 16 }}>
                              <strong>Status</strong>
                            </th>
                            <th className="text-white" style={{ fontSize: 16 }}>
                              <strong>View</strong>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>202303051210173348009264</td>
                            <td>2023-3-5 12:10:17</td>
                            <td>200</td>
                            <td>PayBaba</td>
                            <td>57142.8571428571</td>
                            <td>
                              <span
                                id="ContentPlaceHolder1_Repeater1_transaction_status_0"
                                style={{ color: "#EED93F" }}
                              >
                                Pending
                              </span>
                            </td>
                            <td>
                              <a
                                className="btn btn-sm btn-warning"
                                href="view-receipt.html"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>202303050548456928846481</td>
                            <td>2023-3-5 05:48:51</td>
                            <td>200</td>
                            <td>PayBaba</td>
                            <td>57142.8571428571</td>
                            <td>
                              <span
                                id="ContentPlaceHolder1_Repeater1_transaction_status_1"
                                style={{ color: "#EED93F" }}
                              >
                                Pending
                              </span>
                            </td>
                            <td>
                              <a
                                className="btn btn-sm btn-warning"
                                href="view-receipt.html"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>202303050547057355272648</td>
                            <td>2023-3-5 05:47:13</td>
                            <td>200</td>
                            <td>PayBaba</td>
                            <td>57142.8571428571</td>
                            <td>
                              <span
                                id="ContentPlaceHolder1_Repeater1_transaction_status_2"
                                style={{ color: "#EED93F" }}
                              >
                                Pending
                              </span>
                            </td>
                            <td>
                              <a
                                className="btn btn-sm btn-warning"
                                href="view-receipt.html"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <a
                                      id="ContentPlaceHolder1_lnkFirst"
                                      className="aspNetDisabled"
                                    >
                                      First
                                    </a>
                                  </td>
                                  <td>
                                    <a
                                      id="ContentPlaceHolder1_lnkPrevious"
                                      className="aspNetDisabled"
                                    >
                                      Previous
                                    </a>
                                  </td>
                                  <td>
                                    <table
                                      id="ContentPlaceHolder1_RepeaterPaging"
                                      cellSpacing={0}
                                      style={{ borderCollapse: "collapse" }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td align="center">
                                            <a
                                              id="ContentPlaceHolder1_RepeaterPaging_Pagingbtn_0"
                                              className="aspNetDisabled"
                                              style={{
                                                display: "inline-block",
                                                backgroundColor: "#FFCC01",
                                                width: 20,
                                              }}
                                            >
                                              1
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td>
                                    <a
                                      id="ContentPlaceHolder1_lnkNext"
                                      className="aspNetDisabled"
                                    >
                                      Next
                                    </a>
                                  </td>
                                  <td>
                                    <a
                                      id="ContentPlaceHolder1_lnkLast"
                                      className="aspNetDisabled"
                                    >
                                      Last
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan={5} className="text-center">
                                    <span id="ContentPlaceHolder1_lblpage">
                                      Page 1 of 1
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
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
}