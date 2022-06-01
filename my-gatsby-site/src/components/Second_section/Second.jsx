import React from 'react'
import './Second.css'
import { Button, Card } from 'react-bootstrap';
import * as BSIconns from 'react-icons/bs'
import Third from '../white_background';
import * as MdIcon from 'react-icons/md'



const Second = () => {
    
  return (
    <div className="second-container">
        <div className="title-img">

        <h1>BIKE <br/> FEATURES</h1>
        </div>
        <div className="image">

            
        <div className="card_title">
            <div className="cercle">
                +
            </div>
            <Card className="card text-center" style={{ width: '100%' }}>
                
                <div className="card_body">
                     <div className="title"> <h1>Card Title</h1> </div>
                     <div className="paragraph">
                       <p>Some quick example text to build on the card title <br/> and make up the bulk of
                         the card's content. </p>
                         
                         </div>
                         <div className="div_primary">
                           <div>

                           <p>1 <span>/</span> 4</p>
                           </div>

                           <div>

                           </div>
                         <button className="btn-primary"> <p>Next</p>  <MdIcon.MdOutlineArrowRightAlt size="20" color="white"/></button>

                         </div>
                         </div>
                         </Card>

        </div>
        </div>


        <div className="icons">
          <div className="truck_icon">
            <BSIconns.BsTruck color="white" size='100'/>

            <div className="icons_description">

          <h3>FREE SHIPPING</h3>
            <p>Some quick example text to build on the card title and make up the bulk ofSome quick</p>
            </div>
          </div>

          <div className="date_icon">
            <BSIconns.BsCalendarDate color="white" size='100'/>
            <div className="icons_description1">

            <h3>10 DAY AT-HOME TRIAL</h3>
            <p>Some quick example text to build on the card title and make up the bulk ofSome quick</p>
            </div>
          </div>

          <div className="cheek_icon">
            <BSIconns.BsShieldCheck color="white" size='100'/>
          <div className="icons_description2">
          <h3>4-YEAR/20k-MILE WARRANTY</h3>
            <p>Some quick example text to build on the card title and make up the bulk ofSome quick</p>
          </div>
          </div>

        </div>

        <Third />
    </div>
  )
}

export default Second
