import React, { useState } from 'react'
import { Header } from './Header'
import { Center } from './Center'
import { Sidebar } from './Sidebar'

 const App = () => {
  const [button, setButton] = useState('contained');
  const [showSidebar, setShowSidebar] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [icon, setIcon] = useState('none');
  const [size, setSize] = useState('small');
  const [color, setColor] = useState('purple');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBoxShadow, setIsBoxShadow] = useState(false);

  const handleButton = (e) => {
    setButton(e.target.id);
  }
  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  const handleIcon = (e) => {
    setIcon(e.target.id);
  }
  const handleSize = (e) => {
    setSize(e.target.id);
  }
  const handleColor = (e) => {
    setColor(e.target.id);
  }
  const handleSwitch = (e) => {
    if(e.target.id === 'disable') {
      setIsDisabled(!isDisabled);
    }
    if(e.target.id === 'box-shadow') {
      setIsBoxShadow(!isBoxShadow);
    }
  }
  

  return (
    <>
      <section className={`section ${showSidebar ? 'show-sidebar' : ''}`}>
        <div className="container">
          <Header 
            showSidebar = {showSidebar}
            handleSidebar = {handleSidebar}
            button = {button}
            handleButton = {handleButton}
          />
          <Center 
            button = {button}
            icon = {icon}
            size = {size} 
            color = {color}
            isDisabled = {isDisabled}
            isBoxShadow = {isBoxShadow}
          />
        </div>
        {
          showSidebar && 
          <Sidebar 
            showSidebar = {showSidebar}
            setShowSidebar={setShowSidebar}

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
        }
      </section>
    </>
  )
}

export default App
