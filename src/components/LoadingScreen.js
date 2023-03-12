import React from 'react'
import HomeHeaderTags from '../components/HomeHeaderTags'
const LoadingScreen = () => {
  return (<>
    <HomeHeaderTags/>
    <div className="ring-outer"> 
      <div className="ring">
      <img src="/assets/images/logo.png" height="100" width="100" className="loader-logo" />      
      {/* <image src="logo.png" height="100" width="100"/> */}
      <div className="loaderk"></div>
      </div>
    </div></>
  )
}

export default LoadingScreen