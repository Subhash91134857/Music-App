import React from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useStateValue } from './DataLayer';

const Header = () => {

const[{user},dispatch]=useStateValue()
  return (
      <div className='header'>
          <div className="header_left">
              <SearchIcon />
              <input type="text" placeholder='Search for the artists,songs, albums'/>
          </div>          
          <div className="header_right">
              <Avatar src={user?.images[0]?.url} alt={ user?.email} width="20px"/>
              <h4>{user?.name }</h4>
          </div>
    </div>
  )
}

export default Header