import React from 'react'
import * as BSIcons from 'react-icons/bs'
import * as CgIcons from 'react-icons/cg'
import './Six.css'
// import Footer from '../Footer'

const Six = () => {
  return (
    <div>
        <div className="container_six">
            <h1 className="num">O1</h1>
            <h1 className="txt">WHAT ARE YOU PLANNING TO <br/> USE AN ELECTRIC FOR ?</h1>
      
    </div>

    <div className="below_container_six">
        <div className="icon_container">
            <div className="icon_active">

            <BSIcons.BsBicycle size="50" />
            </div>
            <h4>RECREATION</h4>

        </div>
        <div className="icon_container" >
        <div className="icon_active">

        <BSIcons.BsBagFill size="50" />
        </div>

            <h4>COMMUTING</h4>
        </div>
        <div className="icon_container">
        <div className="icon_active">

        <BSIcons.BsCalendarPlus size="50" />
        </div>

            <h4>EXRERCISE</h4>
        </div>
        <div className="icon_container">
        <div className="icon_active">

        <CgIcons.CgExtensionAdd size="50" />
        </div>

            <h4>EVERYTHING</h4>
        </div>

    </div>

    {/* <Footer /> */}


    </div>

  )
}

export default Six
