import React, { useState } from "react";
// import window from "global";

function PaymentTest() {
  const initializeEpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://epay.me/sdk/websdk.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const [response, setResponse] = useState("");
  const handleClick = async () => {
    const res = await initializeEpay();

    if (!res) {
      alert("Epay SDK Failed to load");
      return;
    }
    const options = {
      channelId: "WEB",
      customerId: "c36d44a38e4c49d1ae43d6e66f6c9646",
      merchantType: "ECOMM",
      merchantId: "63e8afebfcbda19984d1865a",
      orderID: "202303110527048234561587",
      orderDescription: "BNB",
      orderAmount: 200,
      orderCurrency: "USD",
      emailId: "T61C8KWR",
      merchantLogo: "https://mazimatic.com/assets/logo/mazimatic_logo_db.png",
      showSavedCardsFeature: true,
      successHandler: async function (response) {
        window.location.href =
          "https://mazimatic.com/epay-success.aspx?transactionid=" +
          response.response.transactionid;
      },
      failedHandler: async function (response) {
        window.location.href =
          "https://mazimatic.com/epay-failed.aspx?transactionid=";
      },
    };
    const paymentObject = new window.Epay(options);
    paymentObject.open(options);
  };

  return (
    <div>
      <button onClick={handleClick}>Make Request</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default PaymentTest;
