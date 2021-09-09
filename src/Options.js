import React from 'react'
import { Icons } from './Icons'
import { Sizes } from './Sizes'
import { Colors } from './Colors'


export const Options = ({showIcons, showSizes, showColors, setShowIcons, setShowSizes, setShowColors, icon, handleIcon, size, handleSize, color, handleColor, isDisabled, isBoxShadow, handleSwitch}) => {
  return (
    <div className="sidebar-center">
      <ul className="sidebar-list">
        <Icons 
          showIcons = {showIcons}
          setShowIcons = {setShowIcons} 
          icon = {icon}
          handleIcon = {handleIcon}
        />
        <Sizes 
          size = {size}
          showSizes = {showSizes}
          setShowSizes = {setShowSizes} 
          handleSize = {handleSize}
        />
        <Colors 
          color = {color}
          showColors = {showColors}
          setShowColors = {setShowColors} 
          handleColor = {handleColor}
          isDisabled = {isDisabled}
          isBoxShadow = {isBoxShadow}
          handleSwitch = {handleSwitch}
        />
      </ul>
    </div>
  )
}
