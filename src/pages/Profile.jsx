import { React, Component, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import UserDashboardHeaderTags from "../components/UserDashboarcHeaderTags";
import UserDashboardFooterTags from "../components/UserDashboardFooter";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      name: null,
      mobile_or_telegram: null,
      bnb_wallet_address: null,
      eth_wallet_address: null,
      loading: false,
    };
  }

  componentDidMount() {
    const API_BASE_URL = "https://apis.mazimatic.com";
    fetch(`${API_BASE_URL}/api/getuser`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json.user);
        if (json.user) {
          this.setState({
            email: json.user.email,
            name: json.user.name,
            mobile_or_telegram: json.user.mobile_or_telegram,
            bnb_wallet_address: json.user.bnb_wallet_address,
            eth_wallet_address: json.user.eth_wallet_address,
          });
        } else {
          localStorage.clear();
        }
      });
  }

  render() {
    const Submit = async (e) => {
      this.setState({ loading: true });
      const API_BASE_URL = "https://apis.mazimatic.com";
      const values = this.state;
      e.preventDefault();
      try {
        const res = await fetch(`${API_BASE_URL}/api/updateuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            email: values.email,
            name: values.name,
            mobile_or_telegram: values.mobile_or_telegram,
            bnb_wallet_address: values.bnb_wallet_address,
            eth_wallet_address: values.eth_wallet_address,
          }),
        });
        const json = await res.json();
        if (!res.ok) {
          const error = res;
          this.setState({ loading: false });
          toast.error(`${error}`, {
            position: toast.POSITION.TOP_RIGHT,
          });
          return;
        }
        this.setState({ loading: false });
        toast.success(`${json.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <>
        <UserDashboardHeaderTags />
        <Sidebar />
        <ToastContainer />
        <div className="main-panel">
          {/* Navbar */}
          <nav
            className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "
            id="navigation-example"
          >
            <div className="container-fluid">
              <div className="navbar-wrapper"></div>
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
                <ul className="navbar-nav"></ul>
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
                        color: "#3BFFC4",
                        fontSize: 30,
                        fontWeight: 600,
                        fontStyle: "italic",
                      }}
                    >
                      MY PROFILE
                    </div>
                    <div className="card-body">
                      <div id="ContentPlaceHolder1_UpdatePanel1">
                        <div className="row">
                          <div className="col-lg-12 pt-3">
                            <div style={{ color: "#ffffff" }}>
                              <strong>Email Address</strong>
                            </div>
                            <div>
                              <span className="bmd-form-group is-filled">
                                <input
                                  name="ctl00$ContentPlaceHolder1$email_txt"
                                  type="text"
                                  defaultValue={this.state.email}
                                  readOnly={true}
                                  id="ContentPlaceHolder1_email_txt"
                                  className="cstm_input"
                                  placeholder=""
                                  style={{ borderStyle: "None" }}
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-12 pt-3">
                            <div className="" style={{ color: "#ffffff" }}>
                              <strong>Your Name</strong>
                            </div>
                            <span className="bmd-form-group">
                              <div className="input-group">
                                <input
                                  autoComplete="off"
                                  name="ctl00$ContentPlaceHolder1$name_txt"
                                  defaultValue={this.state.name}
                                  onChange={(event) => {
                                    this.setState({
                                      name: event.target.value,
                                    });
                                  }}
                                  type="text"
                                  id="ContentPlaceHolder1_name_txt"
                                  placeholder=""
                                  className="cstm_input"
                                />
                              </div>
                            </span>
                          </div>
                          <div className="col-lg-12 pt-3">
                            <div className="" style={{ color: "#ffffff" }}>
                              <strong>Mobile No. or Telegram ID</strong>
                            </div>
                            <span className="bmd-form-group">
                              <div className="input-group">
                                <input
                                  autoComplete="off"
                                  name="ctl00$ContentPlaceHolder1$mobile_or_telegram_txt"
                                  type="text"
                                  defaultValue={this.state.mobile_or_telegram}
                                  onChange={(event) => {
                                    this.setState({
                                      mobile_or_telegram: event.target.value,
                                    });
                                  }}
                                  id="ContentPlaceHolder1_mobile_or_telegram_txt"
                                  className="cstm_input"
                                  placeholder=""
                                />
                              </div>
                            </span>
                          </div>
                          <div className="col-lg-12 pt-3">
                            <div className="" style={{ color: "#ffffff" }}>
                              <strong>BNB Wallet Address</strong>
                            </div>
                            <span className="bmd-form-group">
                              <div className="input-group">
                                <input
                                  autoComplete="off"
                                  name="ctl00$ContentPlaceHolder1$bnb_wallet_address"
                                  type="text"
                                  defaultValue={this.state.bnb_wallet_address}
                                  onChange={(event) => {
                                    this.setState({
                                      bnb_wallet_address: event.target.value,
                                    });
                                  }}
                                  id="ContentPlaceHolder1_bnb_wallet_address"
                                  className="cstm_input"
                                  placeholder=""
                                />
                              </div>
                            </span>
                          </div>
                          <div className="col-lg-12 pt-3">
                            <div className="" style={{ color: "#ffffff" }}>
                              <strong>ETH Wallet Address</strong>
                            </div>
                            <span className="bmd-form-group">
                              <div className="input-group">
                                <input
                                  autoComplete="off"
                                  name="ctl00$ContentPlaceHolder1$eth_wallet_address"
                                  type="text"
                                  defaultValue={this.state.eth_wallet_address}
                                  onChange={(event) => {
                                    this.setState({
                                      eth_wallet_address: event.target.value,
                                    });
                                  }}
                                  id="ContentPlaceHolder1_eth_wallet_address"
                                  className="cstm_input"
                                  placeholder=""
                                />
                              </div>
                            </span>
                          </div>
                          <div className="col-lg-12 pt-3">
                            <div className="text-center pt-3">
                              <input
                                type="submit"
                                onClick={Submit}
                                name="ctl00$ContentPlaceHolder1$savebtn"
                                value={
                                  !this.state.loading
                                    ? "Update profile"
                                    : "Loading"
                                }
                                disabled={!this.state.loading ? "" : "true"}
                                id="ContentPlaceHolder1_savebtn"
                                className="btn btn-success btn-md"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 pt-3"></div>
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
              <div className="copyright float-right" id="date"></div>
            </div>
          </footer>
        </div>
        <UserDashboardFooterTags />
      </>
    );
  }
}
