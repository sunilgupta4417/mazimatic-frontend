import React, { useEffect, useRef } from 'react';
const OurVision = () => {

    // useEffect(() => {
    //     setTimeout(()=>{
    //         videoRef.current.play()
    //     },5000)
    // }, []);

    return (
        <section id="our-vision">
            {/* <video controls poster="https://mazimatic.s3.ap-south-1.amazonaws.com/poster.png"
            loop
            >
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/mazimatic.mp4"
                />
            </video> */}

            <iframe width="100%" height="800" src="https://www.youtube.com/embed/3MgqYz90GCM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div className='vision-content' id='vision-content'>
                <img src='/assets/images/vision-bg.png' className='vision-bg' />
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>Our Vision</h2>
                    </div>
                    <div className='col-md-6'>
                        <p><img src='/assets/images/vision-line.svg' /><span>Provide a never-like-before real world casino experience.</span> 
                         A virtual world for players to hang out and play-to-earn comfortably.</p>

                         <p><img src='/assets/images/vision-line.svg' /><span>Foster a high performing VR gaming environment</span> that rewards players generously. A platform that enables you to connect & play with friends anywhere in the world.</p>

                         <p><img src='/assets/images/vision-line.svg' /><span>Create a safe, secure and trust worthy Metaverse platform.</span> Use solid & bleeding edge web3 technology that scales to accommodate millions of users.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurVision;