import React, { useEffect } from "react";
import CryptoJS from "crypto-js";

function ExampleComponent() {
  useEffect(() => {
    const data =
      "version=2&key=2845f460972ecd48601831ea8cfd839eb747507b2dd7e1d43a462720db6d2c14&format=json";
    const secret =
      "203f3E1fAb0B88B4D70777C8d6220a5182AC0ac9bc09a5A8c010038AE66Dc256";
    const signature = CryptoJS.HmacSHA256(data, secret).toString(
      CryptoJS.enc.Hex
    );
    console.log(signature);
    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: {
        HMAC: signature,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    };

    fetch("https://www.coinpayments.net/api.php", requestOptions)
      .then((response) => console.log(response))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <h1>Example Component</h1>
    </div>
  );
}

export default ExampleComponent;
