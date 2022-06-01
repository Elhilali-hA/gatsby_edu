import React from 'react'
import './Fouter.css'
import * as BSIcons from 'react-icons/bs'
import LogoFoter from '../../assets/img/logo.png'
import Copyright from '../../assets/img/copyright.png'


const Fouter = () => {
  return (
    <div>
        <div className="footer">

            <div className="left">
                <div  className="left_top">

                <div className="phone">

                <h6>Phone</h6>
                <h3>+1 877.991.7272</h3>

                </div>

                <div className="email">

                <h6>Email</h6>
                <h3>INFO@ELEVIO</h3>
                </div>

                <div className="follow">

                <h6>FOLLOW US</h6>
                <div className="fb_icons">
                    <BSIcons.BsFacebook size="25" color="white"/>
                    <BSIcons.BsTwitter size="25" color="white"/>
                    <BSIcons.BsInstagram size="25" color="white"/>
                    <BSIcons.BsYoutube size="25" color="white"/>

                </div>
                
                </div>
                </div>

                <div className="left_bottom">

                    <img src={LogoFoter} width="150px" height="80px" alt="" srcset="" />

                    <img src={Copyright} width="105px" height="80px" alt="" srcset="" />

                </div>


            </div>
            <div className="right">

                <div className="right_top">

                    <h4 style={{color:'white'}}>JOIN OUR <br/> NEWSLETTER</h4>
                    <input type="text" placeholder="Your Email Address"/>

                </div>

                <div className="right_bottom">

                    <div>
                        <h4>ABOUT</h4>
                        <ul>
                            <li>Our Story</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>

                        </ul>
                    </div>

                    <div>
                        <h4>COMMUNITY</h4>
                        <ul>
                            <li>Become a Dealer</li>
                            <li>Referral Program</li>
                            <li>Buyer's Guide</li>
                            <li>Electric Bike Tour</li>
                            <li>E-Bike Friendly Shops</li>


                        </ul>
                    </div>

                    <div>
                        <h4>SHOP</h4>
                        <ul>
                            <li>Order an ELEVO</li>
                            <li>Accessoires</li>
                            <li>Special Offers</li>
                            <li>Free Fit Consultation</li>
                            <li>Open Box & Clearance Bikes</li>
                            <li>Evelo vs. Others</li>
                            <li>Find a Test Ride Location</li>


                        </ul>
                    </div>

                    <div>
                        <h4>SUPPORT</h4>
                        <ul>
                            <li>How Services Works</li>
                            <li>Frquantly Asked Questions</li>
                            <li>Shipping Information</li>
                            <li>Easy Assembly</li>
                            <li>Warranty Overview </li>
                            <li>Register Your Warranty</li>


                        </ul>
                    </div>

                </div>

            </div>
            
        </div>
      
    </div>
  )
}

export default Fouter
