import { React, useState, useEffect } from "react";

import HomeFooterTags from "../components/HomeFooterTags";
import HomeHeaderTags from "../components/HomeHeaderTags";
import HomeNavBar from "../components/HomeNavBar";
import LoadingScreen from "../components/LoadingScreen";
import Play from "../components/Home/Play";
import PlayMobile from "../components/Home/PlayMobile";
import OurVision from "../components/Home/OurVision";
import OurVisionMobile from "../components/Home/OurVisionMobile";
import Press from "../components/Home/Press";
import Verse from "../components/Home/Verse";
import VerseMobile from "../components/Home/VerseMobile";
import Security from "../components/Home/Security";
import Nftkart from "../components/Home/Nftkart";
import NftkartMobile from "../components/Home/NftkartMobile";
import Collection from "../components/Home/Collection";
import CollectionMobile from "../components/Home/CollectionMobile";
import Roadmap from "../components/Home/Roadmap";
import RoadmapMobile from "../components/Home/RoadmapMobile";
import Features from "../components/Home/Features";
import FeaturesMobile from "../components/Home/FeaturesMobile";
import Comingsoon from "../components/Home/Comingsoon";
import ComingsoonMobile from "../components/Home/ComingsoonMobile";
import Team from "../components/Home/Team";
import TeamMobile from "../components/Home/TeamMobile";
import Contact from "../components/Home/Contact";
import ContactMobile from "../components/Home/ContactMobile";
import Footer from "../components/Home/Footer";
import FooterMobile from "../components/Home/FooterMobile";
import LoginSignupCards from "../components/LogInSignUpCard/LoginSignupCards";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);

  // return (
  if (isLoaded) {
    return(<LoadingScreen />);
  } else {
    return (<>
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
      <Play />
      <PlayMobile />
      <OurVision />
      <OurVisionMobile />
      <Press />
      <Verse />
      <VerseMobile />
      <Security />
      <Nftkart />
      <NftkartMobile />
      <Collection />
      <CollectionMobile />
      <Roadmap />
      <RoadmapMobile />
      <Features />
      <FeaturesMobile />
      <Comingsoon />
      <ComingsoonMobile />
      <Team />
      <TeamMobile />
      <Contact />
      <ContactMobile />
      <Footer />
      <FooterMobile />
      <HomeFooterTags />
    </>);
    // );
  }
}
