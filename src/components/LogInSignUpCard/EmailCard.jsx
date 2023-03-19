import { React, Component, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getPrice } from "../../utils";

const EmailCard = ({ nextStep, handleChange, values }) => {
  const [loading, setLoading] = useState(false);
  const Continue = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (values.email == null || values.email == "") {
      setLoading(false);
      toast.error(`Please enter email address`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    const API_BASE_URL = "https://apis.mazimatic.com";
    try {
      const checkUserToken=localStorage.getItem("token");
      var requestedData={};
      requestedData.email=values.email;
      if(!checkUserToken){
        requestedData.loginattempt= 1;
      }else{
        requestedData.loginattempt= 0;
      }
      console.log(requestedData);
      const res = await fetch(`${API_BASE_URL}/api/checkemail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestedData),
      });
      const json = await res.json();
      console.log(json);
      if (!res.ok) {
        toast.error(`Error : ${res}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (json.user) {
        setLoading(false);
        nextStep();
      }
      if (json.email) {
        setLoading(false);
        toast.success(`Password sent to ${values.email}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        nextStep();
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="signin_pnl" className="cards">
      <div className="card-title pt-3">
        <h3>Pre-Sale Price</h3>
        <h1 className="price-rate">
          ${" "}
          <span id="signin_pnl_token_rate_lbl">
            {getPrice(localStorage.getItem("whitelist"))}
          </span>
        </h1>
      </div>
      <div className="progress_pd">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Info example"
            style={{ width: "71%" }}
            aria-valuenow={71}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <p>PRE-SALE METER</p>
        </div>
      </div>
      <div className="content-card d-flex justify-content-around">
        <p className="title1">Excited</p>
        <p className="title2">Over the Moon</p>
        <p className="title3">Missed it</p>
      </div>
      <div className="card-middle-title">
        <h1 className="card-sign-up">SIGN UP /LOG IN</h1>
        <h2 className="card-middle-text">Enter your Email</h2>
        <div className="email-enter">
          <label htmlFor="exampleFormControlInput1" className="form-label" />
          <input
            name="usernametxt"
            type="text"
            id="usernametxt"
            onChange={handleChange("email")}
            className="form-control"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="submit-button pb-5">
          <button
            onClick={Continue}
            id="loginbtn"
            type="button"
            className="btn two"
            disabled={!loading ? "" : "true"}
          >
            {!loading ? <span>Submit</span> : <span>Loading</span>}
          </button>
        </div>
        <div className="card-bottom-text">
          <p className="hr-lines">Payment Partners</p>
        </div>
        <div className="content-cards d-flex justify-content-center">
          <div className="coin-img" />
          <div className="payme-img" />
        </div>
      </div>
    </div>
  );
};
export default EmailCard;
