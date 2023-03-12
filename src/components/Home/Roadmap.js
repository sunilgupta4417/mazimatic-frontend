import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Roadmap = () => {

    const [sliderRef, setSliderRef] = useState(null);

  const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        loop:true,
        autoplay: false,
        speed: 400,
        autoplaySpeed: 14000,
        slidesToShow: 3,
        slidesToScroll: 2,
        className: "slider-images",
    };

  return (
    <section id="Roadmap">
        <img src="/assets/images/roadmap-bg.svg" className="roadmap-bg" />
        <div className="row">
            <div className="col-md-12 text-center">
                <h2>Roadmap</h2>
                <h3>HOW WE ARE GOING<br/> TO GO ABOUT <span>ACHIEVING THIS?</span></h3>
            </div>
        </div>
      
      
      <div className="row">
          <div className="col-md-12" id="roadmap-slider">
          <div>
                        <button className="roadmapprev" onClick={() => sliderRef?.slickPrev()}>
                            <img style={{ width: 20 + '%' }} src="/assets/images/lt.png" />
                        </button>
                        <button className="roadmapnext" onClick={() => sliderRef?.slickNext()}>
                           <img style={{ width: 20 + '%' }} src="/assets/images/gt.png" />
                       </button>
          </div>
          <Slider ref={c => setSliderRef(c)} {...settings} >
            <div className="roadmap-item">
           
                        <img src="/assets/images/done.svg" className="done" />
                        <h3>Q1</h3>
                        <p><img src="/assets/images/check.svg"/>Initial Idea.</p> 
                        <p><img src="/assets/images/check.svg" />Core Team Building.</p>
                        <p><img src="/assets/images/check.svg" />Multi Metaverse Idea Conceptualization.</p>
                        <p><img src="/assets/images/check.svg" />First version of website.</p>
                        <p><img src="/assets/images/check.svg" />Parallel Metaverse development.</p>
                        </div>
                        <div className="roadmap-item">
              <h3>Q2</h3>
              <p><img src="/assets/images/check.svg" />Advisors and Team Building.</p>
                        <p><img src="/assets/images/check.svg" />Enhanced website.</p>
              <p><img src="/assets/images/check.svg" />First Gameplay video.</p>
              <p><img src="/assets/images/check.svg"  />25K Telegram community.</p>
              <p><img src="/assets/images/check.svg" />Metaverse Casino Game Theory.</p>
              <p><img src="/assets/images/check.svg"  />Casino license and live casino Agreement sign.</p>
              <p><img src="/assets/images/check.svg" />Metaverse Phase 1 development completed.</p>
              <p><img src="/assets/images/check.svg" />Influencer on board.</p>
              <p><img src="/assets/images/check.svg" />Multiple PR's.</p>
                        </div>
                        <div className="roadmap-item">
                        <h3>Q3</h3>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Core Team Reveal.</p>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>First ever Mazimatic's AMA.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />Metaverse Casino Gameplay trailer launch.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />Whitepaper and Tokenomics launch.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />Seed Sale and Private sale 1 & 2.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />NFTKart launch and NFT's 1st Batch sale.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />Prototype gameplay for Community.</p>
              
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />35K Telegram community.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />Real time Casino integration and testing.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />Brand Ambassador onboarding.</p>
              
                        </div>
                        <div className="roadmap-item">
                        <h3>Q4</h3>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Decentralize exchange Deployment.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />High end PR and Gameplay marketing.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />ICO and listing on Multiple exchanges including Huobi, OKKEX and Gate.io.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />Metaverse Casino Gameplay with $ 100K chips.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />How to Play Mazimatic Casino video.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />Official App Launch - MaziMatic (Apple, Android, Windows and VR).</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />MaziMatic Casino Go-live.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Sports Betting and Fantasy Sports Integration.</p>
            </div>
            

            <div className="roadmap-item">
                        <h3>Q1 2023</h3>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Metaverse Partyverse development.</p>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Meta Governance Launch.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />All apps update.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />In game large scale production cycles.</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />Selected NFT's to partner as an Avatar in the gameplay.</p>
            </div>
            

            <div className="roadmap-item">
                        <h3>Q2 2023</h3>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Launch Partyverse.</p>
						<p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Launch The Trading Floor.</p>
            </div>
            

            <div className="roadmap-item">
                        <h3>Q3 2023</h3>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Launch AdventureVerse.</p>

            </div>
            


            <div className="roadmap-item">
                        <h3>Q4 2023</h3>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Launch Influencer Verse.</p>
            </div>
           
            </Slider>
          </div>
      </div>


    </section>
  )
}

export default Roadmap