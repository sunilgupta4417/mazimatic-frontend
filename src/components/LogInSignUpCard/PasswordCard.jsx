import { React, Component } from "react";

const PasswordCard = ({ nextStep, handleChange, values }) => {
  const Submit = async (e) => {
    e.preventDefault();
    const API_BASE_URL = "https://apis.mazimatic.com";
    try {
      const res = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        const error = res;
        console.log(error);
      }

      const data = json;
      localStorage.setItem("token", data.token);
      window.location.reload(false);

      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="enter_password_form" className="cards">
      <div className="card-title pt-3">
        <h3>Pre-Sale Price</h3>
        <h1 className="price-rate">
          {" "}
          $ <span id="enter_password_form_token_rate_lbl">0.0035</span>
        </h1>
      </div>
      <div className="card-middle-title">
        <h1 className="card-sign-up">LOG IN</h1>
        <h2 className="card-middles-texts text-center">
          <span id="nft_cart_login_lbl">Enter Your Password</span>
        </h2>
        <div className="email-enter">
          <label htmlFor="exampleFormControlInput1" className="form-label" />
          <input
            name="passwordtxt"
            type="password"
            onChange={handleChange("password")}
            id="passwordtxt"
            className="form-control"
            placeholder="********"
          />
        </div>
        <div className="forget" style={{ textAlign: "right" }}>
          <input
            type="submit"
            name="forget_password_btn"
            defaultValue="Forget Password?"
            id="forget_password_btn"
            className="btn btn-link btn-sm"
            style={{
              color: "#fff",
              fontSize: 18,
              textDecoration: "none",
            }}
          />
        </div>
        <div className="submit-button pb-5">
          <button
            onClick={Submit}
            id="loginwithpass_btn"
            type="button"
            className="btn two"
          >
            <span>Login</span>
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
export default PasswordCard;
