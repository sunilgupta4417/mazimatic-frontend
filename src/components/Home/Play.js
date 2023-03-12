import React from "react";

const Play = () => {
  return (
    <section id="Play">
      <div className="blend-div"></div>

      <div className="row play-outer">
        <div className="col-md-4 col-sm-4">
          <img src="/assets/images/left-lines.svg" className="left-lines-img" />
          <img
            src="https://mazimatic.s3.ap-south-1.amazonaws.com/pie.svg"
            className="left-pie-img"
            alt="online casino"
          />
          <h3 className="left-h3">
            <span>Fort-Knox</span>
            <br />
            SECURE
          </h3>
          <p className="left-p">
            We take security very seriously. Certik audited contracts. 24-7
            guarded by professionals.
          </p>
        </div>
        <div className="col-md-4 col-sm-4 play-div">
          <img
            src="https://mazimatic.s3.ap-south-1.amazonaws.com/shield.svg"
            className="shield-img"
            alt="Crypto casino"
          />
          <img
            src="https://mazimatic.s3.ap-south-1.amazonaws.com/big-pie.png"
            className="big-pie-img"
            alt="metaverse Casino"
          />
          {/* <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/play-char.png" className="play-char-img" alt='cryptocurrency casino'/> */}
          <h3 className="white-txt middle-h3">
            <span>
              Win every <br />
              time you
            </span>
            <br />
            PLAY
          </h3>
          <p className="middle-p">
            A Metaverse built for you to Win with style ✨ A Royale casino
            filled with experiences.
          </p>
        </div>
        <div className="col-md-4 col-sm-4">
          <img
            src="/assets/images/right-lines.svg"
            className="right-lines-img"
          />
          <img
            src="https://mazimatic.s3.ap-south-1.amazonaws.com/pie.svg"
            className="right-pie-img"
            alt="online casino"
          />
          <h3 className="right-h3">
            <span>World class</span>
            <br />
            SUPPORT
          </h3>
          <p className="right-p">
            Real-time support 24-7 over email & chat. Award winning 'Customer
            First' process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Play;
