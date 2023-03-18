export const CoinPayment = async ({ amount }) => {
  // console.log(paymentType);
  // const createTransaction = async () => {

  try {
    const API_BASE_URL = "http://localhost:5001";

    const response = await fetch(`${API_BASE_URL}/api/coinpayment-link`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": 0,
      },
      body: JSON.stringify({
        amount,
        email: "example@example.com",
      }),
    });
    const result = await response.json();
    return { txn_id: result.txn_id, checkout_url: result.checkout_url };
    // setTransactionId(result.txn_id);
    // window.location.href = result.checkout_url;
  } catch (error) {
    console.log(error);
  }
};

export const PayBaba = ({ order_id, user, amount }) => {
  window.open(
    `https://payments.paybaba.co/pay/63f784d54d84e1b05d5d2ee2/${order_id}/${user}/${amount}`,
    "_child",
    "width=375,height=645"
  );
};
export const createTransaction = async ({
  order_id,
  transaction_id,
  transaction_amt,
  gateway,
  transaction_status,
  stock,
  description,
  chain,
}) => {
  // console.log("createTransaction");
  const data = {
    order_id,
    transaction_id,
    transaction_amt,
    gateway,
    transaction_status,
    stock,
    description,
    chain,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  };
  const API_BASE_URL = "https://apis.mazimatic.com";

  fetch(`${API_BASE_URL}/api/create-transaction`, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

export const ePay = async ({
  blockChain,
  order_id,
  amount,
  successHandler,
  failedHandler,
}) => {
  console.log("ePay");
  const initializeEpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://epay.me/sdk/v2/stage-websdk.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

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
    orderID: order_id,
    orderDescription: blockChain,
    orderAmount: amount,
    orderCurrency: "USD",
    emailId: "T61C8KWR",
    merchantLogo: "https://mazimatic.com/assets/logo/mazimatic_logo_db.png",
    showSavedCardsFeature: true,
    successHandler: successHandler,
    failedHandler: failedHandler,
  };
  const paymentObject = new window.Epay(options);
  paymentObject.open(options);
};
