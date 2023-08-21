import React from 'react'

import "./Welcome.css"

import Welcomebg from '../../images/wecomebg.jpg';

function Welcome() {
  return (
    <div>
        <div className='container main'>
        <h1>Moview</h1>
        <div className='body'>
            {/* <img className='welcomebg' src={Welcomebg} alt='wecome background'/> */}

            <button className="btn btn-accent">Accent</button>
        </div>
        </div>
    </div>
  )
}

export default Welcome