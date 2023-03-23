import { React, useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CoinPayment, createTransaction, ePay } from "../../utils/payment";

const PaymentCard = ({ handleChange, values, backStep }) => {
  const [transactionId, setTransactionId] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState("pending");
  const { amount, blockChain, paymentType } = values;
  const navigate = useNavigate();
  const API_BASE_URL = "https://apis.mazimatic.com";
  const user = localStorage.getItem("user");
  const order_id = uuid();
  const BuyNow = async (paymentType) => {
    if (paymentType == "coin-payment") {
      console.log("LL: BuyNow -> values", values);

      const { txn_id, checkout_url } = await CoinPayment({ amount });

      await createTransaction({
        order_id,
        transaction_id: txn_id,
        chain: blockChain,
        description: paymentType,
        gateway: paymentType,
        stock: values.token,
        transaction_amt: amount,
        transaction_status: "Pending",
      });
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
            await createTransaction({
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
          await createTransaction({
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
    }
  };
  // const CoinPayment = async () => {
  //   // console.log(paymentType);
  //   // const createTransaction = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.coinpayments.net/api.php?version=2&key='2845f460972ecd48601831ea8cfd839eb747507b2dd7e1d43a462720db6d2c14'&format=json",
  //       {
  //         method: "POST",
  //         mode: "no-cors",
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //           HMAC: "5590eac015e7692902e1a9cd5464f1d305a4b593d2f1343d826ac5affc5ac6f960a5167284f9bf31295cba0e04df9d8f7087935b5344c468ccf2dd036e159102",
  //           "Content-Length": 0,
  //         },
  //         body: new URLSearchParams({
  //           cmd: "create_transaction",
  //           amount: 10,
  //           currency1: "USD",
  //           currency2: "BTC",
  //           buyer_email: "example@example.com",
  //           item_name: "Test Item",
  //         }),
  //       }
  //     );

  //     // const result = await response.json();
  //     console.log(response);
  //     // setTransactionId(result.result.txn_id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // };

  //   // const fetchTransactionDetails = async () => {
  //   //   try {
  //   //     const response = await fetch(
  //   //       `https://www.coinpayments.net/api.php?cmd=get_tx_info&txid=${transactionId}`,
  //   //       {
  //   //         headers: {
  //   //           HMAC: "YOUR_SECRET_HMAC",
  //   //         },
  //   //       }
  //   //     );
  //   //     const result = await response.json();

  //   //     setTransactionStatus(result.result.status);
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   }
  //   // };
  // };
  // const ePay = async (e) => {
  //   const initializeEpay = () => {
  //     return new Promise((resolve) => {
  //       const script = document.createElement("script");
  //       script.src = "https://epay.me/sdk/v2/stage-websdk.js";
  //       script.onload = () => {
  //         resolve(true);
  //       };
  //       script.onerror = () => {
  //         resolve(false);
  //       };

  //       document.body.appendChild(script);
  //     });
  //   };

  //   const res = await initializeEpay();

  //   if (!res) {
  //     alert("Epay SDK Failed to load");
  //     return;
  //   }
  //   const options = {
  //     channelId: "WEB",
  //     customerId: "c36d44a38e4c49d1ae43d6e66f6c9646",
  //     merchantType: "ECOMM",
  //     merchantId: "63e8afebfcbda19984d1865a",
  //     orderID: order_id,
  //     orderDescription: blockChain,
  //     orderAmount: amount,
  //     orderCurrency: "USD",
  //     emailId: "T61C8KWR",
  //     merchantLogo: "https://mazimatic.com/assets/logo/mazimatic_logo_db.png",
  //     showSavedCardsFeature: true,
  //     successHandler: async function (response) {
  //       // handleChange("");
  //       setTransactionId(response.response.transactionid);
  //       await setTransactionStatus("Success");
  //       await setTransactionId(response.response.transactionid);
  //       if (transactionStatus == "Success") {
  //         createTransaction();
  //       }
  //       navigate("/payment-success");
  //     },
  //     failedHandler: async function (response) {
  //       navigate("/payment-fail");
  //       createTransaction();
  //     },
  //   };
  //   const paymentObject = new window.Epay(options);
  //   paymentObject.open(options);
  // };
  // const PayBaba = () => {
  //   window.open(
  //     `https://payments.paybaba.co/pay/63f784d54d84e1b05d5d2ee2/${order_id}/${user}/${amount}`,
  //     "_child",
  //     "width=375,height=645"
  //   );
  //   createTransaction();
  // };
  // const createTransaction = async () => {
  //   // console.log("createTransaction");
  //   const data = {
  //     order_id: order_id,
  //     transaction_id: transactionId,
  //     transaction_amt: amount,
  //     gateway: paymentType,
  //     transaction_status: transactionStatus,
  //     stock: values.token,
  //     description: paymentType,
  //     chain: blockChain,
  //   };
  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify(data),
  //   };

  //   fetch(`${API_BASE_URL}/api/create-transaction`, requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // };
  return (
    <div className="col-lg-8 offset-lg-2">
      <div className="card text-white" style={{ backgroundColor: "#000000ba" }}>
        <div
          className="text-center pb-1 pt-5"
          style={{
            color: "#3BFFC4",
            fontSize: 26,
            fontWeight: 600,
            fontStyle: "italic",
          }}
        >
          BUY MAZI TOKENS
        </div>
        <div className="card-body table-responsive">
          <div className="row">
            <div
              id="ContentPlaceHolder1_gatewaypnl"
              className="col-lg-8 offset-lg-2 pt-3"
            >
              <div className="text-center pt-3" style={{ fontSize: 18 }}>
                Total Payable ($
                <span id="ContentPlaceHolder1_total_payable_dlr_lbl">
                  {values.amount}
                </span>
                ) for
                <span
                  id="ContentPlaceHolder1_total_payable_tkn_lbl"
                  style={{ fontWeight: "bold" }}
                >
                  &nbsp; {values.token} &nbsp;
                </span>
                Token(s)
              </div>
              <div className="text-center pt-4">
                <strong>Select Gateway to Pay Amount</strong>
              </div>
              <div className="row pt-2">
                <div className="col-lg-2 pt-4 text-center"></div>
                <div className="col-lg-4 pt-4 text-center">
                  <span className="bmd-form-group">
                    <input
                      type="image"
                      alt="e-pay"
                      value={"e-pay"}
                      name="ctl00$ContentPlaceHolder1$epay_btn"
                      id="ContentPlaceHolder1_epay_btn"
                      src="images/epay_logo.svg"
                      onClick={() => BuyNow("e-pay")}
                      style={{ height: 91, width: 137 }}
                    />
                  </span>
                </div>
                <div className="col-lg-4 pt-4 text-center">
                  <span className="bmd-form-group">
                    <input
                      alt="coin-Payment"
                      type="image"
                      value={"coin-payment"}
                      name="ctl00$ContentPlaceHolder1$coinpayments_btn"
                      id="ContentPlaceHolder1_coinpayments_btn"
                      src="images/coinpayments_logo.svg"
                      onClick={() => BuyNow("coin-payment")}
                      style={{ width: 150 }}
                    />
                  </span>
                </div>
                <div className="col-lg-2 pt-4 text-center"></div>
                <div className="col-lg-12 pt-4 text-center"></div>
              </div>
              <div className="text-center pt-3">
                <input
                  type="submit"
                  onClick={() => backStep()}
                  name="ctl00$ContentPlaceHolder1$backbtn"
                  value="Back"
                  id="ContentPlaceHolder1_backbtn"
                  className="proceed_btn"
                />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3 pt-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentCard;
