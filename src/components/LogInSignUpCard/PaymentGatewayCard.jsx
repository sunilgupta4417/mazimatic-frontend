import { React, useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CoinPayment, createTransaction, ePay } from "../../utils/payment";
import { getPrice } from "../../utils";

// import { Helmet } from "react-helmet";

const PaymentGatewayCard = ({ nextStep, handleChange, values }) => {
  const navigate = useNavigate();
  const API_BASE_URL = "https://apis.mazimatic.com";
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("");
  const [blockChain, setBlockChain] = useState("BNB");
  const [paymentType, setPaymentType] = useState("coin-payment");
  const [transactionId, setTransactionId] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState("pending");

  const user = localStorage.getItem("user");
  const order_id = uuid();
  const totalToken = (event) => {
    const regex = /^[0-9]*$/; // pattern to match inline numbers
    if (regex.test(event.target.value)) {
      const token = parseInt(
        event.target.value / getPrice(localStorage.getItem("whitelist"))
      );
      setAmount(event.target.value);
      setToken(token);
    } else {
      toast.error(`Please enter valid number of amount`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const onChangeBlockChain = (ev) => {
    setBlockChain(ev.target.value);
  };

  const onChangePaymentType = (ev) => {
    setPaymentType(ev.target.value);
  };

  const BuyNow = async (paymentType) => {
    if (amount < 200) {
      toast.error(`Please enter amount >= 200`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    if (paymentType === "coin-payment") {
      const { txn_id, checkout_url } = await CoinPayment({ amount });
      setTransactionId(txn_id);
      window.location.href = checkout_url;
    } else if (paymentType === "e-pay") {
      ePay({
        blockChain,
        order_id,
        amount,
        successHandler: async function (response) {
          // handleChange("");
          setTransactionId(response.response.transactionid);
          setTransactionStatus("Success");
          setTransactionId(response.response.transactionid);
          if (transactionStatus == "Success") {
            createTransaction({
              order_id,
              transaction_id: response.response.transactionid,
              chain: blockChain,
              description: paymentType,
              gateway: paymentType,
              stock: values.token,
              transaction_amt: amount,
              transaction_status: "Success",
            });
          }
          navigate("/payment-success");
        },
        failedHandler: async function (response) {
          navigate("/payment-fail");
          createTransaction({
            order_id,
            transaction_id: response.response.transactionid,
            chain: blockChain,
            description: paymentType,
            gateway: paymentType,
            stock: values.token,
            transaction_amt: amount,
            transaction_status: "Failure",
          });
        },
      });
    } else if (paymentType == "pay-baba") {
      createTransaction({
        order_id,
        transaction_id: transactionId,
        chain: blockChain,
        description: paymentType,
        gateway: paymentType,
        stock: values.token,
        transaction_amt: amount,
        transaction_status: transactionStatus,
      });
    }
  };
  return (
    <>
      <div id="select_gateway_form" className="cards ">
        <div className="card-title pt-3">
          <h3>
            Pre-Sale <span style={{ color: "#5def93" }}>2</span> Price
          </h3>
          <h1 className="price-rate">
            $
            <span id="select_gateway_form_token_rate_lbl">
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
              style={{ width: "20%" }}
              aria-valuenow={20}
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
              value={amount}
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
          <label
            className="btns check"
            type="button"
            for="radioBtn"
            style={{ paddingTop: "5px" }}
          >
            {/* <label for="radioBtn"> */}
            <img src="tool_imgs/Binance.png" alt="" /> BNB {/* </label> */}
            <input
              value={"BNB"}
              name="radioCrypto"
              type="radio"
              onChange={onChangeBlockChain}
              defaultChecked="checked"
              id="radioBtn"
            />
          </label>
          <label
            className="btns check-btn"
            type="button"
            id="button-addon2"
            For="radioEth"
            style={{ paddingTop: "5px" }}
          >
            {/* <label For="radioEth"> */}
            <img src="tool_imgs/eth.png" alt="" /> Ethereum {/* </label> */}
            <input
              value={"ETH"}
              name="radioCrypto"
              type="radio"
              id="radioEth"
              onChange={onChangeBlockChain}
            />
          </label>
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
                  name="radioGateway"
                  type="radio"
                  id="coinpayments_rdo"
                  value={"coin-payment"}
                  onChange={onChangePaymentType}
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
                  name="radioGateway"
                  type="radio"
                  id="epay_rdo"
                  value={"e-pay"}
                  onChange={onChangePaymentType}
                />
                &nbsp;&nbsp; <img src="images/Epay1.png" alt="" />
              </div>
              <div className="col-auto">
                <img src="images/cards_all.png" alt="all" />
              </div>
            </div>
            {/* <div
              id="upi_div"
              className="row payment_mth_1 mb-2 text-center pl_10"
            >
              <div className="col-auto pt_7">
                <input
                  name="radioGateway"
                  type="radio"
                  id="upi_rdo"
                  value={"pay-baba"}
                  onChange={onChangePaymentType}
                />
                &nbsp;&nbsp; <img src="images/upi.svg" alt="" />
              </div>
              <div className="col-auto text-start">
                <img src="images/upi_all.png" alt="UPI all" />
              </div>
            </div> */}
            <div className="text-center">
              <button
                onClick={() => BuyNow(paymentType)}
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
