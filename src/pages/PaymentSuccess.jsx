import { React, Component, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
class PaymentSuccess extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex,nofollow" />
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"
            name="viewport"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
          />
          <link
            href="assets/css/material-dashboard.css?v=2.1.0"
            rel="stylesheet"
          />
          <link href="assets/demo/demo.css" rel="stylesheet" />
        </Helmet>
        <div className="wrapper ">
          <div className="main-panel">
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="card">
                      <div className="card-header card-header-success">
                        <h4 className="card-title text-center">
                          Payment Success
                        </h4>
                      </div>
                      <div className="card-body">
                        <div className="text-center text-success pt-5">
                          <h2>
                            <i
                              className="material-icons"
                              style={{ fontSize: 50 }}
                            >
                              check_circle
                            </i>
                          </h2>
                        </div>
                        <h3 className="text-center">Payment received</h3>
                        <p className="text-center">
                          Congratulations! Your payment has been successfully
                          processed. Thank you for your purchase.
                        </p>
                        <div className="text-center">
                          <Link
                            to="/dashboard"
                            className="btn btn-outline-success"
                          >
                            View Dashboard
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="container-fluid text-center">
                <div className="copyright" id="date"></div>
              </div>
            </footer>
          </div>
        </div>
      </>
    );
  }
}
export default PaymentSuccess;
