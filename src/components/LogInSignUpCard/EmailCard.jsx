import { React, Component } from "react";

const EmailCard = ({ nextStep, handleChange, values }) => {
  const Continue = async (e) => {
    e.preventDefault();
    const API_BASE_URL = "https://apis.mazimatic.com";
    try {
      const res = await fetch(`${API_BASE_URL}/api/checkemail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
        }),
      });
      const json = await res.json();
      console.log(json);
      if (!res.ok) {
        const error = res;
        console.log(error);
      }
      if (json.user) {
        nextStep();
      }
      if (json.email) {
        alert("Password sent to your email address");
        nextStep();
      }
      // nextStep();
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
          $ <span id="signin_pnl_token_rate_lbl">0.0035</span>
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
          >
            <span>Submit</span>
          </button>
        </div>
        <div className="card-bottom-text">
          <p className="hr-lines">Payment Partners</p>
        </div>
        <div className="content-cards d-flex justify-content-around">
          <div className="coin-img" />
          <div className="payme-img" />
          <div className="upi-img" />
        </div>
      </div>
    </div>
  );
};
export default EmailCard;
