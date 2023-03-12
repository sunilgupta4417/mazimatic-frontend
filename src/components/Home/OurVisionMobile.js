import React, { useEffect, useRef } from 'react';

const OurVisionMobile = () => {

  const videoRef = useRef();

    // useEffect(() => {
    //     setTimeout(()=>{
    //         videoRef.current.play()
    //     },5000)
    // }, []);

  return (
    <section id="OurVisionMobile">
        <img src="./assets/images/our-vision-bg.svg" className="our-vision-bg"/>

        


       <div className="row">
           <div className="col-md-12 text-center">
               <h3>Our Vision</h3>

               <p className="mt-5"><span>Provide a never-like-before real world casino experience.</span> A virtual world for players to hang out and play-to-earn comfortably.</p>
               <p className="mt-4"><span>Foster a high performing VR gaming environment</span> that rewards players generously. A platform that enables you to connect & play with friends anywhere in the world.</p>
               <p className="mt-4"><span>Create a safe, secure and trust worthy Metaverse platform.</span> Use solid & bleeding edge web3 technology that scales to accommodate millions of users.</p>


               {/* <video controls poster="https://mazimatic.s3.ap-south-1.amazonaws.com/poster.png"
            loop
            id="visionvideo">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/mazimatic.mp4"
                />
             </video> */}

<iframe width="100%" height="350" src="https://www.youtube.com/embed/3MgqYz90GCM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



               <h4 className="mt-5">Play more live more....<br/><span>Stay tuned</span></h4>


               {/* <a className="join-btn mt-4" rel="noopener noreferrer" href="https://t.me/mazimatic" target="_blank"><img src="/assets/images/icons/plane.svg" />JOIN OUR TELEGRAM GROUP </a><br/> */}
               <hr/>
               



           </div>
           </div> 
    </section>
  )
}

export default OurVisionMobile