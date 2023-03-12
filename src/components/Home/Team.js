import React from 'react'

const Team = () => {
  return (
    <section id="Team">
        <img src="/assets/images/team-bg.svg" className="team-bg" />
        <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
                <h2>Our Team</h2>
            </div>
        </div>
        
        <div className="row first-row">
            <div className="col-md-3 col-sm-3 member text-center">
            <img src="assets/images/karan.jpg" />
            <p>Karan Bhandari</p>
            <p>CEO / Co-Founder</p>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <a href='https://www.linkedin.com/in/karnn-bhandarii-b6914930/' target='_blank'><img src='assets/images/icons/linkedin.png' className='social' /></a>
                    <a href='https://twitter.com/karanbhandari10' target='_blank'><img src='assets/images/icons/twitter.png' className='social' /></a>
                </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-3 member bottom text-center">
            <img src="assets/images/sehgal.jpg" />
            <p>Prince Sehgal</p>
            <p>COO / Co-Founder</p>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <a href='https://www.linkedin.com/in/prince-sehgal-48b21918b/' target='_blank'><img src='assets/images/icons/linkedin.png' className='social' /></a>
                    <a href='https://twitter.com/Princesehgal01' target='_blank'><img src='assets/images/icons/twitter.png' className='social' /></a>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-3 member bottom text-center">
            <img src="assets/images/mkay.png" style={{ "border":"2px solid #FFFFFF" }}/>
             <p>MKay</p>
            <p>CFO / Co-Founder</p>
            <div className='row'>
	     <div className='col-md-12 text-center'>
                    <a href='https://twitter.com/mannythehitman?t=zOyUIir5ftLBnIkb-0isFw&s=09' target='_blank'><img src='assets/images/icons/twitter.png' className='social' /></a>
                </div>
</div> 
            </div> 
            {/* <div className="col-md-3 col-sm-3 member bottom text-center">
            <img src="assets/images/navin.png" style={{ "border":"2px solid #FFFFFF" }} />
            
			 <p>Navin Kejriwal</p>
            <p>CSO/Co-founder</p>
             <div className='row'>
                <div className='col-md-12 text-center'>
                   <a href='https://www.linkedin.com/in/devanshu-joshi-84595113a/' target='_blank'><img src='assets/images/icons/linkedin.png' className='social' /></a>
                    <a href='https://twitter.com/Kejriwal311' target='_blank'><img src='assets/images/icons/twitter.png' className='social' /></a>
                </div>
            </div> 
            </div> */}
            <div className="col-md-3 col-sm-3 member text-center">
            <img src="assets/images/devanshu.jpg" />
            <p>Devanshu Joshi</p>
            <p>CTO / Co-Founder</p>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <a href='https://www.linkedin.com/in/devanshu-joshi-84595113a/' target='_blank'><img src='assets/images/icons/linkedin.png' className='social' /></a>
                    <a href='https://twitter.com/cryptikdev' target='_blank'><img src='assets/images/icons/twitter.png' className='social' /></a>
                </div>
            </div>   
            </div>
            
        </div>

        <div className="row second-row">
            
            <div className="col-md-3 col-sm-3 member bottom text-center">
            <img src="assets/images/saket.jpg"/>
                    <p>Saket Joshi </p>
                    <p>Marketing Advisor/Co-founder</p>
                    <div className='row'>
                <div className='col-md-12 text-center'>
                    <a href='https://www.linkedin.com/in/saket-joshi-47633a139/' target='_blank'><img src='assets/images/icons/linkedin.png' className='social' /></a>
                    <a href='https://twitter.com/unfollowsaket' target='_blank'><img src='assets/images/icons/twitter.png' className='social' /></a>
                </div>
                  </div>
            </div>
            <div className="col-md-3 col-sm-3 member bottom text-center">
            <img src="assets/images/vineet.jfif" />
            <p>Vineet Miskin</p>
            <p>CMO/Co-founder</p>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <a href='https://www.linkedin.com/in/vineet-miskin-a8b300162/' target='_blank'><img src='assets/images/icons/linkedin.png' className='social' /></a>
                    <a href='https://twitter.com/vineet_miskin' target='_blank'><img src='assets/images/icons/twitter.png' className='social' /></a>
                </div>
            </div>
            </div>
		    	<div className="col-md-3 member col-sm-3 bottom text-center">
            <img src="assets/images/pasoon.jfif" />
            <p>Prasoon Agarwal</p>
            <p>Strategic Advisor</p>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <a href='https://www.linkedin.com/in/agrawalprasoon/' target='_blank'><img src='assets/images/icons/linkedin.png' className='social' /></a>
                    <a href='https://twitter.com/relishthisperk' target='_blank'><img src='assets/images/icons/twitter.png' className='social' /></a>
                </div>
            </div> 
        </div>
        
        <div className="col-md-3 col-sm-3 member bottom text-center">
            <img src="assets/images/uddalak.jfif" />
            <p>Uddalak Das</p>
            <p>Social Media Strategist</p>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <a href='https://www.linkedin.com/in/uddalak-das-crypto-nft-defi/' target='_blank'><img src='assets/images/icons/linkedin.png' className='social' /></a>
                    {/* <a href='https://twitter.com/relishthisperk' target='_blank'><img src='assets/images/icons/twitter.png' className='social' /></a> */}
                </div>
            </div> 
        </div>
        
        </div>


        <div className="row third-row">
            <div className="col-md-3 col-sm-3">
                <div className="row">
                    <div className="col-md-6 col-sm-6 sub-member">
                    <img src="assets/images/cryptotrav.jpg"/>
                    <p>Travladd Crypto</p>
                    <p>Strategic Marketing Advisor</p>
                    <div className='row'>
                <div className='col-md-12 text-center'>
                <a href='https://twitter.com/OfficialTravlad/status/1581984992011251714?t=KXuE4x7JIPDzm8-yWko1eQ&s=19' target='_blank'><img src='assets/images/icons/twitter.png' className='social' /></a>
                </div>
                  </div>
                    </div>
                    <div className="col-md-6 col-sm-6 sub-member">
                    <img src="assets/images/ameen.png"/>
                    <p>Ameen Ahmed</p>
                    <p>Strategic Partner - The Trading Floor</p>
                    <div className='row'>
                <div className='col-md-12 text-center'>
                    <a href='https://www.linkedin.com/company/trading-game-strong/' target='_blank'><img src='assets/images/icons/linkedin.png' className='social' /></a>
                    <a href='https://www.instagram.com/ameenahmed16/?igshid=YmMyMTA2M2Y%3D' target='_blank'><img src='assets/images/icons/instagram.png' className='social' /></a>
                </div>
                  </div>
                    </div>
                </div>
            </div>
			<div className="col-md-3 col-sm-3">
			<div className="row">
              <div className="col-md-6 col-sm-6 sub-member">
                    <img src="assets/images/soon.png"/>
                    <p>PR Advisor</p>
                    </div>      
				<div className="col-md-6 col-sm-6 sub-member">
                    <img src="assets/images/soon.png"/>
                    <p>Partnerships Advisor</p>
                  </div>
			</div>
			</div>
            <div className="col-md-3 col-sm-3">
                <div className="row">
                    <div className="col-md-6 col-sm-6 sub-member">
                    <img src="assets/images/soon.png"/>
                    <p>Legal Head</p>
                    </div>
                    <div className="col-md-6 col-sm-6 sub-member">
                    <img src="assets/images/soon.png"/>
                    <p>Marketing Advisor</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-3">
                <div className="row">
                    <div className="col-md-6 col-sm-6 sub-member">
                    <img src="assets/images/soon.png"/>
                    <p>Community Management Advisor</p>
                    </div>
                    <div className="col-md-6 col-sm-6 sub-member">
                    <img src="assets/images/soon.png"/>
                    <p>Technology Advisor</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-3">
                <div className="row">
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team