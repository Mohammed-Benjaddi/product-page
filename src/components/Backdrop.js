import React from 'react'

const Backdrop = ({ toggle }) => {
  return (
    <div className='blur' onClick={() => toggle(false)} >Backdrop</div>
  )
}

export default Backdrop