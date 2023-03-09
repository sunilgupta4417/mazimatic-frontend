import { React, Component } from "react";
import HomeFooterTags from "../components/HomeFooterTags";
import HomeHeaderTags from "../components/HomeHeaderTags";
import HomeNavBar from "../components/HomeNavBar";
import LoginSignupCards from "../components/LogInSignUpCard/LoginSignupCards";
export default class Home extends Component {
  render() {
    return (
      <>
        <HomeHeaderTags />
        <section
          id="toolBox"
          style={{ fontFamily: '"Alumni Sans", sans-serif', paddingBottom: 40 }}
        >
          <HomeNavBar />
          <div className="container-fluid" id="home">
            <div className="row">
              <div className="col-lg-6">
                <div className="start_left">
                  <h1 className="big_text">
                    BIGGEST PRESALE <br />
                    OF 2023{" "}
                  </h1>
                  <div className="btn_box">
                    <a
                      href="https://mazimatic.com/files/whitepaper.pdf"
                      className="btn btn_link"
                    >
                      WhitePaper
                    </a>
                    <br />
                    <a
                      href="https://mazimatic.com/files/Mazi_Tokenomics.pdf"
                      className="btn btn_link"
                    >
                      Tokenomics
                    </a>
                    <br />
                    <a
                      href="https://mazimatic.com/files/Roadmap.pdf"
                      className="btn btn_link"
                    >
                      Road Map
                    </a>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-lg-2" />
              <LoginSignupCards />
            </div>
          </div>
        </section>
        <HomeFooterTags />
      </>
    );
  }
}
