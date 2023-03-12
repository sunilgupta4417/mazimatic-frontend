import React from 'react'
import { useState } from 'react';

const Verse = () => {
 
    function showverse1(e) {
        var verseDiv = document.getElementById("verse-div");
        verseDiv.style.display = "none";

        var verseDiv1 = document.getElementById("verse-1-div");
        verseDiv1.style.opacity = "1";
        verseDiv1.style.position  = "relative";

      }  
      
      function showverse2(e) {
        var verseDiv = document.getElementById("verse-div");
        verseDiv.style.display = "none";

        var verseDiv2 = document.getElementById("verse-2-div");
        verseDiv2.style.opacity = "1";
        verseDiv2.style.position  = "relative";

      } 

      function showverse3(e) {
        var verseDiv = document.getElementById("verse-div");
        verseDiv.style.display = "none";

        var verseDiv3 = document.getElementById("verse-3-div");
        verseDiv3.style.opacity = "1";
        verseDiv3.style.position  = "relative";

      } 

      function showverse4(e) {
        var verseDiv = document.getElementById("verse-div");
        verseDiv.style.display = "none";

        var verseDiv4 = document.getElementById("verse-4-div");
        verseDiv4.style.opacity = "1";
        verseDiv4.style.position  = "relative";

      } 

      function showverse5(e) {
        var verseDiv = document.getElementById("verse-div");
        verseDiv.style.display = "none";

        var verseDiv5 = document.getElementById("verse-5-div");
        verseDiv5.style.opacity = "1";
        verseDiv5.style.position  = "relative";

      } 

      function showDefaultVerse(e) {
        var verseDiv = document.getElementById("verse-div");
        verseDiv.style.display = "inline-block";

       var verseDiv1 = document.getElementById("verse-1-div");
       verseDiv1.style.opacity = "0";
       verseDiv1.style.position = "absolute";
       var verseDiv2 = document.getElementById("verse-2-div");
       verseDiv2.style.opacity = "0";
       verseDiv2.style.position = "absolute";
       var verseDiv3 = document.getElementById("verse-3-div");
       verseDiv3.style.opacity = "0";
       verseDiv3.style.position = "absolute";
       var verseDiv4 = document.getElementById("verse-4-div");
       verseDiv4.style.opacity = "0";
       verseDiv4.style.position = "absolute";
       var verseDiv5 = document.getElementById("verse-5-div");
       verseDiv5.style.opacity = "0";
       verseDiv5.style.position = "absolute";
      }

  return (
    <section id="Verse">

        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse-focus-1.png" className="verse-focus-1" />
        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse-focus-2.png" className="verse-focus-2" />

     <div className="row">
         <div className="col-md-3 col-sm-3 text-left">
             <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/left-multi-arrows.svg" className="left-multi-arrows" />
         </div>
         <div className="col-md-6 col-sm-6 text-center">
             <h2>Enter the<br/> <span>MaziVerse</span></h2>
             </div>
          <div className="col-md-3 col-sm-3 text-right">
          <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/right-multi-arrows.svg" className="right-multi-arrows" />
              </div>   
         </div>

         

     <div id="verse-div">
     <img src="/assets/images/line.svg" className="main-line-one" />
     <img src="/assets/images/line.svg" className="main-line-two" />
      <div className="row verse-div" >
        <div className="col-md-3 col-sm-3 text-center" onClick ={showverse1}>
            <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse1.png" alt='online casino' />
            <button>*CASINO VERSE</button>
            </div>  
        <div className="col-md-3 col-sm-3 text-center" onClick ={showverse2}>
        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse2.png" alt='Crypto casino' />
           <button>PARTY VERSE</button>
            </div>  
        <div className="col-md-3 col-sm-3 text-center" onClick ={showverse3}>
        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse3.png" alt='metaverse Casino' />
            <button>ADVENTURE VERSE</button>
            </div>  
        <div className="col-md-3 col-sm-3 text-center" onClick ={showverse4}>
        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/influencer+_one.png" alt='cryptocurrency casino' /> 
            <button>INFLUENCER VERSE</button> 
            </div>
        <div className="col-md-3 col-sm-3 text-center" onClick ={showverse5}>
        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/trading_floor.png" alt='cryptocurrency casino' /> 
            <button>THE TRADING FLOOR</button> 
            </div>        
          </div>   
    </div>


 



            <div className="verse-divs" id="verse-1-div">
                <img src="/assets/images/line.svg" className="line-one" />
                <img src="/assets/images/line.svg" className="line-two" />
                <div className="row">
                  <div className="col-md-3 col-sm-3">
                  <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse1.png" className="main-img" alt='online casino' />
                      </div>  
                  <div className="col-md-6 col-sm-6">
                      <h3>CASINO VERSE</h3>
                      <p>We decided to take online casinos to a fascinating new level. Inside this virtual reality casino, you can play, win and earn while having a lot more fun. Bring your friends, family along into this alternate reality - no matter in which part of the world they are. Playing inside the casinoverse, you are attended by real croupiers and pit managers. The dealers assisting you are real people in real mega casinos across the world and it is live streamed! How cool is that? This new approach of live streaming games helps averting manipulation and ensures that users get good value for money. With this revolutionary approach we put a stop to bots and pre-programmed gaming outcomes, that always act to the benefit of the house. In casinoverse YOU win!</p>
                      </div>  
                  <div className="col-md-3 col-sm-3">
                      <img src="/assets/images/close.svg" className="close" onClick ={showDefaultVerse}  />
                      <img src="/assets/images/nft-img-3.png" className="right-img-1" alt='Crypto casino' />
                      <img src="/assets/images/nft-img-4.png" className="right-img-2" alt='metaverse Casino' />
                      </div>  
                </div>
            </div>

            <div className="verse-divs" id="verse-2-div">
                <img src="/assets/images/line.svg" className="line-one" />
                <img src="/assets/images/line.svg" className="line-two" />
                <div className="row">
                  <div className="col-md-3 col-sm-3">
                  <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse2.png" className="main-img" alt='cryptocurrency casino' />
                      </div>  
                  <div className="col-md-6 col-sm-6">
                      <h3>PARTY VERSE</h3>
                      <p>A casino is never complete without a good party :)  Partyverse is yet another magnificent realm inside the Maziverse. Just jump inside this virtual club and join thousands of others in a never ending exotic party. You see live artists performing inside with incredible club music that gets you tapping your feet along with a fun crowd. There will be hundreds of parties happening inside the party verse and you get to teleport to any party of choice. Each party will have its own theme, audience, artists etc. By just holding one of Mazimatic's NFT, you get un-limited access to the entire party verse.</p>
                      </div>  
                  <div className="col-md-3 col-sm-3">
                      <img src="/assets/images/close.svg" className="close" onClick ={showDefaultVerse}  />
                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/party-img-1.jpg" className="right-img-1" alt='online casino' />
                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/party-img-2.jpg" className="right-img-2" alt='Crypto casino' />
                      </div>  
                </div>
            </div>

            <div className="verse-divs" id="verse-3-div">
                <img src="/assets/images/line.svg" className="line-one" />
                <img src="/assets/images/line.svg" className="line-two" />
                <div className="row">
                  <div className="col-md-3 col-sm-3">
                  <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse3.png" className="main-img" alt='metaverse Casino' />
                      </div>  
                  <div className="col-md-6 col-sm-6">
                      <h3>ADVENTURE VERSE</h3>
                      <p>Step out of the club and land right inside a wonderland filled with adventure. The night is still young inside the maziverse, so you can spend time inside the Adventureverse and go for the ride of your life. This massive VR stimulation brings to life every great attraction you wanted to visit in this world. Just wear your head gear and the next moment you will be flying through the clouds of Burj Khalifa, Effiel tower -or- go scuba diving to the deepest depths of the marina trench. The adventure verse is a dream come true for every metaverse enthusiast.</p>
                      </div>  
                  <div className="col-md-3 col-sm-3">
                      <img src="/assets/images/close.svg" className="close" onClick ={showDefaultVerse}  />
                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/adventure-img-1.png" className="right-img-1" alt='cryptocurrency casino' />
                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/adventure-img-2.png" className="right-img-2" alt='online casino' />
                      </div>  
                </div>
            </div>

            <div className="verse-divs" id="verse-4-div">
                <img src="/assets/images/line.svg" className="line-one" />
                <img src="/assets/images/line.svg" className="line-two" />
                <div className="row">
                  <div className="col-md-3 col-sm-3">
                  <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/verse4.png" className="main-img" alt='Crypto casino' />
                      </div>  
                  <div className="col-md-6 col-sm-6">
                      <h3>INFLUENCER VERSE</h3>
                      <p>The MaziVerse is more than just playing, earning and clubbing. A separate world is dedicated to interact with influencers who you've always admired. Inside the Influencerverse, you are free to connect and talk to them in real-time. In whichever part of the world your influencer is, inside the influencerverse he or she sits right beside you spending quality time.</p>
                      </div>  
                  <div className="col-md-3 col-sm-3">
                      <img src="/assets/images/close.svg" className="close" onClick ={showDefaultVerse}  />
                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/influencer1.png" className="right-img-1" alt='Crypto casino' />
                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/influencer2.png" className="right-img-2" alt='metaverse Casino' />
                      </div>  
                </div>
            </div>


            <div className="verse-divs" id="verse-5-div">
                <img src="/assets/images/line.svg" className="line-one" />
                <img src="/assets/images/line.svg" className="line-two" />
                <div className="row">
                  <div className="col-md-3 col-sm-3">
                  <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/trading_floor.png" className="main-img" alt='Crypto casino' />
                      </div>  
                  <div className="col-md-6 col-sm-6">
                      <h3>THE TRADING FLOOR</h3>
                      <p>A Metaverse built for the Trading community whether it is Forex, NYSE or the Indian Stock Market, The Trading Floor is the World’s first Metaverse for the Trading community, where users will be able to interact with their friends, discuss trading strategies and Execute trades inside the metaverse. The Trading Floor will enable integrating the real trading  accounts within our virtual machines.</p>
                      </div>  
                  <div className="col-md-3 col-sm-3">
                      <img src="/assets/images/close.svg" className="close" onClick ={showDefaultVerse}  />
                      {/* <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/trading_floor.png" className="right-img-1" alt='Crypto casino' />
                      <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/trading_floor.png" className="right-img-2" alt='metaverse Casino' /> */}
                      </div>  
                </div>
            </div>


            <div className='row verse_p_row'>
             <div className='col-md-1'></div>
             <div className='col-md-5 text-center'>
                 <p className='verse_p'><span>The Metaverse project of Mazimatic is the MaziVerse.</span> It will facilitate connection and community in the most entertaining manner. Maziverse will be a futuristic gaming platform for users to meet, earn and play casino games. Running it on the revolutionary Polygon Blockchain helps to keep it decentralised and secure while maintaining very low on-chain transaction fees. Along with gaming,  </p>
             </div>
             <div className='col-md-5 text-center'>
                 <p className='verse_p'>the Maziverse goes the extra mile to provide mind blowing clubbing and social living experiences in a spectacular VR-AR environment</p>
                 <p className='verse_p'>Be it on the mobile, desktop or using virtual reality goggles, our promise is to enable a spectacular roller coster ride from start to end. The Maziverse is made up of four realms: Casinoverse, Partyverse, Adventureverse and the Influencerverse. </p>
             </div>
             <div className='col-md-1'></div>
         </div>


            

        
    </section>
  )
}

export default Verse