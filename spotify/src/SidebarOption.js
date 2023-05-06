import React from 'react'
import "./sidebaroption.css"

const SidebarOption = ({option,Icon}) => {
  return (
      <div className='sidebaroption'>
        {Icon && <Icon className="sidebaroption_icon"/>}
          {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  )
}

export default SidebarOption