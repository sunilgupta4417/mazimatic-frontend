import { React, useState } from "react";

import Sidebar from "../components/Sidebar";
import UserDashboardHeaderTags from "../components/UserDashboarcHeaderTags";
import UserDashboardFooterTags from "../components/UserDashboardFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const [curentPassword, setCurentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const ChangePassword = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (!curentPassword && !newPassword && !confirmPassword) {
      setLoading(false);
      toast.error("Plese enter detalis", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else {
      if (newPassword !== confirmPassword) {
        setLoading(false);
        toast.error("New password and confirm password not match", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      const API_BASE_URL = "https://apis.mazimatic.com";
      fetch(`${API_BASE_URL}/api/updatepassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          current_password: curentPassword,
          new_password: newPassword,
          confirm_password: confirmPassword,
        }),
      })
        .then((resp) => resp.json())
        .then((json) => {
          console.log(json);
          setLoading(false);
          if (json.message) {
            setCurentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            toast.success(`${json.message}`, {
              position: toast.POSITION.TOP_RIGHT,
            });
            return;
          } else {
            setCurentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            toast.error(`Error : ${json.error}`, {
              position: toast.POSITION.TOP_RIGHT,
            });
            return;
          }
        });
    }
  };
  return (
    <>
      <UserDashboardHeaderTags />
      <ToastContainer />
      <Sidebar />
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
                    CHANGE PASSWORD
                  </div>
                  <div className="card-body table-responsive">
                    <div id="ContentPlaceHolder1_UpdatePanel1">
                      <div className="row">
                        <div className="col-lg-12 pt-3">
                          <div className="" style={{ color: "#ffffff" }}>
                            <strong>Current Password</strong>
                          </div>
                          <span className="bmd-form-group">
                            <div className="input-group">
                              <input
                                name="ctl00$ContentPlaceHolder1$current_password"
                                type="password"
                                id="ContentPlaceHolder1_current_password"
                                className="cstm_input"
                                onChange={(e) => {
                                  setCurentPassword(e.target.value);
                                }}
                                value={curentPassword}
                                placeholder=""
                              />
                            </div>
                          </span>
                        </div>
                        <div className="col-lg-12 pt-3">
                          <div className="" style={{ color: "#ffffff" }}>
                            <strong>New Password</strong>
                          </div>
                          <span className="bmd-form-group">
                            <div className="input-group">
                              <input
                                name="ctl00$ContentPlaceHolder1$new_password"
                                type="password"
                                id="ContentPlaceHolder1_new_password"
                                className="cstm_input"
                                placeholder=""
                                onChange={(e) => {
                                  setNewPassword(e.target.value);
                                }}
                                value={newPassword}
                              />
                            </div>
                          </span>
                        </div>
                        <div className="col-lg-12 pt-3">
                          <div className="" style={{ color: "#ffffff" }}>
                            <strong>Confirm Password</strong>
                          </div>
                          <span className="bmd-form-group">
                            <div className="input-group">
                              <input
                                name="ctl00$ContentPlaceHolder1$confirm_password"
                                type="password"
                                id="ContentPlaceHolder1_confirm_password"
                                className="cstm_input"
                                onChange={(e) => {
                                  setConfirmPassword(e.target.value);
                                }}
                                placeholder=""
                                value={confirmPassword}
                              />
                            </div>
                          </span>
                        </div>
                        <div className="col-lg-12 pt-3">
                          <div className="text-center pt-3">
                            <input
                              type="submit"
                              name="ctl00$ContentPlaceHolder1$changebtn"
                              value={!loading ? "Change Password" : "Loading"}
                              id="ContentPlaceHolder1_changebtn"
                              className="btn btn-success btn-md"
                              onClick={ChangePassword}
                              disabled={!loading ? "" : "true"}
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
};
export default Settings;