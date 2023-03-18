import { React, Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DashBoardForm from "./DashBoardForm";
import PaymentCard from "./PaymentCard";

export default class DashBoardCard extends Component {
  state = {
    step: null,
    amount: "",
    token: "",
    blockChain: "",
    paymentType: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }
  // proceed to the next step
  nextStep = async () => {
    const regex = /^[0-9]*$/; // pattern to match inline numbers
    if (!regex.test(this.state.amount)) {
      console.log(this.state.amount);
      toast.error(`Please enter valid number of amount`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    // if (this.state.token == "") {
    const totalToken = this.state.amount / 0.005;
    await this.setState({
      token: totalToken,
    });
    console.log(this.state.token);
    // }
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    console.log("LL: DashBoardCard -> handleChange -> input", input);
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, amount, token, blockChain, paymentType } = this.state;

    const values = {
      amount,
      token,
      blockChain,
      paymentType,
    };
    const onChangeBlockChain = (ev) => {
      this.setState({ blockChain: ev.target.value });
    };
    switch (step) {
      case 1:
        return (
          <>
            <ToastContainer />
            <div className="col-lg-12">
              {/* Step-1 start */}
              <DashBoardForm
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                onChangeBlockChain={onChangeBlockChain}
              />
              {/*--- Step-1 End ---*/}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <ToastContainer />
            <div className="col-lg-12">
              {/*--- Step-2 ---*/}
              <PaymentCard
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
              {/*--- Step-2 End ---*/}
            </div>
          </>
        );
      default:
        //
        break;
    }
  }
}
