import { React, useState, useEffect } from "react";
// import { Helmet } from "react-helmet";

const PaymentGatewayCard = ({ nextStep, handleChange, values }) => {
  const Continue = (e, values) => {
    console.log(values);
  };

  const [token, setToken] = useState("");
  const totalToken = (event) => {
    const amount = event.target.value / 0.0035;
    setToken(amount);
  };
  return (
    <>
      <div id="select_gateway_form" className="cards ">
        <div className="card-title pt-3">
          <h3>Pre-Sale Price</h3>
          <h1 className="price-rate">
            $ <span id="select_gateway_form_token_rate_lbl">0.0035</span>
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
          <div className="content-card d-flex justify-content-around">
            <p className="title1">Excited</p>
            <p className="title2">Over the Moon</p>
            <p className="title3">Missed it</p>
          </div>
        </div>
        <div className="progress_pd">
          <div className="input-group mb-3">
            <button className="btns" type="button" id="button-addon1">
              AMOUNT in $
            </button>
            <input
              name="total_amt_txt"
              type="text"
              id="total_amt_txt"
              onChange={totalToken}
              className="form-control dash_input"
              placeholder="eg. 1000"
            />
          </div>
          <div className="input-group mb-3">
            <button className="btns" type="button" id="button-addon1">
              TOKEN QTY
            </button>
            <input
              name="total_payable_tkn_lbl"
              type="text"
              readOnly="readonly"
              id="total_payable_tkn_lbl"
              className="form-control dash_input"
              value={token}
              placeholder={0}
            />
          </div>
        </div>
        <div className="payment">
          <p className="payment-title">Select your Blockchain</p>
        </div>
        <div className="checkbox text-center">
          <button className="btns check" type="button">
            <img src="tool_imgs/Binance.png" alt="" /> BNB{" "}
            <input
              defaultValue="BNB"
              name="radioCrypto"
              type="radio"
              id="radioBnb"
              defaultChecked="checked"
            />
          </button>
          <button className="btns check-btn" type="button" id="button-addon2">
            <img src="tool_imgs/eth.png" alt="" /> Ethereum{" "}
            <input
              defaultValue="ETH"
              name="radioCrypto"
              type="radio"
              id="radioEth"
            />
          </button>
        </div>
        <div className="payment-method">
          <p className="payment-titles">Select your Payment Method</p>
        </div>
        <div className="content-cards d-flex justify-content-around radio_btn_hldr">
          <div className="coin-imgs">
            <div
              id="coinpayments_div"
              className="row payment_mth_1 mb-2 text-center pl_10"
            >
              <div className="col-auto pt_7">
                <input
                  defaultValue="crypto"
                  name="radioGateway"
                  type="radio"
                  id="coinpayments_rdo"
                  defaultChecked="checked"
                />
                &nbsp;&nbsp; <img src="tool_imgs/Coin_Payments_1.svg" alt="" />
                <img src="images/eth_bnb_usdt.png" alt="" />
              </div>
            </div>
            <div
              id="epay_div"
              className="row payment_mth_1 mb-2 text-center pl_10"
            >
              <div className="col-auto pt_7">
                <input
                  defaultValue="card"
                  name="radioGateway"
                  type="radio"
                  id="epay_rdo"
                  defaultChecked="checked"
                />
                &nbsp;&nbsp; <img src="images/Epay1.png" alt="" />
              </div>
              <div className="col-auto">
                <img src="images/cards_all.png" />
              </div>
            </div>
            <div
              id="upi_div"
              className="row payment_mth_1 mb-2 text-center pl_10"
            >
              <div className="col-auto pt_7">
                <input
                  defaultValue="upi"
                  name="radioGateway"
                  type="radio"
                  id="upi_rdo"
                  defaultChecked="checked"
                />
                &nbsp;&nbsp; <img src="images/upi.svg" alt="" />
              </div>
              <div className="col-auto text-start">
                <img src="images/upi_all.png" />
              </div>
            </div>
            <div className="text-center">
              <button
                // onClick={handleClick}
                id="loginwithpass_btn"
                type="button"
                className="buy_button"
              >
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentGatewayCard;
