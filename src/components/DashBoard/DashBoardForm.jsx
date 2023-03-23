import React from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const DashBoardForm = ({
  nextStep,
  onChangeBlockChain,
  values,
  handleChange,
}) => {
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
              id="ContentPlaceHolder1_amtpnl"
              className="col-lg-6 offset-lg-3 pt-3"
            >
              <div className="text-center">
                <div className="radio-toolbar">
                  <input
                    defaultValue="BNB"
                    name="ctl00$ContentPlaceHolder1$radioCrypto"
                    type="radio"
                    id="ContentPlaceHolder1_radioBnb"
                    defaultChecked="checked"
                    value={"BNB"}
                    onChange={onChangeBlockChain}
                  />
                  <label className="m-1" htmlFor="ContentPlaceHolder1_radioBnb">
                    BNB
                  </label>
                  <input
                    defaultValue="ETH"
                    name="ctl00$ContentPlaceHolder1$radioCrypto"
                    type="radio"
                    id="ContentPlaceHolder1_radioEth"
                    value={"ETH"}
                    onChange={onChangeBlockChain}
                  />
                  <label className="m-1" htmlFor="ContentPlaceHolder1_radioEth">
                    ETH
                  </label>
                </div>
              </div>
              <div className="text-center">
                <strong>Enter amount below (in Dollar)</strong>
              </div>
              <span className="bmd-form-group">
                <div className="input-group">
                  <span className="input-group-addon pt-2">
                    <i className="material-icons">attach_money</i>
                  </span>
                  &nbsp;&nbsp;&nbsp;{" "}
                  <input
                    name="ctl00$ContentPlaceHolder1$total_amt_txt"
                    type="text"
                    value={values.amount}
                    onChange={handleChange("amount")}
                    id="ContentPlaceHolder1_total_amt_txt"
                    className="form-control text-center"
                    placeholder="eg. 100"
                    style={{
                      color: "White",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  />
                </div>
              </span>
              <div className="text-center pt-3">
                <input
                  type="submit"
                  onClick={nextStep}
                  name="ctl00$ContentPlaceHolder1$proceedbtn"
                  value="Buy"
                  id="ContentPlaceHolder1_proceedbtn"
                  className="proceed_btn px-4 py-1"
                />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3 pt-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoardForm;
