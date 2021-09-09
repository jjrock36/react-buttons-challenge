import React from 'react'
import { Options } from './Options'

export const Sidebar = ({showSidebar, showIcons, showSizes, showColors, setShowSidebar, setShowIcons, setShowSizes, setShowColors, icon, handleIcon, size, handleSize, color, handleColor, isDisabled, isBoxShadow, handleSwitch}) => {
  return (
    <>
    <aside className="sidebar">
      <div className="sidebar-header">
        <h4>options</h4>
        <span 
          className="material-icons md-dark close-btn"
          onClick={()=> setShowSidebar(!showSidebar)}
          >
          close
        </span>
      </div>
      <Options 
        icon = {icon}
        showIcons = {showIcons}
        setShowIcons = {setShowIcons}
        handleIcon = {handleIcon}
        
        size = {size}
        showSizes = {showSizes}
        setShowSizes = {setShowSizes}
        handleSize = {handleSize}
        
        color = {color}
        showColors = {showColors}
        setShowColors = {setShowColors}
        handleColor = {handleColor}
        isDisabled = {isDisabled}
        isBoxShadow = {isBoxShadow}
        handleSwitch = {handleSwitch}
      />
    </aside>
    </>
  )
}
