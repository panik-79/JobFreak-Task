import React from 'react'
import Navbar from './Navbar'
import Guide from './Guide'
import Home from './Home'
import  Contact from './Contact'
import Information from './Information'
const Apps = ({currTab}) => {
  return (
    <div className='apps'>
        <Navbar currTab={currTab}/>
        {currTab === "Home" && <Home/>}
        {currTab === "Contact" && <Contact/>}
        {currTab === "Information" && <Information/>}
        {currTab === "Guide" && <Guide/>}
    </div>
  )
}

export default Apps