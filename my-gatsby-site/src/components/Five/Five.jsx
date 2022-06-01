import React from 'react'
import './Five.css'
import Six from '../Six';
import * as MdIcon from 'react-icons/md'



const Five = () => {
  return (
    <div className="five_container">
        <div className='head_five'>

            <div className='left'>

            <h1>WHY <br/> EVELO ?</h1>

            <div className='below'>
                <h1>NO-RISK DESICION</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laboriosam illum,<br/>
                     quae vel ab ratione totam accusantium facere,<br/>
                     amet ad voluptatum dolore omnis incidunt architecto, voluptatibus aliquam sunt quos! Pariatur. </p>
            </div>
            </div>


            <div className="right">

                <div className="first_photo">
                    

                </div>
                <div className="number">
                    

                    <h1>0</h1>
                    



                </div>

               
                    <div className="span_2">

                    <h1 >2</h1>
                    </div>


                <div className="second_photo">

                </div>

            </div>

            <div className="right_list">
                <ul >
                    <li>01</li>
                    <li>02</li>
                    <li>03</li>
                    <li>04</li>
                    <li>05</li>

                </ul>

            </div>

        </div>

        <div className="below_five">

            <div className="left_background"> 
             </div>

             <div className="text_back">
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Est nisi iusto labore cumque exercitationem fugit 
                     adipisci voluptatum qui. Debitis dolore non pariatur
                      amet itaque libero eum cum animi suscipit expedita.</p>
                <a href=""> LEARN ABOUT OUR ARIAL <MdIcon.MdOutlineArrowRightAlt size="20" color="orange"/></a>
                

             </div>

        </div>

        <div className="evelo_at_home">
            <div className="text">
                <h1>TRY EVELO AT HOME</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, velit 
                    animi! Minus ad voluptatibus repudiandae ullam dolorum voluptates quas, corporis, molest
                    iae perferendis reiciendis qui sit. Recusandae blanditiis velit ea ipsa.</p>

                <a  style={{color: 'orange'}}>SHOP NOW <MdIcon.MdOutlineArrowRightAlt size="20" color="orange"/></a>

            </div>
            <div className="bg">

            </div>



        </div>
            <div className="bg_below">

            </div>

            <div className="below_evelo_at_home">
            <div className="bg">

            </div>
            <div className="background">

            </div>
            <div className="text">
                <h1>WHAT HAPPEND WHEN I NEED HELP ?</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, velit 
                    animi! Minus ad voluptatibus repudiandae ullam dolorum voluptates quas, corporis, molest
                    iae perferendis reiciendis qui sit. Recusandae blanditiis velit ea ipsa.</p>

                <a  style={{color: 'orange', alignItems:'center'}}>CONTACT US <MdIcon.MdOutlineArrowRightAlt size="20" color="orange" /></a>

            </div>



        </div>
        <Six />
      
    </div>
  )
}

export default Five
