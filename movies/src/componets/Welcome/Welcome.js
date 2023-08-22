import React from 'react'
import { Link } from "react-router-dom";


import "./Welcome.css"

// import { faCircleArrowRight } from '@fortawesome/pro-solid-svg-icons';

import Welcomebg from '../../images/wecomebg.jpg';

function Welcome() {
  return (
    <div>
        <div className='container main'>
        <h1>Moview</h1>
        <div className='body'>

         <button className="btn btn-accent"><Link to=''> Next</Link> </button>   
         
                 {/* <FontAwesomeIcon icon={faCircleArrowRight} /> */}
        </div>
        </div>
    </div>
  )
}

export default Welcome