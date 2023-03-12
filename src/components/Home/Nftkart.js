import React, { useEffect, useRef } from "react";

const Nftkart = () => {
  // const videoRef = useRef();

  // useEffect(() => {
  //     setTimeout(()=>{
  //         videoRef.current.play()
  //     },5000)
  // }, []);

  return (
    <section id="Nftkart">
      <div className="nft-top-blend-div"></div>
      <div className="nft-bottom-blend-div"></div>

      {/* <a className="join-btn" rel="noopener noreferrer" href="https://t.me/mazimatic" target="_blank"><img src="/assets/images/icons/plane.svg" />JOIN OUR TELEGRAM GROUP </a> */}

      {/* <video autoPlay ref={videoRef}
            width="250"
            loop
            muted id="Nftvideo">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/nft-video.mp4"
                />
</video> */}

      <img
        src="https://mazimatic.s3.ap-south-1.amazonaws.com/nft-poster.png"
        id="Nftvideo"
      />

      <img src="/assets/images/line.svg" className="line" />

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
              NFT's are the darling of Web3 and Maziverse is incomplete without
              its exclusive collection.
            </span>{" "}
            Not just a collection, but we will have a builtin NFT marketplace
            where users can trade actively.{" "}
          </p>
          <p>
            Apart from signature NFT's like Louis Vuitton chairs & Cartier
            Roulette wheels, users will also be able to mint their own tokens as
            well. These non-fungible tokens will also be integrated seamlessly
            in the gameplay which will add more value to multiplayer gaming.{" "}
          </p>
          <p>
            Furthermore, you can customise your avatar with NFT accessories from
            premium brands along with other luxury items. Everything in your
            widest desire is just a click away with our NFTs. Be it a swanky car
            or a lux yacht, you got everything required to make a splash. Use
            these fancy NFTs and make heads turn with your grand entry to the
            floor 😎
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nftkart;
