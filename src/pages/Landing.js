import React from 'react'
import {useNavigate} from 'react-router-dom'

const Landing = () => {
    let nav = useNavigate()

  return (
    <div className='flex-row my-5'>
        <div className='button-container flex justify-center mx-10'>
          <button className='bg-blue-500 rounded-lg px-9 py-1 hover:bg-blue-700 text-white' onClick={() => nav('./game')}>PLAY</button>
        </div>
    </div>
  )
}

export default Landing