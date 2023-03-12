import React from 'react'

const Footer = () => {
  return (
    <section id="Footer">
        <img src="/assets/images/footer-bg.svg" className="footer-bg"/>
        <div className="row">
            <div className="col-md-4 col-sm-4">
                <img src="/assets/images/logo/logo.svg" className="footer-logo"/>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
                <a href="#" className="to-top-a">BACK TO TOP</a>
                <br/>
                <a href="#"><img src="/assets/images/to-top.svg" className="to-top-img" /></a>
            </div>
            <div className="col-md-4 col-sm-4 text-right">
                {/* <select>
                    <option>English</option>
                </select> */}
            </div>
        </div>

        <div className="row link-row">
            <div className="col-md-2 col-sm-2"></div>
            <div className="col-md-8 col-sm-8">
                <a href="./#our-vision"><p>Our Vision</p></a>
                <a href="./#Verse"><p>MaziVerse</p></a>
                <a href="./#Nftkart"><p>NFT's</p></a>
                <a href="./#Roadmap"><p>RoadMap</p></a>
                <a href="./#Features"><p>Features</p></a>
            </div>
            <div className="col-md-2 col-sm-2"></div>

            {/* <div class='col-md-12 col-sm-12 buttons-container'>

<a href="https://t.me/mazimatic"><div class='button twitter'>
    <i class="fa fa-telegram fa-lg"></i>
</div></a>
<a href="https://twitter.com/mazimatic?s=11"><div class='button twitter'>
    <i class="fa fa-twitter fa-lg"></i>
</div></a>
<a href="https://m.facebook.com/mazimatic/"><div class='button facebook'>
    <i class="fa fa-facebook-f fa-lg"></i>
</div></a>
<a href="https://instagram.com/mazimatic.official?utm_medium=copy_link"><div class='button instagram'>
    <i class="fa fa-instagram fa-lg"></i>
</div></a>
<a href="https://www.linkedin.com/company/mazimatic"><div class='button twitter'>
<i class="fa fa-linkedin fa-lg"></i>
</div></a>


</div> */}
        </div>
        
        <div className="row">
            <div className="col-md-12 col-sm-12 bottom-row">
             <div className="row">
                 <div className="col-md-6 col-sm-6">
                     <p>Copyright   |   MaziMatic 2022</p>
                 </div>
                 <div className="col-md-6 col-sm-6 text-right">
                     <a href="/privacy-policy">Privacy Policy |</a>
                     <a href="/terms-and-conditions">Terms & Conditions |</a>
                     <a href="/disclaimer">Disclaimer </a>
                 </div>
             </div>
            </div>
        </div>

    </section>
  )
}

export default Footer