import React from 'react'
import Sidebar  from './Sidebar'
import './player.css'
import Body from './Body'
import Footer from './Footer'

const Player = ({spotify}) => {
  return (
    <div className='player'>
      <div className="player_body">
        <Sidebar/>
        <Body spotify={spotify} />
      </div>
     
    <Footer/>
    </div>
  )
}

export default Player