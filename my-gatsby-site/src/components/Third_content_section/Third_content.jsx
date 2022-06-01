import React from 'react'
import './Third_content.css'
import bikerImg from '../../assets/img/bike_cover.jpg'
import * as BSIcons from 'react-icons/bs'
import Four from '../Four_section'
import * as MdIcon from 'react-icons/md'


const Third_content = () => {
  return (
    <div className="third-content">
        <div className="head_content">

        <div className="left">
            <p className="etoile">★ ★ ★ ★ ★</p>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed at dolorem ut? Doloribus <br />
                 odio velit magnam hic quibusdam explicabo voluptas debitis a corrupti officiis harum quos, <br />
                 nobis enim numquam illo!
                 </p>
            <p class="bruce">BRUCE & MILLIS <br/> <span>VERMON</span></p>
        </div>

        <div className="third-content_img">
            
        </div>

        </div>

        <div className="below_head">
            <div className="left">

            <div className="cercle_third">
                <BSIcons.BsFillPlayFill style={{marginTop:'20px', color:'white'}}/>
            </div>
            <div>

            <img src={bikerImg} width="450px" height="300px" alt="" srcset="" />
            </div>
            </div>

            <div className="right">

                <a href="">VIEW MORE REVIEWS </a>
                <MdIcon.MdOutlineArrowRightAlt size="20" color="orange"/>

            </div>
            



        

        </div>
            <div  className="icon_third">
                
            </div>


            <div className="channel">

            </div>


            <Four />

        
      
    </div>
  )
}

export default Third_content
