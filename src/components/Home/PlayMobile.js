import React from 'react'
import { useState, useEffect } from 'react';
import { Lightbox } from "react-modal-image";
// import { useRouter } from 'next/router';
// import Router from 'next/router'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent!important'
    },
};

const PlayMobile = () => {


  const [modalIsOpenY, setIsOpen] = React.useState(false);
  // const router = useRouter()


  useEffect(() => {

      
  
     setIsOpen(true)
       
  
      
  }, [])

//   const redirectTo = () => {
// Router.push("/nft")
//   }

  

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }

  
  return (
    <section id="PlayMobile">
      <div className="row">
          <div className="col-md-12 text-center buy">
          <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/pie.svg" className="pie-img" alt='online casino'/>
          <h3 className="mt-2"><span>Fort-Knox</span><br/>SECURE</h3>
           <p className="left-p mt-3">We take security very seriously. Certik audited contracts. 24-7 guarded by professionals.</p>
          </div>
      </div>

      <div className="row">
          <div className="col-md-12 text-center play">
          <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/big-pie.png" className="" alt='Crypto casino'/>
          <h3 className="blue-text mt-2"><span>Win every-time you</span><br/>PLAY</h3>
           <p className="left-p mt-3">A Metaverse built for you to Win with style ✨  A Royale casino filled with experiences.</p>
          </div>
      </div>

      <div className="row">
          <div className="col-md-12 text-center buy">
          <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/pie.svg" className="pie-img" alt='metaverse Casino'/>
          <h3 className="mt-2"><span>World class</span><br/>SUPPORT</h3>
           <p className="left-p mt-3">Real-time support 24-7 over email & chat. Award winning  'Customer First' process.</p>
          </div>
      </div>
      {/* {modalIsOpenY ?
              
              <Modal
        isOpen={modalIsOpenY}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="closebutton" onClick={closeModal}>X</button>
        <div className="popupimage"><a href="/nft"><img src="nft_live.jpeg" /></a></div>
        
        
      </Modal>: ""}  */}
    </section>
  )
}

export default PlayMobile