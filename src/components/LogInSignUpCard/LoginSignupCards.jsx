import { React, Component } from "react";
import EmailCard from "./EmailCard";
import PasswordCard from "./PasswordCard";
import PaymentGatewayCard from "./PaymentGatewayCard";

export default class LoginSignupCards extends Component {
  
  state = {
    step: null,
    email: "",
    password: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      step: localStorage.getItem("token") ? 3 : 1,
    };
  }
  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    // console.log(this.state);
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { email, password } = this.state;
    const values = { email, password };

    switch (step) {
      case 1:
        return (
          <div className="col-lg-4">
            {/* Step-1 start */}
            <EmailCard
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
            {/*--- Step-1 End ---*/}
          </div>
        );
      case 2:
        return (
          <div className="col-lg-4">
            {/*--- Step-2 ---*/}
            <PasswordCard
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
            {/*--- Step-2 End ---*/}
          </div>
        );
      case 3:
        return (
          <div className="col-lg-4">
            {/* Step-3 */}
            <PaymentGatewayCard />
            {/*--- Step-3 End ---*/}
          </div>
        );
      default:
        //
        break;
    }
  }
}
