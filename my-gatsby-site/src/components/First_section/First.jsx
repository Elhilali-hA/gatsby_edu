import React , { useState, useRef } from 'react'
import Video from '../../assets/img/video.mp4'
import * as BSIcons from 'react-icons/bs'
import './First.css'
import * as MdIcon from 'react-icons/md'
import Logo from '../../assets/img/logo.png'


const First = () => {
    const title = 'LIVE LIFE TO'
    const title1 = 'THE FULLES ?'
    const discription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    const discription1 = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"


    const NavArray = ['BIKES', 'ACCESSOREIS', 'REVIEWS', 'SERVICE' , 'CONTACT'];
    const Navcontent = NavArray.map((content, i)=> <li key={'content_'+i}>{content}</li> )


    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false);
    
    const onVideoPress = () => {
      

            if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true)
      
    } else {
      videoRef.current.pause();
      setPlaying(false)
     
    }
    }

  return (
    <div className="container">
      <div className="video-container">
       
       <video 
       
       muted
       ref={videoRef}
       loop >
     <source src={Video} type="video/mp4"/>
     

    </video>
    </div>
      <div className="navbar">
      
        <div className="logo-nav">
            <img src={Logo} with="112px" height="123px" alt="logo"  />
        </div>
        <div className='list-nav'>
      <ul>
          {Navcontent}
      </ul>
        </div>
        <div className="icon-navbar">
          <BSIcons.BsHandbagFill size="20px" />
        </div>
     </div>
     
     <div className="content">
       <div className="right-content">

        <div className="button-play">
        <div className="btn">
        <button onClick={onVideoPress}>
        <BSIcons.BsFillPlayFill  size="20px" style={{marginTop:'4px', color:'rgba(255,225,255 ,1)', zIndex:2}}/>             
            </button>
        </div>
          
        <div className="play-text">
          <p>{playing ? "Pause video" : "Play video"} <span></span></p> 
          </div>  


        </div>
       </div>


        <div className="title_description">
            <h1>{title} <br/>{title1} </h1>
            <p>{discription} <br/> {discription1}</p>
        </div>

        <div className="shop-button">
          <button >
          <h6>SHOP BIKES </h6>
          <MdIcon.MdOutlineArrowRightAlt size="20" color="white"/>
          </button>
        </div>
     </div>
     <div className="backgroud-color">

     </div>
    </div>
  )
}

export default First
