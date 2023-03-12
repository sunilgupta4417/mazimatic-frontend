import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CollectionMobile = () => {
    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        loop:true,
        autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        className: "slider-images",
    };
  return (
  <section id="CollectionMobile">
      <div className="row">
            <div className="col-12 collection-inner">
                <div className="row">
                    <div className="col-2 text-center left ">
                        <img src="/assets/images/collection-txt.svg" />
                        </div>
                    <div className="col-10 right" id="collection-mobile-slider">

                    <Slider ref={c => setSliderRef(c)} {...settings} >
                    <div className="collection-item gradient-1">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg" />
                        {/* <h3>Art</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_02.jpg" />
                        {/* <h3>Music</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-1">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_03.jpg" />
                        {/* <h3>Game</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg" />
                        {/* <h3>Virtual</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-1">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_02.jpg" />
                        {/* <h3>Video</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_03.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-1">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_04.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_05.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-1">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_02.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-1">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_03.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_04.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-1">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_05.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-1">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_02.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-1">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_02.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_03.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-1">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_04.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_05.jpg" />
                        {/* <h3>Sports</h3>
                        <p>NFT</p> */}
                        </div>
                    </Slider>

                        </div>
                    </div>
                </div>
            </div>
  </section>
  )
}

export default CollectionMobile