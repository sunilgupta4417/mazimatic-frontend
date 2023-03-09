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
        <form method="post" action="index.html" id="form1">
          <div className="aspNetHidden">
            <input
              type="hidden"
              name="__EVENTTARGET"
              id="__EVENTTARGET"
              defaultValue=""
            />
            <input
              type="hidden"
              name="__EVENTARGUMENT"
              id="__EVENTARGUMENT"
              defaultValue=""
            />
            <input
              type="hidden"
              name="__VIEWSTATE"
              id="__VIEWSTATE"
              defaultValue="sAr3gksNBL9VzXPRgLtu96/ZwFe4Zwpc5cMSzAl/CVihTy9iZp8V8YXPq+++tOCcko32SIOy9fJF0TCPB44e7Xy0LN+jQny8qTIozUCK6sr3zEGDXGHXEMf9uPU0ZL8mmJaH6VkrERkO/C8ZCw9pPi/hSM9PXeRhOHqZvLjIxrsmT556P2QW2gipmEVEaCQzbkLVwMqa19nlfxaN6s2B91kudqwjZRSG2+6dxp49nTeau8NDF2wWfhc5wDee6Ook4HbUg/ZATuRKSfJPFh4glWQ/3we+f8fwuKob9aWKMznO737PmV1SxpRlTu1mxzvryF7qG5jOBDg7gkIkVBevex7IJZW5J8EVK/Qkl/P9yYLCa/840u7+B+NuiLul766xiyyIcBGFt0/9Cq8SFeE4xz59LWWoDp4tVDXI+DiGbpya6unhhbahLMDSGO4MR9bkDtisoo0L9o+I/qRcbn5CxUh+cXyc3urrglh6A4Rm388kb46lBBdIrgJaDLa44+9E0T7fbNMoDYgR0u1Ncacl1oGF5zW2rDkFAsp9lXg5l1otgDylUcRGJt8e9HYi/gF1bo0cvY0vaqKYWa5S7VhPp17zlZcEmvlpWUjfFBuI+zPO9FzCIHZbIdx98g7SdVF1auZmZM3n/R5YklHJ7JPZheUW2rFZmVCgISgaAIhDii3IgtiCI4hgc4zydYqRzwbBddyvIA=="
            />
          </div>
          <div className="aspNetHidden">
            <input
              type="hidden"
              name="__VIEWSTATEGENERATOR"
              id="__VIEWSTATEGENERATOR"
              defaultValue={90059987}
            />
            <input
              type="hidden"
              name="__EVENTVALIDATION"
              id="__EVENTVALIDATION"
              defaultValue="UGM/PiInQI5SvRhq/xR1V3XPxbso+2cNYrlyAV/HNEil7IsYdI6F5lZVSpvQJYWyCY81X5fW6MI27l146mVLwHDTY49/JFPZqM2Py98Km588IiyMV93ap32OsP3XZ6BDrjIuZQ=="
            />
          </div>
          <div id="UpdatePanel1">
            <section
              id="toolBox"
              style={{
                fontFamily: '"Alumni Sans", sans-serif',
                paddingBottom: 40,
              }}
            >
              <nav
                className="navbar navbar-expand-lg"
                style={{ backgroundColor: "transparent" }}
              >
                <a className="navbar-brand" href="#">
                  <img
                    style={{ width: 175 }}
                    src="assets/logo/mazimatic_logo_db.png"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-bars text-white" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#home">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#vision-content">
                        Our Vision
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="http://nft.mazimatic.com">
                        NFT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#Features">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#Contact">
                        Contact Us
                      </a>
                    </li>
                    <li id="dash_nav" className="nav-item">
                      <a className="nav-link" href="dashboard.html">
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="container-fluid" id="home">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="start_left">
                      <h1 className="big_text">
                        {" "}
                        BIGGEST PRESALE <br /> OF 2023{" "}
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
                  <div className="col-lg-4">
                    {/* Step-1 start */}
                    {/* <div id="signin_pnl" class="cards"><div class="card-title pt-3"><h3>Pre-Sale Price</h3><h1 class="price-rate">$
                                      <span id="signin_pnl_token_rate_lbl">0.0035</span></h1></div><div class="progress_pd"><div class="progress"><div class='progress-bar' role='progressbar' aria-label='Info example' style='width: 71%' aria-valuenow='71' aria-valuemin='0' aria-valuemax='100'></div><p>PRE-SALE METER</p></div></div><div class="content-card d-flex justify-content-around"><p class="title1">Excited</p><p class="title2">Over the Moon</p><p class="title3">Missed it</p></div><div class="card-middle-title"><h1 class="card-sign-up">SIGN UP /LOG IN</h1><h2 class="card-middle-text">Enter your Email</h2><div class="email-enter"><label for="exampleFormControlInput1" class="form-label"></label><input name="usernametxt" type="text" id="usernametxt" class="form-control" placeholder="johndoe@gmail.com" /></div><div class="submit-button pb-5"><button onClick="__doPostBack('loginbtn','')" id="loginbtn" type="button" class="btn two"><span>Submit</span></button></div><div class="card-bottom-text"><p class="hr-lines">Payment Partners</p></div><div class="content-cards d-flex justify-content-around"><div class="coin-img"></div><div class="payme-img"></div><div class="upi-img"></div></div></div></div>  */}
                    {/*--- Step-1 End ---*/}
                    {/*--- Step-2 ---*/}
                    <div id="enter_password_form" className="cards">
                      <div className="card-title pt-3">
                        <h3>Pre-Sale Price</h3>
                        <h1 className="price-rate">
                          {" "}
                          ${" "}
                          <span id="enter_password_form_token_rate_lbl">
                            0.0035
                          </span>
                        </h1>
                      </div>
                      <div className="card-middle-title">
                        <h1 className="card-sign-up">LOG IN</h1>
                        <h2 className="card-middles-texts text-center">
                          <span id="nft_cart_login_lbl">
                            Enter Your Password
                          </span>
                        </h2>
                        <div className="email-enter">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          />
                          <input
                            name="passwordtxt"
                            type="password"
                            id="passwordtxt"
                            className="form-control"
                            placeholder="********"
                          />
                        </div>
                        <div className="forget" style={{ textAlign: "right" }}>
                          <input
                            type="submit"
                            name="forget_password_btn"
                            defaultValue="Forget Password?"
                            id="forget_password_btn"
                            className="btn btn-link btn-sm"
                            style={{
                              color: "#fff",
                              fontSize: 18,
                              textDecoration: "none",
                            }}
                          />
                        </div>
                        <div className="submit-button pb-5">
                          <button
                            onClick="__doPostBack('loginwithpass_btn','')"
                            id="loginwithpass_btn"
                            type="button"
                            className="btn two"
                          >
                            <span>Login</span>
                          </button>
                        </div>
                        <div className="card-bottom-text">
                          <p className="hr-lines">Payment Partners</p>
                        </div>
                        <div className="content-cards d-flex justify-content-around">
                          <div className="coin-img" />
                          <div className="payme-img" />
                          <div className="upi-img" />
                        </div>
                      </div>
                    </div>
                    {/* End */}
                    {/* Step-3 */}
                    {/* <div id="select_gateway_form" class="cards"><div class="card-title pt-3"><h3>Pre-Sale Price</h3><h1 class="price-rate">$
                                      <span id="select_gateway_form_token_rate_lbl">0.0035</span></h1></div><div class="progress_pd"><div class="progress"><div class="progress-bar" role="progressbar" aria-label="Info example" style="width: 71%" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100"></div><p>PRE-SALE METER</p></div><div class="content-card d-flex justify-content-around"><p class="title1">Excited</p><p class="title2">Over the Moon</p><p class="title3">Missed it</p></div></div><div class="progress_pd"><div class="input-group mb-3"><button class="btns" type="button" id="button-addon1">AMOUNT in $</button><input name="total_amt_txt" type="text" onchange="javascript:setTimeout('__doPostBack(\'total_amt_txt\',\'\')', 0)" onkeypress="if (WebForm_TextBoxKeyHandler(event) == false) return false;" id="total_amt_txt" class="form-control dash_input" placeholder="eg. 1000"></div><div class="input-group mb-3"><button class="btns" type="button" id="button-addon1">TOKEN QTY</button><input name="total_payable_tkn_lbl" type="text" readonly="readonly" id="total_payable_tkn_lbl" class="form-control dash_input" placeholder="0"></div></div><div class="payment"><p class="payment-title">Select your Blockchain</p></div><div class="checkbox text-center"><button class="btns check" type="button"><img src="tool_imgs/Binance.png" alt="">
                                      BNB
                                  <input value="BNB" name="radioCrypto" type="radio" id="radioBnb" checked="checked"></button><button class="btns check-btn" type="button" id="button-addon2"><img src="tool_imgs/eth.png" alt="">
                                      Ethereum
                                  <input value="ETH" name="radioCrypto" type="radio" id="radioEth"></button></div><div class="payment-method"><p class="payment-titles">Select your Payment Method</p></div><div class="content-cards d-flex justify-content-around radio_btn_hldr"><div class="coin-imgs"><div id="coinpayments_div" class="row payment_mth_1 mb-2 text-center pl_10"><div class="col-auto pt_7"><input value="crypto" name="radioGateway" type="radio" id="coinpayments_rdo" checked="checked">&nbsp;&nbsp;
                                                      
                                              <img src="tool_imgs/Coin_Payments_1.svg" alt=""><img src="images/eth_bnb_usdt.png" alt=""></div></div><div id="epay_div" class="row payment_mth_1 mb-2 text-center pl_10"><div class="col-auto pt_7"><input value="card" name="radioGateway" type="radio" id="epay_rdo" checked="checked">&nbsp;&nbsp;
                                                      
                                              <img src="images/Epay1.png" alt=""></div><div class="col-auto"><img src="images/cards_all.png"></div></div><div id="upi_div" class="row payment_mth_1 mb-2 text-center pl_10"><div class="col-auto pt_7"><input value="upi" name="radioGateway" type="radio" id="upi_rdo" checked="checked">&nbsp;&nbsp;
                                                      
                                              <img src="images/upi.svg" alt=""></div><div class="col-auto text-start"><img src="images/upi_all.png"></div></div><div class="text-center"><input type="submit" name="buynowbtn" value="Buy Now" id="buynowbtn" class="buy_button"></div></div></div></div> */}
                    {/* End */}
                  </div>
                </div>
              </div>
            </section>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n      .toast {\n        position: fixed;\n        top: 10px;\n        right: 10px;\n        min-width: 250px;\n        max-width: 350px;\n        z-index: 10000;\n        background: rgb(16 136 19 / 85%);\n        color: #fff;\n        font-size: 22px;\n        padding-bottom: 41px;\n      }\n\n      .toast-header {\n        background: #0f2e04;\n        color: #fff;\n        font-size: 27px;\n      }\n    ",
              }}
            />
            <div id="UpdateProgress1" style={{ display: "none" }}>
              <div id="loading-overlay" />
              <div id="loadingDiv2">
                <div className="load-bar2">
                  <div className="bar" />
                  <div className="bar" />
                  <div className="bar" />
                </div>
              </div>
            </div>
          </div>
          <div id="__next">
            <div className="container-fluid">
              <div>
                <a
                  href="https://instagram.com/mazimatic.official?utm_medium=copy_link"
                  target="_blank"
                >
                  <img src="images/icons/instagram.svg" className="float" />
                </a>
                <a href="https://t.me/mazimatic" target="_blank">
                  <img
                    src="assets/images/icons/telegram.svg"
                    className="float2"
                  />
                </a>
                <a href="https://m.facebook.com/mazimatic/" target="_blank">
                  <img
                    src="assets/images/icons/facebook.svg"
                    className="float3"
                  />
                </a>
                <a href="https://twitter.com/mazimatic?s=11" target="_blank">
                  <img
                    src="assets/images/icons/twitter.svg"
                    className="float4"
                  />
                </a>
                <a href="https://discord.gg/gcYZhMA6" target="_blank">
                  <img
                    src="assets/images/icons/discord.png"
                    className="float5"
                  />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=3MgqYz90GCM"
                  target="_blank"
                >
                  <img
                    src="assets/images/icons/youtube.png"
                    className="float6"
                  />
                </a>
                <section id="our-vision">
                  <iframe
                    width="100%"
                    height={800}
                    src="https://www.youtube.com/embed/3MgqYz90GCM"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                  <div className="vision-content" id="vision-content">
                    <img
                      src="assets/images/vision-bg.png"
                      className="vision-bg"
                    />
                    <div className="row">
                      <div className="col-md-6">
                        <h2>Our Vision</h2>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <img src="assets/images/vision-line.svg" />
                          <span>
                            Provide a never-like-before real world casino
                            experience.
                          </span>
                          A virtual world for players to hang out and
                          play-to-earn comfortably.
                        </p>
                        <p>
                          <img src="assets/images/vision-line.svg" />
                          <span>
                            Foster a high performing VR gaming environment
                          </span>{" "}
                          that rewards players generously. A platform that
                          enables you to connect &amp; play with friends
                          anywhere in the world.
                        </p>
                        <p>
                          <img src="assets/images/vision-line.svg" />
                          <span>
                            Create a safe, secure and trust worthy Metaverse
                            platform.
                          </span>{" "}
                          Use solid &amp; bleeding edge web3 technology that
                          scales to accommodate millions of users.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="OurVisionMobile">
                  <img
                    src="assets/images/our-vision-bg.svg"
                    className="our-vision-bg"
                  />
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h3>Our Vision</h3>
                      <p className="mt-5">
                        <span>
                          Provide a never-like-before real world casino
                          experience.
                        </span>{" "}
                        A virtual world for players to hang out and play-to-earn
                        comfortably.
                      </p>
                      <p className="mt-4">
                        <span>
                          Foster a high performing VR gaming environment
                        </span>{" "}
                        that rewards players generously. A platform that enables
                        you to connect &amp; play with friends anywhere in the
                        world.
                      </p>
                      <p className="mt-4">
                        <span>
                          Create a safe, secure and trust worthy Metaverse
                          platform.
                        </span>{" "}
                        Use solid &amp; bleeding edge web3 technology that
                        scales to accommodate millions of users.
                      </p>
                      <iframe
                        width="100%"
                        height={350}
                        src="https://www.youtube.com/embed/3MgqYz90GCM"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                      <h4 className="mt-5">
                        {" "}
                        Play more live more.... <br />
                        <span>Stay tuned</span>
                      </h4>
                      <hr />
                    </div>
                  </div>
                </section>
                <section id="Press">
                  <h3>
                    <img
                      src="assets/images/press-line.svg"
                      className="left-line"
                    />
                    In the Press{" "}
                    <img
                      src="assets/images/press-line.svg"
                      className="right-line"
                    />
                  </h3>
                  <div className="row mt-5">
                    <div className="col-6 col-md-3 text-center">
                      <a
                        href="https://www.forbes.com/billionaires/"
                        target="_blank"
                      >
                        <img src="assets/images/logo/forbes.png" alt="forbes" />
                      </a>
                    </div>
                    <div className="col-6 col-md-3 text-center">
                      <a href="https://cointelegraph.com/" target="_blank">
                        <img
                          src="assets/images/logo/cointelegraph.png"
                          alt="cointelegraph"
                        />
                      </a>
                    </div>
                    <div className="col-6 col-md-3 text-center">
                      <a
                        href="https://www.khaleejtimes.com/kt-network/mazimatic-a-metaverse-dedicated-to-entertainment-and-games"
                        target="_blank"
                      >
                        <img
                          src="assets/images/logo/kjtimes.png"
                          alt="khaleejtimes"
                        />
                      </a>
                    </div>
                    <div className="col-6 col-md-3 text-center">
                      <a
                        href="https://techbullion.com/mazimatic-raises-the-bar-of-play-to-earn-p2e-through-nfts-metaverse-and-blockchain-technology/"
                        target="_blank"
                      >
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/techbullion.png"
                          alt="techbullion"
                        />
                      </a>
                    </div>
                    <div className="col-6 col-md-3 text-center">
                      <a href="https://www.bbc.com/news" target="_blank">
                        <img src="assets/images/logo/bbc.png" alt="bbc" />
                      </a>
                    </div>
                    <div className="col-6 col-md-3 text-center">
                      <a
                        href="https://www.businessinsider.in/?r=US&IR=T"
                        target="_blank"
                      >
                        <img
                          src="assets/images/logo/business_insider.png"
                          alt="business-insider"
                        />
                      </a>
                    </div>
                    <div className="col-6 col-md-3 text-center">
                      <a
                        href="https://medium.com/@mazimatic/mazimatic-building-the-worlds-first-entertainment-metaverse-5346da12e5b0"
                        target="_blank"
                      >
                        <img
                          src="assets/images/logo/medium.png"
                          alt="medium-blog"
                        />
                      </a>
                    </div>
                    <div className="col-6 col-md-3 text-center">
                      <a
                        href="https://www.cryptonexa.com/2022/07/06/mazimatic-raises-the-bar-of-play-to-earn-p2e-through-nfts-metaverse-and-blockchain-technology/"
                        target="_blank"
                      >
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/cryptonexa.png"
                          alt="cryptonexa"
                        />
                      </a>
                    </div>
                  </div>
                  <img
                    src="assets/images/press-bottom-line.svg"
                    className="press-bottom-line"
                  />
                </section>
                <section id="Verse">
                  <img
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse-focus-1.png"
                    className="verse-focus-1"
                  />
                  <img
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse-focus-2.png"
                    className="verse-focus-2"
                  />
                  <div className="row">
                    <div className="col-md-3 col-sm-3 text-left">
                      <img
                        src="https://mazimatic.s3.ap-south-1.amazonaws.com/left-multi-arrows.svg"
                        className="left-multi-arrows"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6 text-center">
                      <h2>
                        {" "}
                        Enter the <br />
                        <span>MaziVerse</span>
                      </h2>
                    </div>
                    <div className="col-md-3 col-sm-3 text-right">
                      <img
                        src="https://mazimatic.s3.ap-south-1.amazonaws.com/right-multi-arrows.svg"
                        className="right-multi-arrows"
                      />
                    </div>
                  </div>
                  <div id="verse-div">
                    <img
                      src="assets/images/line.svg"
                      className="main-line-one"
                    />
                    <img
                      src="assets/images/line.svg"
                      className="main-line-two"
                    />
                    <div className="row verse-div">
                      <div className="col-md-3 col-sm-3 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse1.png"
                          alt="online casino"
                        />
                        <button>*CASINO VERSE</button>
                      </div>
                      <div className="col-md-3 col-sm-3 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse2.png"
                          alt="Crypto casino"
                        />
                        <button>PARTY VERSE</button>
                      </div>
                      <div className="col-md-3 col-sm-3 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse3.png"
                          alt="metaverse Casino"
                        />
                        <button>ADVENTURE VERSE</button>
                      </div>
                      <div className="col-md-3 col-sm-3 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/influencer+_one.png"
                          alt="cryptocurrency casino"
                        />
                        <button>INFLUENCER VERSE</button>
                      </div>
                      <div className="col-md-3 col-sm-3 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/trading_floor.png"
                          alt="cryptocurrency casino"
                        />
                        <button>THE TRADING FLOOR</button>
                      </div>
                    </div>
                  </div>
                  <div className="verse-divs" id="verse-1-div">
                    <img src="assets/images/line.svg" className="line-one" />
                    <img src="assets/images/line.svg" className="line-two" />
                    <div className="row">
                      <div className="col-md-3 col-sm-3">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse1.png"
                          className="main-img"
                          alt="online casino"
                        />
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <h3>CASINO VERSE</h3>
                        <p>
                          {" "}
                          We decided to take online casinos to a fascinating new
                          level. Inside this virtual reality casino, you can
                          play, win and earn while having a lot more fun. Bring
                          your friends, family along into this alternate reality
                          - no matter in which part of the world they are.
                          Playing inside the casinoverse, you are attended by
                          real croupiers and pit managers. The dealers assisting
                          you are real people in real mega casinos across the
                          world and it is live streamed! How cool is that? This
                          new approach of live streaming games helps averting
                          manipulation and ensures that users get good value for
                          money. With this revolutionary approach we put a stop
                          to bots and pre-programmed gaming outcomes, that
                          always act to the benefit of the house. In casinoverse
                          YOU win!{" "}
                        </p>
                      </div>
                      <div className="col-md-3 col-sm-3">
                        <img src="assets/images/close.svg" className="close" />
                        <img
                          src="assets/images/nft-img-3.png"
                          className="right-img-1"
                          alt="Crypto casino"
                        />
                        <img
                          src="assets/images/nft-img-4.png"
                          className="right-img-2"
                          alt="metaverse Casino"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="verse-divs" id="verse-2-div">
                    <img src="assets/images/line.svg" className="line-one" />
                    <img src="assets/images/line.svg" className="line-two" />
                    <div className="row">
                      <div className="col-md-3 col-sm-3">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse2.png"
                          className="main-img"
                          alt="cryptocurrency casino"
                        />
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <h3>PARTY VERSE</h3>
                        <p>
                          {" "}
                          A casino is never complete without a good party :)
                          Partyverse is yet another magnificent realm inside the
                          Maziverse. Just jump inside this virtual club and join
                          thousands of others in a never ending exotic party.
                          You see live artists performing inside with incredible
                          club music that gets you tapping your feet along with
                          a fun crowd. There will be hundreds of parties
                          happening inside the party verse and you get to
                          teleport to any party of choice. Each party will have
                          its own theme, audience, artists etc. By just holding
                          one of Mazimatic's NFT, you get un-limited access to
                          the entire party verse.{" "}
                        </p>
                      </div>
                      <div className="col-md-3 col-sm-3">
                        <img src="assets/images/close.svg" className="close" />
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/party-img-1.jpg"
                          className="right-img-1"
                          alt="online casino"
                        />
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/party-img-2.jpg"
                          className="right-img-2"
                          alt="Crypto casino"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="verse-divs" id="verse-3-div">
                    <img src="assets/images/line.svg" className="line-one" />
                    <img src="assets/images/line.svg" className="line-two" />
                    <div className="row">
                      <div className="col-md-3 col-sm-3">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse3.png"
                          className="main-img"
                          alt="metaverse Casino"
                        />
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <h3>ADVENTURE VERSE</h3>
                        <p>
                          {" "}
                          Step out of the club and land right inside a
                          wonderland filled with adventure. The night is still
                          young inside the maziverse, so you can spend time
                          inside the Adventureverse and go for the ride of your
                          life. This massive VR stimulation brings to life every
                          great attraction you wanted to visit in this world.
                          Just wear your head gear and the next moment you will
                          be flying through the clouds of Burj Khalifa, Effiel
                          tower -or- go scuba diving to the deepest depths of
                          the marina trench. The adventure verse is a dream come
                          true for every metaverse enthusiast.{" "}
                        </p>
                      </div>
                      <div className="col-md-3 col-sm-3">
                        <img src="assets/images/close.svg" className="close" />
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/adventure-img-1.png"
                          className="right-img-1"
                          alt="cryptocurrency casino"
                        />
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/adventure-img-2.png"
                          className="right-img-2"
                          alt="online casino"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="verse-divs" id="verse-4-div">
                    <img src="assets/images/line.svg" className="line-one" />
                    <img src="assets/images/line.svg" className="line-two" />
                    <div className="row">
                      <div className="col-md-3 col-sm-3">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse4.png"
                          className="main-img"
                          alt="Crypto casino"
                        />
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <h3>INFLUENCER VERSE</h3>
                        <p>
                          {" "}
                          The MaziVerse is more than just playing, earning and
                          clubbing. A separate world is dedicated to interact
                          with influencers who you've always admired. Inside the
                          Influencerverse, you are free to connect and talk to
                          them in real-time. In whichever part of the world your
                          influencer is, inside the influencerverse he or she
                          sits right beside you spending quality time.{" "}
                        </p>
                      </div>
                      <div className="col-md-3 col-sm-3">
                        <img src="assets/images/close.svg" className="close" />
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/influencer1.png"
                          className="right-img-1"
                          alt="Crypto casino"
                        />
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/influencer2.png"
                          className="right-img-2"
                          alt="metaverse Casino"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="verse-divs" id="verse-5-div">
                    <img src="assets/images/line.svg" className="line-one" />
                    <img src="assets/images/line.svg" className="line-two" />
                    <div className="row">
                      <div className="col-md-3 col-sm-3">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/trading_floor.png"
                          className="main-img"
                          alt="Crypto casino"
                        />
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <h3>THE TRADING FLOOR</h3>
                        <p>
                          {" "}
                          A Metaverse built for the Trading community whether it
                          is Forex, NYSE or the Indian Stock Market, The Trading
                          Floor is the World’s first Metaverse for the Trading
                          community, where users will be able to interact with
                          their friends, discuss trading strategies and Execute
                          trades inside the metaverse. The Trading Floor will
                          enable integrating the real trading accounts within
                          our virtual machines.{" "}
                        </p>
                      </div>
                      <div className="col-md-3 col-sm-3">
                        <img src="assets/images/close.svg" className="close" />
                      </div>
                    </div>
                  </div>
                  <div className="row verse_p_row">
                    <div className="col-md-1" />
                    <div className="col-md-5 text-center">
                      <p className="verse_p">
                        <span>
                          The Metaverse project of Mazimatic is the MaziVerse.
                        </span>{" "}
                        It will facilitate connection and community in the most
                        entertaining manner. Maziverse will be a futuristic
                        gaming platform for users to meet, earn and play casino
                        games. Running it on the revolutionary Polygon
                        Blockchain helps to keep it decentralised and secure
                        while maintaining very low on-chain transaction fees.
                        Along with gaming,
                      </p>
                    </div>
                    <div className="col-md-5 text-center">
                      <p className="verse_p">
                        {" "}
                        the Maziverse goes the extra mile to provide mind
                        blowing clubbing and social living experiences in a
                        spectacular VR-AR environment{" "}
                      </p>
                      <p className="verse_p">
                        {" "}
                        Be it on the mobile, desktop or using virtual reality
                        goggles, our promise is to enable a spectacular roller
                        coster ride from start to end. The Maziverse is made up
                        of four realms: Casinoverse, Partyverse, Adventureverse
                        and the Influencerverse.{" "}
                      </p>
                    </div>
                    <div className="col-md-1" />
                  </div>
                </section>
                <section id="VerseMobile">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <img
                        src="https://mazimatic.s3.ap-south-1.amazonaws.com/left-multi-arrows.svg"
                        className="left-multi-arrows"
                      />
                      <h2>
                        {" "}
                        Enter the <br />
                        <span>MaziVerse</span>
                      </h2>
                      <img
                        src="https://mazimatic.s3.ap-south-1.amazonaws.com/right-multi-arrows.svg"
                        className="right-multi-arrows"
                      />
                    </div>
                  </div>
                  <div id="verse-mobile-div">
                    <div className="row verse-mobile-div">
                      <div className="col-6 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse1.png"
                          alt="online casino"
                        />
                        <button>*CASINO VERSE</button>
                      </div>
                      <div className="col-6 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse2.png"
                          alt="Crypto casino"
                        />
                        <button>PARTY VERSE</button>
                      </div>
                      <div className="col-6 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse3.png"
                          alt="metaverse Casino"
                        />
                        <button>ADVENTURE VERSE</button>
                      </div>
                      <div className="col-6 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/influencer+_one.png"
                          alt="cryptocurrency casino"
                        />
                        <button>INFLUENCER VERSE</button>
                      </div>
                      <div className="col-6 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/trading_floor.png"
                          alt="cryptocurrency casino"
                        />
                        <button>THE TRADING FLOOR</button>
                      </div>
                    </div>
                  </div>
                  <div className="verse-mobile-divs" id="verse-mobile-1-div">
                    <img src="assets/images/close.svg" className="close" />
                    <div className="row">
                      <div className="col-12 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse1.png"
                          className="main-img"
                          alt="online casino"
                        />
                      </div>
                      <div className="col-12 text-center">
                        <h3>CASINO VERSE</h3>
                        <p>
                          {" "}
                          We decided to take online casinos to a fascinating new
                          level. Inside this virtual reality casino, you can
                          play, win and earn while having a lot more fun. Bring
                          your friends, family along into this alternate reality
                          - no matter in which part of the world they are.
                          Playing inside the casinoverse, you are attended by
                          real croupiers and pit managers. The dealers assisting
                          you are real people in real mega casinos across the
                          world and it is live streamed! How cool is that? This
                          new approach of live streaming games helps averting
                          manipulation and ensures that users get good value for
                          money. With this revolutionary approach we put a stop
                          to bots and pre-programmed gaming outcomes, that
                          always act to the benefit of the house. In casinoverse
                          YOU win!{" "}
                        </p>
                      </div>
                      <div className="col-12 text-center">
                        <img
                          src="assets/images/nft-img-3.png"
                          className="right-img-1"
                          alt="Crypto casino"
                        />
                        <img
                          src="assets/images/nft-img-4.png"
                          className="right-img-2"
                          alt="metaverse Casino"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="verse-mobile-divs" id="verse-mobile-2-div">
                    <img src="assets/images/close.svg" className="close" />
                    <div className="row">
                      <div className="col-12 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse2.png"
                          className="main-img"
                          alt="cryptocurrency casino"
                        />
                      </div>
                      <div className="col-12 text-center">
                        <h3>PARTY VERSE</h3>
                        <p>
                          {" "}
                          A casino is never complete without a good party :)
                          Partyverse is yet another magnificent realm inside the
                          Maziverse. Just jump inside this virtual club and join
                          thousands of others in a never ending exotic party.
                          You see live artists performing inside with incredible
                          club music that gets you tapping your feet along with
                          a fun crowd. There will be hundreds of parties
                          happening inside the party verse and you get to
                          teleport to any party of choice. Each party will have
                          its own theme, audience, artists etc. By just holding
                          one of Mazimatic's NFT, you get un-limited access to
                          the entire party verse.{" "}
                        </p>
                      </div>
                      <div className="col-12 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/party-img-1.jpg"
                          className="right-img-1"
                          alt="online casino"
                        />
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/party-img-2.jpg"
                          className="right-img-2"
                          alt="Crypto casino"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="verse-mobile-divs" id="verse-mobile-3-div">
                    <img src="assets/images/close.svg" className="close" />
                    <div className="row">
                      <div className="col-12 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse3.png"
                          className="main-img"
                          alt="metaverse Casino"
                        />
                      </div>
                      <div className="col-12 text-center">
                        <h3>ADVENTURE VERSE</h3>
                        <p>
                          {" "}
                          Step out of the club and land right inside a
                          wonderland filled with adventure. The night is still
                          young inside the maziverse, so you can spend time
                          inside the Adventureverse and go for the ride of your
                          life. This massive VR stimulation brings to life every
                          great attraction you wanted to visit in this world.
                          Just wear your head gear and the next moment you will
                          be flying through the clouds of Burj Khalifa, Effiel
                          tower -or- go scuba diving to the deepest depths of
                          the marina trench. The adventure verse is a dream come
                          true for every metaverse enthusiast.{" "}
                        </p>
                      </div>
                      <div className="col-12 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/adventure-img-1.png"
                          className="right-img-1"
                          alt="cryptocurrency casino"
                        />
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/adventure-img-2.png"
                          className="right-img-2"
                          alt="online casino"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="verse-mobile-divs" id="verse-mobile-4-div">
                    <img src="assets/images/close.svg" className="close" />
                    <div className="row">
                      <div className="col-12 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse4.png"
                          className="main-img"
                          alt="Crypto casino"
                        />
                      </div>
                      <div className="col-12 text-center">
                        <h3>INFLUENCER VERSE</h3>
                        <p>
                          {" "}
                          The MaziVerse is more than just playing, earning and
                          clubbing. A separate world is dedicated to interact
                          with influencers who you've always admired. Inside the
                          Influencerverse, you are free to connect and talk to
                          them in real-time. In whichever part of the world your
                          influencer is, inside the influencerverse he or she
                          sits right beside you spending quality time.{" "}
                        </p>
                      </div>
                      <div className="col-12 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/influencer1.png"
                          className="right-img-1"
                          alt="Crypto casino"
                        />
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/influencer2.png"
                          className="right-img-2"
                          alt="metaverse Casino"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="verse-mobile-divs" id="verse-mobile-5-div">
                    <img src="assets/images/close.svg" className="close" />
                    <div className="row">
                      <div className="col-12 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/trading_floor.png"
                          className="main-img"
                          alt="Crypto casino"
                        />
                      </div>
                      <div className="col-12 text-center">
                        <h3>THE TRADING FLOOR</h3>
                        <p>
                          {" "}
                          A Metaverse built for the Trading community whether it
                          is Forex, NYSE or the Indian Stock Market, The Trading
                          Floor is the World’s first Metaverse for the Trading
                          community, where users will be able to interact with
                          their friends, discuss trading strategies and Execute
                          trades inside the metaverse. The Trading Floor will
                          enable integrating the real trading accounts within
                          our virtual machines.{" "}
                        </p>
                      </div>
                      <div className="col-12 text-center">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/trading_floor.png"
                          className="right-img-1"
                          alt="Crypto casino"
                        />
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/trading_floor.png"
                          className="right-img-2"
                          alt="metaverse Casino"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row verse_p_row">
                    <div className="col-md-1" />
                    <div className="col-md-5 text-center">
                      <p className="verse_p">
                        <span>
                          The Metaverse project of Mazimatic is the MaziVerse.
                        </span>{" "}
                        It will facilitate connection and community in the most
                        entertaining manner. Maziverse will be a futuristic
                        gaming platform for users to meet, earn and play casino
                        games. Running it on the revolutionary Polygon
                        Blockchain helps to keep it decentralised and secure
                        while maintaining very low on-chain transaction fees.
                        Along with gaming,
                      </p>
                    </div>
                    <div className="col-md-5 text-center">
                      <p className="verse_p">
                        {" "}
                        the Maziverse goes the extra mile to provide mind
                        blowing clubbing and social living experiences in a
                        spectacular VR-AR environment{" "}
                      </p>
                      <p className="verse_p">
                        {" "}
                        Be it on the mobile, desktop or using virtual reality
                        goggles, our promise is to enable a spectacular roller
                        coster ride from start to end. The Maziverse is made up
                        of four realms: Casinoverse, Partyverse, Adventureverse
                        and the Influencerverse.{" "}
                      </p>
                    </div>
                    <div className="col-md-1" />
                  </div>
                </section>
                <section id="Security">
                  <hr />
                  <div className="row mt-5 mb-5">
                    <div className="col-md-2 text-center" />
                    <div className="col-6 col-md-2 text-center">
                      <a href="https://www.mcafee.com/" target="_blank">
                        <img src="assets/images/logo/sec1.png" alt="mcafee" />
                      </a>
                    </div>
                    <div className="col-6 col-md-2 text-center">
                      <a href="https://cointelegraph.com/" target="_blank">
                        <img src="assets/images/logo/sec2.png" alt="bbb" />
                      </a>
                    </div>
                    <div className="col-6 col-md-2 text-center">
                      <a href="https://www.huffpost.com/" target="_blank">
                        <img
                          src="assets/images/logo/sec3.png"
                          alt="trusted-verified"
                        />
                      </a>
                    </div>
                    <div className="col-6 col-md-2 text-center">
                      <a href="https://www.sitelock.com/" target="_blank">
                        <img src="assets/images/logo/sec4.png" alt="sitelock" />
                      </a>
                    </div>
                    <div className="col-md-2 text-center" />
                  </div>
                  <hr className="second_hr" />
                </section>
                <section id="Nftkart">
                  <div className="nft-top-blend-div" />
                  <div className="nft-bottom-blend-div" />
                  <img
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/nft-poster.png"
                    id="Nftvideo"
                  />
                  <img src="assets/images/line.svg" className="line" />
                  <div className="row">
                    <div className="col-md-7 col-sm-7 left-div">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 left">
                          <div className="row">
                            <div className="col-md-12 col-sm-12 nft-item">
                              <h4>OG Sheep</h4>
                              <h5>@udeen_lj</h5>
                              <img
                                src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg"
                                className="nft-img"
                                alt="online casino"
                              />
                              <button>2340 USDT</button>
                            </div>
                            <div className="col-md-12 col-sm-12 nft-item">
                              <h4>OG Sheep</h4>
                              <h5>@udeen_lj</h5>
                              <img
                                src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg"
                                className="nft-img"
                                alt="Crypto casino"
                              />
                              <button>10000 USDT</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 right">
                          <div className="row">
                            <div className="col-md-12 col-sm-12 nft-item">
                              <h4>OG Sheep</h4>
                              <h5>@udeen_lj</h5>
                              <img
                                src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg"
                                className="nft-img"
                                alt="metaverse Casino"
                              />
                              <button>2340 USDT</button>
                            </div>
                            <div className="col-md-12 col-sm-12 nft-item">
                              <h4>OG Sheep</h4>
                              <h5>@udeen_lj</h5>
                              <img
                                src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg"
                                className="nft-img"
                                alt="cryptocurrency casino"
                              />
                              <button>3500 USDT</button>
                            </div>
                            <div className="col-md-12 col-sm-12 nft-item">
                              <h4>OG Sheep</h4>
                              <h5>@udeen_lj</h5>
                              <img
                                src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg"
                                className="nft-img"
                                alt="online casino"
                              />
                              <button>2340 USDT</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-5 right-div">
                      <h3>NFTKart</h3>
                      <p className="first-p">
                        <span>
                          NFT's are the darling of Web3 and Maziverse is
                          incomplete without its exclusive collection.
                        </span>{" "}
                        Not just a collection, but we will have a builtin NFT
                        marketplace where users can trade actively.
                      </p>
                      <p>
                        {" "}
                        Apart from signature NFT's like Louis Vuitton chairs
                        &amp; Cartier Roulette wheels, users will also be able
                        to mint their own tokens as well. These non-fungible
                        tokens will also be integrated seamlessly in the
                        gameplay which will add more value to multiplayer
                        gaming.{" "}
                      </p>
                      <p>
                        {" "}
                        Furthermore, you can customise your avatar with NFT
                        accessories from premium brands along with other luxury
                        items. Everything in your widest desire is just a click
                        away with our NFTs. Be it a swanky car or a lux yacht,
                        you got everything required to make a splash. Use these
                        fancy NFTs and make heads turn with your grand entry to
                        the floor 😎{" "}
                      </p>
                    </div>
                  </div>
                </section>
                <section id="NftkartMobile">
                  <img
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/nft-poster.png"
                    id="NftvideoMobile"
                  />
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h2>NFTKart</h2>
                      <br />
                      <p className="mt-5">
                        <span>
                          NFT's are the darling of Web3 and Maziverse is
                          incomplete without its exclusive collection.
                        </span>{" "}
                        Not just a collection, but we will have a builtin NFT
                        marketplace where users can trade actively.
                      </p>
                      <p className="mt-4">
                        {" "}
                        Apart from signature NFT's like Louis Vuitton chairs
                        &amp; Cartier Roulette wheels, users will also be able
                        to mint their own tokens as well. These non-fungible
                        tokens will also be integrated seamlessly in the
                        gameplay which will add more value to multiplayer
                        gaming.{" "}
                      </p>
                      <p className="mt-4 mb-5">
                        {" "}
                        Furthermore, you can customise your avatar with NFT
                        accessories from premium brands along with other luxury
                        items. Everything in your widest desire is just a click
                        away with our NFTs. Be it a swanky car or a lux yacht,
                        you got everything required to make a splash. Use these
                        fancy NFTs and make heads turn with your grand entry to
                        the floor 😎{" "}
                      </p>
                      <br />
                      <hr />
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12" id="nft-mobile-slider">
                      <div
                        className="slick-slider slider-images slick-initialized"
                        dir="ltr"
                      >
                        <button
                          type="button"
                          data-role="none"
                          className="slick-arrow slick-prev"
                          style={{ display: "block" }}
                        >
                          {" "}
                          Previous{" "}
                        </button>
                        <div className="slick-list">
                          <div
                            className="slick-track"
                            style={{
                              opacity: 1,
                              transform: "translate3d(-552px, 0px, 0px)",
                              width: 3312,
                            }}
                          >
                            <div
                              data-index={-2}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 276 }}
                            >
                              <div>
                                <div
                                  className="nft-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h4>OG Sheep</h4>
                                  <h5>@udeen_lj</h5>
                                  <img
                                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg"
                                    className="nft-img"
                                    alt="cryptocurrency casino"
                                  />
                                  <button>3500 USDT</button>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={-1}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 276 }}
                            >
                              <div>
                                <div
                                  className="nft-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h4>OG Sheep</h4>
                                  <h5>@udeen_lj</h5>
                                  <img
                                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg"
                                    className="nft-img"
                                    alt="online casino"
                                  />
                                  <button>2340 USDT</button>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={0}
                              className="slick-slide slick-active slick-current"
                              tabIndex={-1}
                              aria-hidden="false"
                              style={{ outline: "none", width: 276 }}
                            >
                              <div>
                                <div
                                  className="nft-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h4>OG Sheep</h4>
                                  <h5>@udeen_lj</h5>
                                  <img
                                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg"
                                    className="nft-img"
                                    alt="online casino"
                                  />
                                  <button>2340 USDT</button>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={1}
                              className="slick-slide slick-active"
                              tabIndex={-1}
                              aria-hidden="false"
                              style={{ outline: "none", width: 276 }}
                            >
                              <div>
                                <div
                                  className="nft-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h4>OG Sheep</h4>
                                  <h5>@udeen_lj</h5>
                                  <img
                                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg"
                                    className="nft-img"
                                    alt="Crypto casino"
                                  />
                                  <button>10000 USDT</button>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={2}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 276 }}
                            >
                              <div>
                                <div
                                  className="nft-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h4>OG Sheep</h4>
                                  <h5>@udeen_lj</h5>
                                  <img
                                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg"
                                    className="nft-img"
                                    alt="metaverse Casino"
                                  />
                                  <button>2340 USDT</button>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={3}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 276 }}
                            >
                              <div>
                                <div
                                  className="nft-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h4>OG Sheep</h4>
                                  <h5>@udeen_lj</h5>
                                  <img
                                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg"
                                    className="nft-img"
                                    alt="cryptocurrency casino"
                                  />
                                  <button>3500 USDT</button>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={4}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 276 }}
                            >
                              <div>
                                <div
                                  className="nft-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h4>OG Sheep</h4>
                                  <h5>@udeen_lj</h5>
                                  <img
                                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg"
                                    className="nft-img"
                                    alt="online casino"
                                  />
                                  <button>2340 USDT</button>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={5}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 276 }}
                            >
                              <div>
                                <div
                                  className="nft-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h4>OG Sheep</h4>
                                  <h5>@udeen_lj</h5>
                                  <img
                                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg"
                                    className="nft-img"
                                    alt="online casino"
                                  />
                                  <button>2340 USDT</button>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={6}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 276 }}
                            >
                              <div>
                                <div
                                  className="nft-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h4>OG Sheep</h4>
                                  <h5>@udeen_lj</h5>
                                  <img
                                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg"
                                    className="nft-img"
                                    alt="Crypto casino"
                                  />
                                  <button>10000 USDT</button>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={7}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 276 }}
                            >
                              <div>
                                <div
                                  className="nft-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h4>OG Sheep</h4>
                                  <h5>@udeen_lj</h5>
                                  <img
                                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg"
                                    className="nft-img"
                                    alt="metaverse Casino"
                                  />
                                  <button>2340 USDT</button>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={8}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 276 }}
                            >
                              <div>
                                <div
                                  className="nft-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h4>OG Sheep</h4>
                                  <h5>@udeen_lj</h5>
                                  <img
                                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg"
                                    className="nft-img"
                                    alt="cryptocurrency casino"
                                  />
                                  <button>3500 USDT</button>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={9}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 276 }}
                            >
                              <div>
                                <div
                                  className="nft-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h4>OG Sheep</h4>
                                  <h5>@udeen_lj</h5>
                                  <img
                                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg"
                                    className="nft-img"
                                    alt="online casino"
                                  />
                                  <button>2340 USDT</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          data-role="none"
                          className="slick-arrow slick-next"
                          style={{ display: "block" }}
                        >
                          {" "}
                          Next{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="Collection">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 collection-inner">
                      <div className="row">
                        <div className="col-md-1 col-sm-1 text-center left image-center">
                          <img src="/assets/images/collection-txt.svg" />
                        </div>
                        <div
                          className="col-md-11 col-sm-11 right"
                          id="collection-slider"
                        >
                          <div
                            className="slick-slider slider-images slick-initialized"
                            dir="ltr"
                          >
                            <button
                              type="button"
                              data-role="none"
                              className="slick-arrow slick-prev"
                              style={{ display: "block" }}
                            >
                              {" "}
                              Previous{" "}
                            </button>
                            <div className="slick-list">
                              <div
                                className="slick-track"
                                style={{
                                  opacity: 1,
                                  transform: "translate3d(0px, 0px, 0px)",
                                  transition:
                                    "-webkit-transform 2000ms ease 0s",
                                }}
                              >
                                <div
                                  data-index={-5}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={-4}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={-3}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={-2}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={-1}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={0}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={1}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={2}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={3}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={4}
                                  className="slick-slide slick-active slick-current"
                                  tabIndex={-1}
                                  aria-hidden="false"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={5}
                                  className="slick-slide slick-active"
                                  tabIndex={-1}
                                  aria-hidden="false"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={6}
                                  className="slick-slide slick-active"
                                  tabIndex={-1}
                                  aria-hidden="false"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={7}
                                  className="slick-slide slick-active"
                                  tabIndex={-1}
                                  aria-hidden="false"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={8}
                                  className="slick-slide slick-active"
                                  tabIndex={-1}
                                  aria-hidden="false"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={9}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={10}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={11}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={12}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={13}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={14}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={15}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={16}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={17}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={18}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={19}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={20}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={21}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={22}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={23}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={24}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={25}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={26}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={27}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={28}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={29}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={30}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={31}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={32}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={33}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={34}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={35}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={36}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={37}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={38}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={39}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 0 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              data-role="none"
                              className="slick-arrow slick-next"
                              style={{ display: "block" }}
                            >
                              {" "}
                              Next{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="CollectionMobile">
                  <div className="row">
                    <div className="col-12 collection-inner">
                      <div className="row">
                        <div className="col-2 text-center left">
                          <img src="assets/images/collection-txt.svg" />
                        </div>
                        <div
                          className="col-10 right"
                          id="collection-mobile-slider"
                        >
                          <div
                            className="slick-slider slider-images slick-initialized"
                            dir="ltr"
                          >
                            <button
                              type="button"
                              data-role="none"
                              className="slick-arrow slick-prev"
                              style={{ display: "block" }}
                            >
                              {" "}
                              Previous{" "}
                            </button>
                            <div className="slick-list">
                              <div
                                className="slick-track"
                                style={{
                                  opacity: 1,
                                  transform: "translate3d(-1356px, 0px, 0px)",
                                  width: 9492,
                                  transition:
                                    "-webkit-transform 2000ms ease 0s",
                                }}
                              >
                                <div
                                  data-index={-2}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={-1}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={0}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={1}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={2}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={3}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={4}
                                  className="slick-slide slick-active slick-current"
                                  tabIndex={-1}
                                  aria-hidden="false"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={5}
                                  className="slick-slide slick-active"
                                  tabIndex={-1}
                                  aria-hidden="false"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={6}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={7}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={8}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={9}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={10}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={11}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={12}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={13}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={14}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={15}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={16}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={17}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={18}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={19}
                                  className="slick-slide"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  style={{ outline: "none", width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={20}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={21}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={22}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={23}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={24}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={25}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={26}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={27}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={28}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={29}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={30}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={31}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={32}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={33}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={34}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={35}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={36}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_02.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={37}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_03.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={38}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-1"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_04.jpg" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-index={39}
                                  tabIndex={-1}
                                  className="slick-slide slick-cloned"
                                  aria-hidden="true"
                                  style={{ width: 226 }}
                                >
                                  <div>
                                    <div
                                      className="collection-item gradient-2"
                                      tabIndex={-1}
                                      style={{
                                        width: "100%",
                                        display: "inline-block",
                                      }}
                                    >
                                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_05.jpg" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              data-role="none"
                              className="slick-arrow slick-next"
                              style={{ display: "block" }}
                            >
                              {" "}
                              Next{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="Roadmap">
                  <img
                    src="assets/images/roadmap-bg.svg"
                    className="roadmap-bg"
                  />
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h2>Roadmap</h2>
                      <h3>
                        {" "}
                        HOW WE ARE GOING <br /> TO GO ABOUT{" "}
                        <span>ACHIEVING THIS?</span>
                      </h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12" id="roadmap-slider">
                      <div>
                        <button className="roadmapprev">
                          <img
                            src="assets/images/lt.png"
                            style={{ width: "20%" }}
                          />
                        </button>
                        <button className="roadmapnext">
                          <img
                            src="assets/images/gt.png"
                            style={{ width: "20%" }}
                          />
                        </button>
                      </div>
                      <div
                        className="slick-slider slider-images slick-initialized"
                        dir="ltr"
                      >
                        <button
                          type="button"
                          data-role="none"
                          className="slick-arrow slick-prev"
                          style={{ display: "block" }}
                        >
                          {" "}
                          Previous{" "}
                        </button>
                        <div className="slick-list">
                          <div
                            className="slick-track"
                            style={{
                              opacity: 1,
                              transform: "translate3d(0px, 0px, 0px)",
                            }}
                          >
                            <div
                              data-index={-3}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q2 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch Partyverse.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch The Trading Floor.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={-2}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q3 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch AdventureVerse.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={-1}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q4 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch Influencer Verse.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={0}
                              className="slick-slide slick-active slick-current"
                              tabIndex={-1}
                              aria-hidden="false"
                              style={{ outline: "none", width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <img
                                    src="assets/images/done.svg"
                                    className="done"
                                  />
                                  <h3>Q1</h3>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Initial Idea.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Core Team Building.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Multi Metaverse Idea Conceptualization.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    First version of website.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Parallel Metaverse development.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={1}
                              className="slick-slide slick-active"
                              tabIndex={-1}
                              aria-hidden="false"
                              style={{ outline: "none", width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q2</h3>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Advisors and Team Building.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Enhanced website.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    First Gameplay video.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    25K Telegram community.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Metaverse Casino Game Theory.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Casino license and live casino Agreement
                                    sign.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Metaverse Phase 1 development completed.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Influencer on board.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Multiple PR's.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={2}
                              className="slick-slide slick-active"
                              tabIndex={-1}
                              aria-hidden="false"
                              style={{ outline: "none", width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q3</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Core Team Reveal.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    First ever Mazimatic's AMA.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Metaverse Casino Gameplay trailer launch.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Whitepaper and Tokenomics launch.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Seed Sale and Private sale 1 &amp; 2.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    NFTKart launch and NFT's 1st Batch sale.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Prototype gameplay for Community.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    35K Telegram community.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Real time Casino integration and testing.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Brand Ambassador onboarding.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={3}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q4</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Decentralize exchange Deployment.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    High end PR and Gameplay marketing.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    ICO and listing on Multiple exchanges
                                    including Huobi, OKKEX and Gate.io.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Metaverse Casino Gameplay with $ 100K chips.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    How to Play Mazimatic Casino video.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Official App Launch - MaziMatic (Apple,
                                    Android, Windows and VR).
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    MaziMatic Casino Go-live.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Sports Betting and Fantasy Sports
                                    Integration.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={4}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q1 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Metaverse Partyverse development.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Meta Governance Launch.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    All apps update.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    In game large scale production cycles.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Selected NFT's to partner as an Avatar in
                                    the gameplay.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={5}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q2 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch Partyverse.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch The Trading Floor.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={6}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q3 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch AdventureVerse.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={7}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q4 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch Influencer Verse.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={8}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <img
                                    src="assets/images/done.svg"
                                    className="done"
                                  />
                                  <h3>Q1</h3>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Initial Idea.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Core Team Building.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Multi Metaverse Idea Conceptualization.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    First version of website.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Parallel Metaverse development.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={9}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q2</h3>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Advisors and Team Building.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Enhanced website.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    First Gameplay video.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    25K Telegram community.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Metaverse Casino Game Theory.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Casino license and live casino Agreement
                                    sign.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Metaverse Phase 1 development completed.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Influencer on board.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Multiple PR's.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={10}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q3</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Core Team Reveal.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    First ever Mazimatic's AMA.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Metaverse Casino Gameplay trailer launch.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Whitepaper and Tokenomics launch.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Seed Sale and Private sale 1 &amp; 2.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    NFTKart launch and NFT's 1st Batch sale.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Prototype gameplay for Community.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    35K Telegram community.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Real time Casino integration and testing.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Brand Ambassador onboarding.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={11}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q4</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Decentralize exchange Deployment.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    High end PR and Gameplay marketing.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    ICO and listing on Multiple exchanges
                                    including Huobi, OKKEX and Gate.io.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Metaverse Casino Gameplay with $ 100K chips.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    How to Play Mazimatic Casino video.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Official App Launch - MaziMatic (Apple,
                                    Android, Windows and VR).
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    MaziMatic Casino Go-live.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Sports Betting and Fantasy Sports
                                    Integration.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={12}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q1 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Metaverse Partyverse development.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Meta Governance Launch.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    All apps update.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    In game large scale production cycles.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Selected NFT's to partner as an Avatar in
                                    the gameplay.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={13}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q2 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch Partyverse.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch The Trading Floor.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={14}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q3 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch AdventureVerse.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={15}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 0 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q4 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch Influencer Verse.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          data-role="none"
                          className="slick-arrow slick-next"
                          style={{ display: "block" }}
                        >
                          {" "}
                          Next{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="RoadmapMobile">
                  <img
                    src="assets/images/roadmap-mobile-bg.svg"
                    className="roadmap-mobile-bg"
                  />
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h2>Roadmap</h2>
                      <h3>
                        {" "}
                        HOW WE ARE GOING TO GO ABOUT <br /> ACHIEVING THIS?{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1" />
                    <div className="col-10" id="roadmap-mobile-slider">
                      <div>
                        <button className="roadmapprev">
                          <img
                            src="assets/images/lt.png"
                            style={{ width: "20%" }}
                          />
                        </button>
                        <button className="roadmapnext">
                          <img
                            src="assets/images/gt.png"
                            style={{ width: "20%" }}
                          />
                        </button>
                      </div>
                      <div
                        className="slick-slider slider-images slick-initialized"
                        dir="ltr"
                      >
                        <button
                          type="button"
                          data-role="none"
                          className="slick-arrow slick-prev"
                          style={{ display: "block" }}
                        >
                          {" "}
                          Previous{" "}
                        </button>
                        <div className="slick-list">
                          <div
                            className="slick-track"
                            style={{
                              opacity: 1,
                              transform: "translate3d(-455px, 0px, 0px)",
                              width: 7735,
                            }}
                          >
                            <div
                              data-index={-1}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q4 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch Influencer Verse.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={0}
                              className="slick-slide slick-active slick-current"
                              tabIndex={-1}
                              aria-hidden="false"
                              style={{ outline: "none", width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <img
                                    src="assets/images/done.svg"
                                    className="done"
                                  />
                                  <h3>Q1</h3>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Initial Idea.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Core Team Building.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Multi Metaverse Idea Conceptualization.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    First version of website.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Parallel Metaverse development.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={1}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q2</h3>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Advisors and Team Building.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Enhanced website.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    First Gameplay video.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    25K Telegram community.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Metaverse Casino Game Theory.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Casino license and live casino Agreement
                                    sign.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Metaverse Phase 1 development completed.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Influencer on board.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Multiple PR's.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={2}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q3</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Core Team Reveal.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    First ever Mazimatic's AMA.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Metaverse Casino Gameplay trailer launch.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Whitepaper and Tokenomics launch.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Seed Sale and Private sale 1 &amp; 2.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    NFTKart launch and NFT's 1st Batch sale.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Prototype gameplay for Community.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    35K Telegram community.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Real time Casino integration and testing.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Brand Ambassador onboarding.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={3}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q4</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Decentralize exchange Deployment.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    High end PR and Gameplay marketing.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    ICO and listing on Multiple exchanges
                                    including Huobi, OKKEX and Gate.io.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Metaverse Casino Gameplay with $ 100K chips.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    How to Play Mazimatic Casino video.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Official App Launch - MaziMatic (Apple,
                                    Android, Windows and VR).
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    MaziMatic Casino Go-live.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Sports Betting and Fantasy Sports
                                    Integration.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={4}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q1 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Metaverse Partyverse development.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Meta Governance Launch.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    All apps update.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    In game large scale production cycles.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Selected NFT's to partner as an Avatar in
                                    the gameplay.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={5}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q2 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch Partyverse.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch The Trading Floor.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={6}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q3 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch AdventureVerse.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={7}
                              className="slick-slide"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ outline: "none", width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q4 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch Influencer Verse.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={8}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <img
                                    src="assets/images/done.svg"
                                    className="done"
                                  />
                                  <h3>Q1</h3>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Initial Idea.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Core Team Building.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Multi Metaverse Idea Conceptualization.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    First version of website.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Parallel Metaverse development.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={9}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q2</h3>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Advisors and Team Building.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Enhanced website.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    First Gameplay video.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    25K Telegram community.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Metaverse Casino Game Theory.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Casino license and live casino Agreement
                                    sign.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Metaverse Phase 1 development completed.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Influencer on board.
                                  </p>
                                  <p>
                                    <img src="assets/images/check.svg" />
                                    Multiple PR's.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={10}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q3</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Core Team Reveal.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    First ever Mazimatic's AMA.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Metaverse Casino Gameplay trailer launch.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Whitepaper and Tokenomics launch.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Seed Sale and Private sale 1 &amp; 2.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    NFTKart launch and NFT's 1st Batch sale.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Prototype gameplay for Community.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    35K Telegram community.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Real time Casino integration and testing.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Brand Ambassador onboarding.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={11}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q4</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Decentralize exchange Deployment.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    High end PR and Gameplay marketing.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    ICO and listing on Multiple exchanges
                                    including Huobi, OKKEX and Gate.io.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Metaverse Casino Gameplay with $ 100K chips.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    How to Play Mazimatic Casino video.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Official App Launch - MaziMatic (Apple,
                                    Android, Windows and VR).
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    MaziMatic Casino Go-live.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Sports Betting and Fantasy Sports
                                    Integration.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={12}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q1 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Metaverse Partyverse development.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Meta Governance Launch.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    All apps update.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    In game large scale production cycles.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Selected NFT's to partner as an Avatar in
                                    the gameplay.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={13}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q2 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch Partyverse.
                                  </p>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch The Trading Floor.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={14}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q3 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch AdventureVerse.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              data-index={15}
                              tabIndex={-1}
                              className="slick-slide slick-cloned"
                              aria-hidden="true"
                              style={{ width: 455 }}
                            >
                              <div>
                                <div
                                  className="roadmap-item"
                                  tabIndex={-1}
                                  style={{
                                    width: "100%",
                                    display: "inline-block",
                                  }}
                                >
                                  <h3>Q4 2023</h3>
                                  <p>
                                    <img
                                      src="assets/images/loader.gif"
                                      style={{
                                        height: 60,
                                        width: 60,
                                        marginLeft: "-18px",
                                        marginTop: "-12px",
                                      }}
                                    />
                                    Launch Influencer Verse.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          data-role="none"
                          className="slick-arrow slick-next"
                          style={{ display: "block" }}
                        >
                          {" "}
                          Next{" "}
                        </button>
                      </div>
                    </div>
                    <div className="col-1" />
                  </div>
                </section>
                <section id="Features">
                  <img
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/features-focus-1.png"
                    className="features-focus-1"
                  />
                  <img
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/features-focus-2.png"
                    className="features-focus-2"
                  />
                  <img
                    src="assets/images/left-lines.png"
                    className="left-lines"
                  />
                  <img
                    src="assets/images/right-lines.png"
                    className="right-lines"
                  />
                  <img src="assets/images/line.svg" className="bottom-line" />
                  <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                      <h2>Features</h2>
                      <h3>CASINO VERSE</h3>
                      <img src="assets/images/line.svg" className="top-line" />
                    </div>
                  </div>
                  <div className="features-outer">
                    <img src="assets/images/line.svg" className="middle-line" />
                    <div className="row features-inner">
                      <div className="col-md-4 col-sm-4 video-div">
                        <img
                          src="https://mazimatic.s3.ap-south-1.amazonaws.com/feature-poster-1.png"
                          id="Featuresvideo"
                        />
                      </div>
                      <div className="col-md-4 col-sm-4 text-div">
                        <h4>PROTOTYPE</h4>
                        <ul>
                          <li>
                            {" "}
                            -&nbsp;&nbsp;&nbsp;&nbsp; Select Characters/Avatars{" "}
                          </li>
                          <li>-&nbsp;&nbsp;&nbsp;&nbsp; American Roulette</li>
                          <li>-&nbsp;&nbsp;&nbsp;&nbsp; Invite Friends</li>
                          <li>
                            -&nbsp;&nbsp;&nbsp;&nbsp; Real Time voice chat
                          </li>
                          <li>
                            {" "}
                            -&nbsp;&nbsp;&nbsp;&nbsp; Feel the casino
                            environment{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-sm-4 text-div">
                        <h4>FINAL BUILD</h4>
                        <ul>
                          <li>
                            {" "}
                            -&nbsp;&nbsp;&nbsp;&nbsp; Select Characters/Avatars{" "}
                          </li>
                          <li>-&nbsp;&nbsp;&nbsp;&nbsp; Customize Avatars</li>
                          <li>-&nbsp;&nbsp;&nbsp;&nbsp; Connect Wallet</li>
                          <li>
                            -&nbsp;&nbsp;&nbsp;&nbsp; Buy Avatars/Characters
                          </li>
                          <li>-&nbsp;&nbsp;&nbsp;&nbsp; Buy Chips</li>
                          <li>
                            -&nbsp;&nbsp;&nbsp;&nbsp; Real-time Voice Chats
                          </li>
                          <li>
                            {" "}
                            -&nbsp;&nbsp;&nbsp;&nbsp; Real Life game experience{" "}
                          </li>
                          <li>-&nbsp;&nbsp;&nbsp;&nbsp; Ambient Lightings</li>
                          <li>-&nbsp;&nbsp;&nbsp;&nbsp; Select Dealers</li>
                          <li>
                            {" "}
                            -&nbsp;&nbsp;&nbsp;&nbsp; Change tables/machines (
                            Free Play ){" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                      <h2>Our Partners</h2>
                    </div>
                  </div>
                  <div className="row first-row">
                    <img src="saita.png" className="partnerimage" />
                  </div>
                </section>
                <section id="FeaturesMobile">
                  <img
                    src="assets/images/features-left.png"
                    className="features-left"
                  />
                  <img
                    src="assets/images/features-right.png"
                    className="features-right"
                  />
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h2>Features</h2>
                      <h3>CASINO VERSE</h3>
                      <hr />
                      <h4>PROTOTYPE</h4>
                      <p className="mt-5">- Select Characters/Avatars</p>
                      <p>- American Roulette</p>
                      <p>- Invite Friends</p>
                      <p>- Real Time voice chat</p>
                      <p>- Feel the casino environment</p>
                      <h4>FINAL BUILD</h4>
                      <p className="mt-5">- Select Characters/Avatars</p>
                      <p>- Customize Avatars</p>
                      <p>- Connect Wallet</p>
                      <p>- Buy Avatars/Characters</p>
                      <p>- Buy Chips</p>
                      <p>- Real-time Voice Chats</p>
                      <p>- Real Life game experience</p>
                      <p>- Ambient Lightings</p>
                      <p>- Select Dealers</p>
                      <p>- Change tables/machines ( Free Play )</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                      <h2>Our Partners</h2>
                    </div>
                  </div>
                  <div className="features-outer">
                    <img src="saita.png" className="partnerimage" />
                  </div>
                </section>
                <section id="Comingsoon">
                  <div className="row">
                    <div className="col-md-6 col-12 left text-center">
                      <img src="assets/images/comingsoon-border.png" />
                      <h2>Whitepaper</h2>
                      <a
                        target="_blank"
                        href="whitepaper"
                        className="whitepaper"
                      >
                        View
                      </a>
                    </div>
                    <div className="col-md-6 col-12 right text-center">
                      <img src="assets/images/comingsoon-border.png" />
                      <h2>Tokenomics</h2>
                      <a
                        target="_blank"
                        href="whitepaper#Tokenomics"
                        className="whitepaper"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </section>
                <section id="ComingsoonMobile">
                  <div className="row">
                    <div className="col-md-12 left text-center">
                      <img src="assets/images/comingsoon-border.png" />
                      <h2>Whitepaper</h2>
                      <a
                        target="_blank"
                        href="whitepaper"
                        className="whitepaper"
                      >
                        View
                      </a>
                    </div>
                    <div className="col-md-12 right text-center mt-5">
                      <img src="assets/images/comingsoon-border.png" />
                      <h2>Tokenomics</h2>
                      <a
                        target="_blank"
                        href="whitepaper#Tokenomics"
                        className="whitepaper"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </section>
                <section id="TeamMobile">
                  <img
                    src="assets/images/team-mobile-bg.svg"
                    className="team-mobile-bg"
                  />
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h2>Our Team</h2>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-6 top-member text-center">
                      <img src="assets/images/karan.jpg" />
                      <p>Karan Bhandari</p>
                      <p>CEO / Co-Founder</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/karnn-bhandarii-b6914930/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://twitter.com/karanbhandari10"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 top-member mt-5 text-center">
                      <img src="assets/images/sehgal.jpg" />
                      <p>Prince Sehgal</p>
                      <p>COO / Co-Founder</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/prince-sehgal-48b21918b/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://twitter.com/Princesehgal01"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-6 top-member text-center">
                      <img
                        src="assets/images/mkay.png"
                        style={{ border: "2px solid rgb(255, 255, 255)" }}
                      />
                      <p>Mkay</p>
                      <p>CFO / Co-Founder</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://twitter.com/mannythehitman?t=zOyUIir5ftLBnIkb-0isFw&s=09"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 top-member mt-5 text-center">
                      <img src="assets/images/devanshu.jpg" />
                      <p>Devanshu Joshi</p>
                      <p>CTO / Co-Founder</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/devanshu-joshi-84595113a/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://twitter.com/cryptikdev"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-6 top-member text-center">
                      <img src="assets/images/vineet.jfif" />
                      <p>Vineet Miskin</p>
                      <p>CMO/Co-founder</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/vineet-miskin-a8b300162/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://twitter.com/vineet_miskin"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 top-member mt-5 text-center">
                      <img src="assets/images/saket.jpg" />
                      <p>Saket Joshi</p>
                      <p>Marketing Advisor/Co-founder</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/saket-joshi-47633a139/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://twitter.com/unfollowsaket"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-6 top-member text-center">
                      <img src="assets/images/pasoon.jfif" />
                      <p>Prasoon Agarwal</p>
                      <p>Strategic Advisor</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/agrawalprasoon/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://twitter.com/relishthisperk"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 top-member mt-5 text-center">
                      <img src="assets/images/uddalak.jfif" />
                      <p>Uddalak Das</p>
                      <p>Social Media Strategist</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/uddalak-das-crypto-nft-defi/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-4 bottom-member">
                      <img src="assets/images/ameen.png" />
                      <p>Ameen Ahmed</p>
                      <p>Strategic Partner - The Trading Floor</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/company/trading-game-strong/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://www.instagram.com/ameenahmed16/?igshid=YmMyMTA2M2Y%3D"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/instagram.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 bottom-member">
                      <img src="assets/images/cryptotrav.jpg" />
                      <p>Travladd Crypto</p>
                      <p>Strategic Marketing Advisor</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://twitter.com/OfficialTravlad/status/1581984992011251714?t=KXuE4x7JIPDzm8-yWko1eQ&s=19"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 bottom-member">
                      <img src="assets/images/soon.png" />
                      <p>Legal Head</p>
                    </div>
                    <div className="col-4 bottom-member">
                      <img src="assets/images/soon.png" />
                      <p>Marketing Advisor</p>
                    </div>
                    <div className="col-4 bottom-member">
                      <img src="assets/images/soon.png" />
                      <p>Community Management Advisor</p>
                    </div>
                    <div className="col-4 bottom-member">
                      <img src="assets/images/soon.png" />
                      <p>Technology Advisor</p>
                    </div>
                    <div className="col-4 bottom-member">
                      <img src="assets/images/soon.png" />
                      <p>PR Advisor</p>
                    </div>
                    <div className="col-4 bottom-member">
                      <img src="assets/images/soon.png" />
                      <p>Partnerships Advisor</p>
                    </div>
                  </div>
                </section>
                <section id="Team">
                  <img src="assets/images/team-bg.svg" className="team-bg" />
                  <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                      <h2>Our Team</h2>
                    </div>
                  </div>
                  <div className="row first-row">
                    <div className="col-md-3 col-sm-3 member text-center">
                      <img src="assets/images/karan.jpg" />
                      <p>Karan Bhandari</p>
                      <p>CEO / Co-Founder</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/karnn-bhandarii-b6914930/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://twitter.com/karanbhandari10"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 member bottom text-center">
                      <img src="assets/images/sehgal.jpg" />
                      <p>Prince Sehgal</p>
                      <p>COO / Co-Founder</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/prince-sehgal-48b21918b/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://twitter.com/Princesehgal01"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 member bottom text-center">
                      <img
                        src="assets/images/mkay.png"
                        style={{ border: "2px solid rgb(255, 255, 255)" }}
                      />
                      <p>MKay</p>
                      <p>CFO / Co-Founder</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://twitter.com/mannythehitman?t=zOyUIir5ftLBnIkb-0isFw&s=09"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 member text-center">
                      <img src="assets/images/devanshu.jpg" />
                      <p>Devanshu Joshi</p>
                      <p>CTO / Co-Founder</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/devanshu-joshi-84595113a/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://twitter.com/cryptikdev"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row second-row">
                    <div className="col-md-3 col-sm-3 member bottom text-center">
                      <img src="assets/images/saket.jpg" />
                      <p>Saket Joshi</p>
                      <p>Marketing Advisor/Co-founder</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/saket-joshi-47633a139/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://twitter.com/unfollowsaket"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 member bottom text-center">
                      <img src="assets/images/vineet.jfif" />
                      <p>Vineet Miskin</p>
                      <p>CMO/Co-founder</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/vineet-miskin-a8b300162/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://twitter.com/vineet_miskin"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 member col-sm-3 bottom text-center">
                      <img src="assets/images/pasoon.jfif" />
                      <p>Prasoon Agarwal</p>
                      <p>Strategic Advisor</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/agrawalprasoon/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                          <a
                            href="https://twitter.com/relishthisperk"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/twitter.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 member bottom text-center">
                      <img src="assets/images/uddalak.jfif" />
                      <p>Uddalak Das</p>
                      <p>Social Media Strategist</p>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <a
                            href="https://www.linkedin.com/in/uddalak-das-crypto-nft-defi/"
                            target="_blank"
                          >
                            <img
                              src="assets/images/icons/linkedin.png"
                              className="social"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row third-row">
                    <div className="col-md-3 col-sm-3">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 sub-member">
                          <img src="assets/images/cryptotrav.jpg" />
                          <p>Travladd Crypto</p>
                          <p>Strategic Marketing Advisor</p>
                          <div className="row">
                            <div className="col-md-12 text-center">
                              <a
                                href="https://twitter.com/OfficialTravlad/status/1581984992011251714?t=KXuE4x7JIPDzm8-yWko1eQ&s=19"
                                target="_blank"
                              >
                                <img
                                  src="assets/images/icons/twitter.png"
                                  className="social"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 sub-member">
                          <img src="assets/images/ameen.png" />
                          <p>Ameen Ahmed</p>
                          <p>Strategic Partner - The Trading Floor</p>
                          <div className="row">
                            <div className="col-md-12 text-center">
                              <a
                                href="https://www.linkedin.com/company/trading-game-strong/"
                                target="_blank"
                              >
                                <img
                                  src="assets/images/icons/linkedin.png"
                                  className="social"
                                />
                              </a>
                              <a
                                href="https://www.instagram.com/ameenahmed16/?igshid=YmMyMTA2M2Y%3D"
                                target="_blank"
                              >
                                <img
                                  src="assets/images/icons/instagram.png"
                                  className="social"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 sub-member">
                          <img src="assets/images/soon.png" />
                          <p>PR Advisor</p>
                        </div>
                        <div className="col-md-6 col-sm-6 sub-member">
                          <img src="assets/images/soon.png" />
                          <p>Partnerships Advisor</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 sub-member">
                          <img src="assets/images/soon.png" />
                          <p>Legal Head</p>
                        </div>
                        <div className="col-md-6 col-sm-6 sub-member">
                          <img src="assets/images/soon.png" />
                          <p>Marketing Advisor</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 sub-member">
                          <img src="assets/images/soon.png" />
                          <p>Community Management Advisor</p>
                        </div>
                        <div className="col-md-6 col-sm-6 sub-member">
                          <img src="assets/images/soon.png" />
                          <p>Technology Advisor</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <div className="row" />
                    </div>
                  </div>
                </section>
                <section id="Contact">
                  <div className="Toastify" />
                  <img src="assets/images/line.svg" className="line-one" />
                  <img src="assets/images/line.svg" className="line-two" />
                  <img
                    src="assets/images/contact-triangle.png"
                    className="contact-triangle"
                  />
                  <img
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/contact-focus.png"
                    className="contact-focus"
                  />
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <img
                        src="https://mazimatic.s3.ap-south-1.amazonaws.com/contact-poster.png"
                        id="Contactvideo"
                      />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <h2>Contact Us</h2>
                      <div className="row first-row">
                        <div className="col-md-12 col-sm-12">
                          <input
                            type="text"
                            name="user_name"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>
                      <div className="row second-row">
                        <div className="col-md-12 col-sm-12">
                          <input
                            type="text"
                            name="user_email"
                            placeholder="Enter your email Id"
                          />
                        </div>
                      </div>
                      <div className="row second-row">
                        <div className="col-md-12 col-sm-12">
                          <textarea
                            name="message"
                            placeholder="Write your message here..."
                            rows={4}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <input
                        className="mt-4"
                        type="submit"
                        defaultValue="Send"
                      />
                    </div>
                  </div>
                </section>
                <section id="ContactMobile">
                  <div className="Toastify" />
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h2>Contact Us</h2>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Enter your name"
                        className="mt-5"
                      />
                      <input
                        type="text"
                        name="user_email"
                        placeholder="Enter your email Id"
                        className="mt-4"
                      />
                      <textarea
                        name="message"
                        placeholder="Write your message here..."
                        rows={4}
                        className="mt-4"
                        defaultValue={""}
                      />
                      <input
                        className="mt-4"
                        type="submit"
                        defaultValue="Send"
                      />
                      <button type="submit" className="sumb">
                        Send
                      </button>
                    </div>
                  </div>
                </section>
                <section id="Footer">
                  <img
                    src="assets/images/footer-bg.svg"
                    className="footer-bg"
                  />
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <img
                        src="assets/images/logo/logo.svg"
                        className="footer-logo"
                      />
                    </div>
                    <div className="col-md-4 col-sm-4 text-center">
                      <a href="#" className="to-top-a">
                        BACK TO TOP
                      </a>
                      <br />
                      <a href="#">
                        <img
                          src="assets/images/to-top.svg"
                          className="to-top-img"
                        />
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-4 text-right" />
                  </div>
                  <div className="row link-row">
                    <div className="col-md-2 col-sm-2" />
                    <div className="col-md-8 col-sm-8">
                      <a href="#our-vision">
                        <p>Our Vision</p>
                      </a>
                      <a href="#mazi-verse">
                        <p>MaziVerse</p>
                      </a>
                      <a href="#Nftkart">
                        <p>NFT's</p>
                      </a>
                      <a href="#Roadmap">
                        <p>RoadMap</p>
                      </a>
                      <a href="#Features">
                        <p>Features</p>
                      </a>
                    </div>
                    <div className="col-md-2 col-sm-2" />
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12 bottom-row">
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <p>Copyright | MaziMatic 2022</p>
                        </div>
                        <div className="col-md-6 col-sm-6 text-right">
                          <a href="privacy-policy">Privacy Policy |</a>
                          <a href="terms-and-conditions">
                            Terms &amp; Conditions |
                          </a>
                          <a href="disclaimer">Disclaimer </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="FooterMobile">
                  <img
                    src="assets/images/footer-mobile-bg.svg"
                    className="footer-mobile-bg"
                  />
                  <div className="row">
                    <div className="col-md-12 text-center top-div">
                      <a href="#" className="to-top-a">
                        BACK TO TOP
                      </a>
                      <br />
                      <a href="#">
                        <img
                          src="assets/images/to-top.svg"
                          className="to-top-img"
                        />
                      </a>
                      <br />
                      <img
                        src="assets/images/footer-mobile-logo.svg"
                        className="footer-mobile-logo"
                      />
                      <div className="row link-row">
                        <div className="col-md-12">
                          <a href="#OurVisionMobile">
                            <p>Our Vision</p>
                          </a>
                          <a href="#MaziVerseMobile">
                            <p>MaziVerse</p>
                          </a>
                          <a href="#NftkartMobile">
                            <p>NFT's</p>
                          </a>
                          <a href="#RoadmapMobile">
                            <p>RoadMap</p>
                          </a>
                          <a href="#FeaturesMobile">
                            <p>Features</p>
                          </a>
                        </div>
                      </div>
                      <br />
                      <a
                        href="https://instagram.com/mazimatic.official?utm_medium=copy_link"
                        target="_blank"
                      >
                        <img
                          src="assets/images/icons/instagram.svg"
                          className="social"
                        />
                      </a>
                      <a href="https://t.me/mazimatic" target="_blank">
                        <img
                          src="assets/images/icons/telegram.svg"
                          className="social"
                        />
                      </a>
                      <a
                        href="https://m.facebook.com/mazimatic/"
                        target="_blank"
                      >
                        <img
                          src="assets/images/icons/facebook.svg"
                          className="social"
                        />
                      </a>
                      <a
                        href="https://twitter.com/mazimatic?s=11"
                        target="_blank"
                      >
                        <img
                          src="assets/images/icons/twitter.svg"
                          className="social"
                        />
                      </a>
                    </div>
                    <div className="col-md-12 bottom-div text-center">
                      <p className="mt-5">Copyright | MaziMatic 2022</p>
                      <a href="privacy-policy">Privacy Policy |</a>
                      <a href="terms-and-conditions">
                        Terms &amp; Conditions |
                      </a>
                      <a href="disclaimer">Disclaimer </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <next-route-announcer>
            <p
              aria-live="assertive"
              id="__next-route-announcer__"
              role="alert"
              style={{
                border: 0,
                clip: "rect(0px, 0px, 0px, 0px)",
                height: 1,
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: 1,
                whiteSpace: "nowrap",
                overflowWrap: "normal",
              }}
            />
          </next-route-announcer>
        </form>

        <HomeFooterTags />
      </>
    );
  }
}
