import React from 'react'
import {AiOutlineRollback} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
    <div>
        <span  className='inline-block'>Lost ? ..  <span><AiOutlineRollback/> Go back. </span></span>
        
    </div>
  )
}

export default Error