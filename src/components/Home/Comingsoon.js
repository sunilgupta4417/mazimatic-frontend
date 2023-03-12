import React from 'react'

const Comingsoon = () => {
  return (
    <section id="Comingsoon">
        <div className="row">
            <div className="col-md-6 col-12 left text-center">
                <img src="/assets/images/comingsoon-border.png" />
                <h2>Whitepaper</h2>
                <a target="_blank" href="whitepaper" className="whitepaper">View</a>
				
            </div>
            <div className="col-md-6 col-12 right  text-center">
            <img src="/assets/images/comingsoon-border.png" />
                <h2>Tokenomics</h2>
                <a target="_blank" href="whitepaper#Tokenomics" className="whitepaper">View</a>
            </div>
        </div>
    </section>
  )
}

export default Comingsoon