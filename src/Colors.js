import React from 'react'

export const Colors = ({color, showColors, setShowColors, handleColor, isDisabled, isBoxShadow, handleSwitch}) => {
  return (
    <>
     <li>
        <span className="input-header" onClick={()=> setShowColors(!showColors)}>
          colors
          <span className="material-icons">
            {
              showColors ? 'expand_less' : 'expand_more'
            }
          </span>
        </span>

        <form className={`form ${showColors ? '' : 'hide-form'}`}>
          <div className="form-center">

            <div className="input-container">
              <input 
                type="radio" 
                name="color" 
                id="purple" 
                onClick={handleColor}
                checked={color === 'purple'}
              />
              <label htmlFor="purple">purple</label>
            </div>

            <div className="input-container">
              <input 
                type="radio" 
                name="color" 
                id="red" 
                onClick={handleColor}
                checked={color === 'red'}
              />
              <label htmlFor="red">red</label>
            </div>

            <div className="input-container">
              <input 
                type="radio" 
                name="color" 
                id="pink" 
                onClick={handleColor}
                checked={color === 'pink'}
              />
              <label htmlFor="pink">pink</label>
            </div>
            
            <div className="input-container">
              <input 
                type="radio" 
                name="color" 
                id="yellow" 
                onClick={handleColor}
                checked={color === 'yellow'}
              />
              <label htmlFor="yellow">yellow</label>
            </div>

            <div className="input-container">
              <input 
                type="radio" 
                name="color" 
                id="blue"
                onClick={handleColor} 
                checked={color === 'blue'}
              />
              <label htmlFor="blue">blue</label>
            </div>

            <label htmlFor="" className="switch">
              disabled
              <div className="toggle-container" >
                <input 
                  type="checkbox" 
                  id="disable" 
                  onClick={handleSwitch}
                  checked={isDisabled} 
                />
                <span className="slider round"></span>
              </div>
            </label>

            <label htmlFor="" className="switch">
              box shadow
              <div className="toggle-container" >
                <input 
                  type="checkbox" 
                  id='box-shadow' 
                  onClick={handleSwitch}
                  checked={isBoxShadow} 
                />
                <span className="slider round"></span>
              </div>
            </label>
          </div>
        </form>
      </li> 
    </>
  )
}

