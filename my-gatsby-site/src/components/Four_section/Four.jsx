import React, {useState} from 'react'
import './four.css'
import bike_1 from '../../assets/img/bike_1.png'
import bike_2 from '../../assets/img/bike_2.png'
import bike_3 from '../../assets/img/bike_3.png'
import Five from '../Five'


const Four = () => {

  

  return (
    <div>
      
      <div className="four_header">

          <div className="four_title">
              <h1>OUR <br/> PRODUCTS</h1>

          </div>

          <div className="four_ul">
              <ul>
              <li className="li_1" style={{ width:'200px'}}>ALL</li>
              <li className="li_2" style={{ width:'200px'}}>COMFORT</li>
              <li  className="li_3" style={{ width:'200px'}}>SPORT UTYLITY</li>
              <li s className="li_4" style={{ width:'200px'}}>SPEACILTY</li>

              

                  

              </ul>

          </div>

      </div>

      <div className="below_four_header">

        <div className="left">

        <h1>BIKES</h1>

        <div className="content">
          <img src={bike_1} width="250px" height="250px" alt="" srcset="" />
          <h4>lorem ips</h4>
          <p style={{color:"orange"}}>Lorem ipsum dolor sit, amet conse</p>
        </div>
        </div>



      <div className="right">

      <div className="product">
          <img src={bike_2} width="200px" height="150px" alt="" srcset="" />
          
          <h4>lorem ips</h4>
          <p style={{color:"orange"}}>Lorem ipsum dolor sit, amet conse</p>
          
        </div>

        <div className="product1">
          <img src={bike_3} width="200px" height="150px" alt="" srcset="" />
          <h4>lorem ips</h4>
          <p style={{color:"orange"}}>Lorem ipsum dolor sit, amet conse</p>
        </div>

      </div>
      </div>

      <div >

        <Five />

      </div>


    </div>
  )
}

export default Four
