import React, { useContext } from 'react'
import SidebarOption from './SidebarOption'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateValue } from './DataLayer';


const Sidebar = () => {
  const [{ playList }, dispatch] = useStateValue();





  return (
      <div className='sidebar'>
 <img src="https://getheavy.com/wp-content/
uploads/2019/12/spotify2019-830x350.jpg"alt="" className='sidebar_logo' />
      <SidebarOption option="Home"  Icon={HomeIcon}/> 
      <SidebarOption option="Search" Icon={SearchIcon} /> 
      <SidebarOption option="Your Library" Icon={LibraryMusicIcon} /> 
       <br /> 
      <strong className='playlist'>Playlist</strong>
      <hr /> 
      {playList?.items?.map((playlist) => {
        return (<SidebarOption option={playlist.name} />)
      })}
    </div>
  )
}

export default Sidebar