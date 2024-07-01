import React from 'react'
import Navigation from '../components/Navigation'
import ItemsDisplay from '../components/ItemsDisplay'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'
import ProductMenu2 from '../components/ProductMenu2'

const LandingPage = () => {
  return (
    <div>
     <Navigation/>
        <div className="landingSection">
        <ItemsDisplay/>
        <Chains/>
        <FirmCollections/>
        
        </div>
    </div>
  )
}

export default LandingPage
