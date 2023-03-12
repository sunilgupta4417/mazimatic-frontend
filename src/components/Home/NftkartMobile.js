import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NftkartMobile = () => {
  // const videoRef = useRef();

  // useEffect(() => {
  //     setTimeout(()=>{
  //         videoRef.current.play()
  //     },5000)
  // }, []);

  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    // autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: "slider-images",
  };

  return (
    <section id="NftkartMobile">
      {/* <video autoPlay ref={videoRef}
            loop
            muted id="NftvideoMobile">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/nft-video.mp4"
                />
</video> */}

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
              NFT's are the darling of Web3 and Maziverse is incomplete without
              its exclusive collection.
            </span>{" "}
            Not just a collection, but we will have a builtin NFT marketplace
            where users can trade actively.
          </p>
          <p className="mt-4">
            Apart from signature NFT's like Louis Vuitton chairs & Cartier
            Roulette wheels, users will also be able to mint their own tokens as
            well. These non-fungible tokens will also be integrated seamlessly
            in the gameplay which will add more value to multiplayer gaming.
          </p>
          <p className="mt-4 mb-5">
            Furthermore, you can customise your avatar with NFT accessories from
            premium brands along with other luxury items. Everything in your
            widest desire is just a click away with our NFTs. Be it a swanky car
            or a lux yacht, you got everything required to make a splash. Use
            these fancy NFTs and make heads turn with your grand entry to the
            floor 😎
          </p>
          <br />
          {/* <a className="join-btn mt-4" rel="noopener noreferrer" href="https://t.me/mazimatic" target="_blank"><img src="/assets/images/icons/plane.svg" />JOIN OUR TELEGRAM GROUP </a><br/> */}
          <hr />
          <br />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12" id="nft-mobile-slider">
          <Slider ref={(c) => setSliderRef(c)} {...settings}>
            <div className="nft-item">
              <h4>OG Sheep</h4>
              <h5>@udeen_lj</h5>
              <img
                src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg"
                className="nft-img"
                alt="online casino"
              />
              <button>2340 USDT</button>
            </div>
            <div className="nft-item">
              <h4>OG Sheep</h4>
              <h5>@udeen_lj</h5>
              <img
                src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg"
                className="nft-img"
                alt="Crypto casino"
              />
              <button>10000 USDT</button>
            </div>
            <div className="nft-item">
              <h4>OG Sheep</h4>
              <h5>@udeen_lj</h5>
              <img
                src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg"
                className="nft-img"
                alt="metaverse Casino"
              />
              <button>2340 USDT</button>
            </div>
            <div className="nft-item">
              <h4>OG Sheep</h4>
              <h5>@udeen_lj</h5>
              <img
                src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg"
                className="nft-img"
                alt="cryptocurrency casino"
              />
              <button>3500 USDT</button>
            </div>
            <div className="nft-item">
              <h4>OG Sheep</h4>
              <h5>@udeen_lj</h5>
              <img
                src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg"
                className="nft-img"
                alt="online casino"
              />
              <button>2340 USDT</button>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NftkartMobile;
