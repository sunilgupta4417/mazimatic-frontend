import { React, Component } from "react";
import UserDashboardHeaderTags from "../components/UserDashboarcHeaderTags";
import UserDashboardFooterTags from "../components/UserDashboardFooter";
import Sidebar from "../components/Sidebar";

export default class ViewTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      order_id: null,
      transaction_amt: null,
      transaction_id: null,
      transaction_date: null,
      chain: null,
      gateway: null,
      stock: null,
      transaction_status: null,
    };
  }

  componentDidMount() {
    const API_BASE_URL = "https://apis.mazimatic.com";
    const lastSegment = window.location.href.split("/").pop();
    fetch(
      `${API_BASE_URL}/api/view-transaction?transaction_id=${lastSegment}`,
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }
    )
      .then((resp) => resp.json())
      .then((json) => {
        if (json.data[0]) {
          this.setState({
            loading: false,
            order_id: json.data[0].order_id,
            transaction_amt: json.data[0].transaction_amt,
            transaction_id: json.data[0].transaction_id,
            transaction_date: json.data[0].transaction_date,
            chain: json.data[0].chain,
            gateway: json.data[0].gateway,
            stock: json.data[0].stock,
            transaction_status: json.data[0].transaction_status,
          });
        } else {
          localStorage.clear();
        }
      });
  }
  render() {
    const data = this.state;
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
                <div className="col-lg-6 offset-lg-3">
                  <div
                    className="card text-white"
                    style={{ backgroundColor: "#000000ba" }}
                  >
                    <div
                      className="text-center pb-3 pt-5"
                      style={{
                        color: "#3bffc4",
                        fontSize: 30,
                        fontWeight: 600,
                        fontStyle: "italic",
                      }}
                    >
                      Receipt
                    </div>
                    <div className="card-body table-responsive">
                      <div className="row">
                        <div className="col-lg-12 pt-3">
                          <div className="table-responsive">
                            {data.loading ? (
                              <div>LOADING</div>
                            ) : (
                              <table className="table table-bordered stripped text-white">
                                <tbody>
                                  <tr>
                                    <td>Order ID</td>
                                    <td>
                                      <span id="ContentPlaceHolder1_order_id_lbl">
                                        {data.order_id}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Paid Amt.</td>
                                    <td>
                                      $
                                      <span id="ContentPlaceHolder1_paid_amt_lbl">
                                        {data.transaction_amt}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Transaction ID</td>
                                    <td>
                                      <span id="ContentPlaceHolder1_transaction_id_lbl">
                                        {data.transaction_id}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Date</td>
                                    <td>
                                      <span id="ContentPlaceHolder1_date_lbl">
                                        {data.transaction_date}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Chain</td>
                                    <td>
                                      <span id="ContentPlaceHolder1_chain_lbl" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Payment Gateway</td>
                                    <td>
                                      <span id="ContentPlaceHolder1_payment_gateway_lbl">
                                        {data.gateway}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Tokens</td>
                                    <td>
                                      <span id="ContentPlaceHolder1_tokens_lbl">
                                        {data.stock}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Payment Status</td>
                                    <td>
                                      <span id="ContentPlaceHolder1_payment_status_lbl">
                                        {data.transaction_status}
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-12 pt-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UserDashboardFooterTags />
      </>
    );
  }
}
