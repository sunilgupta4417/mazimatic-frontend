import { React, Component, useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import LoadingScreen from "../components/LoadingScreen";
import UserDashboardHeaderTags from "../components/UserDashboarcHeaderTags";
import UserDashboardFooterTags from "../components/UserDashboardFooter";
import DashBoardCard from "../components/DashBoard/DashBoardCard";
import { COIN_PRICE } from "../constants";
export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [metaData, setMetaData] = useState({
    totalAmount: 0,
    totalTokens: 0,
    totalTokensValue: 0,
  });
  useEffect(() => {
    (async () => {
      const API_BASE_URL = "https://apis.mazimatic.com";
      const res = await fetch(`${API_BASE_URL}/api/get-transaction`, {
        headers: {
          // "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const transactions = await res.json();
      const transactionsArray = transactions.message;
      setMetaData(
        transactionsArray.reduce(
          (prev, curr) => {
            if (curr.transaction_status.toLowerCase() === "success") {
              prev.totalTokens += parseInt(curr.stock, 10);
              prev.totalAmount += parseInt(curr.transaction_amt, 10);
              prev.totalTokensValue += parseInt(curr.stock, 10) * COIN_PRICE;
            }
            return prev;
          },
          {
            ...metaData,
          }
        )
      );
      setIsLoaded(false);
    })();

    // this.setState({ transactions: transactions.message, loading: false });
  }, []);

  // const transactionAmount = localStorage.getItem("transaction_amount");
  // const transaction_amount =
  //   transactionAmount !== "null" ? transactionAmount : 0;
  // const transactionStock = localStorage.getItem("transaction_stock");
  // const transaction_stock = transactionStock !== "null" ? transactionStock : 0;
  // const transactionTokens =
  //   transaction_amount !== 0 && transaction_stock !== 0
  //     ? transaction_stock * (transaction_amount / transactionStock)
  //     : 0;

  if (isLoaded) {
    return <LoadingScreen />;
  } else {
    return (
      <>
        <UserDashboardHeaderTags />
        <Sidebar />
        <div className="main-panel">
          {/* Navbar */}
          <nav
            className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top"
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
                <DashBoardCard />
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
                        <span id="ContentPlaceHolder1_total_txn_lbl">
                          $ {metaData.totalAmount}
                        </span>
                      </h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <a href="/transactions" className="text-white">
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
                        <span id="ContentPlaceHolder1_total_tokens_lbl">
                          {metaData.totalTokens}
                        </span>
                      </h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <a href="/transactions" className="text-white">
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
                          $ {metaData.totalTokensValue}
                        </span>
                      </h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <a href="/transactions" className="text-white">
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
}
