import React from 'react'

import "./Welcome.css"

// import { faCircleArrowRight } from '@fortawesome/pro-solid-svg-icons';

import Welcomebg from '../../images/wecomebg.jpg';

function Welcome() {
  return (
    <div>
        <div className='container main'>
        <h1>Moview</h1>
        <div className='body'>
            {/* <img className='welcomebg' src={Welcomebg} alt='wecome background'/> */}

            <button className="btn btn-accent">Next </button>   {/* <FontAwesomeIcon icon={faCircleArrowRight} /> */}
        </div>
        </div>
    </div>
  )
}

export default Welcome