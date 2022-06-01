import React from 'react'
import './Navbar.css'


const Navbar = () => {

    const NavArray = ['BIKES', 'ACCESSOREIS', 'REVIEWS', 'SERVICE' , 'CONTACT'];
    const Navcontent = NavArray.map((content, i)=> <li key={'content_'+i}>{content}</li> )
  return (
    <div className="navbar">
        <div className="logo-nav">
            <img src="../../assets/img/logo.svg" alt="logo"  />
        </div>
        <div className='list-nav'>
      <ul>
          {Navcontent}
      </ul>
        </div>
        <div className="icon-navbar">

        </div>
    </div>
  )
}

export default Navbar
