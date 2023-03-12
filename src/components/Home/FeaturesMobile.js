import React, { useEffect, useRef } from 'react';

const FeaturesMobile = () => {
    // const videoRef = useRef();

    // useEffect(() => {
    //     setTimeout(()=>{
    //         videoRef.current.play()
    //     },5000)
    // }, []);
  return (
    <section id="FeaturesMobile">
      <img src="./assets/images/features-left.png" className="features-left" />
      <img src="./assets/images/features-right.png" className="features-right" />
      <div className="row">
          <div className="col-md-12 text-center">
              <h2>Features</h2>

              <h3>CASINO VERSE</h3>
              <hr/>

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
            
              {/* <video autoPlay ref={videoRef}
            width="250"
            loop
            muted id="FeaturesvideoMobile">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/features-video.mp4"
                />
            </video>

            <video autoPlay ref={videoRef}
            loop
            muted id="FeaturesvideoMobile2">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/features-video-2.mp4"
                />
            </video> */}

          </div>
      </div>
	  
	  
	     <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                    <h2>Our Partners</h2>
                </div>  </div> 
                <div className="features-outer">
                  <img src="saita.png" className="partnerimage" />
                </div>

    </section>
  )
}

export default FeaturesMobile