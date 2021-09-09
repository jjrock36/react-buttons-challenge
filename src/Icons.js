import React from 'react'

export const Icons = ({icon, showIcons, setShowIcons, handleIcon}) => {
  return (
    <>
      <li>
        <span className="input-header" onClick={()=> setShowIcons(!showIcons)}>
          icons
          <span className="material-icons">
            {
              showIcons ? 'expand_less' : 'expand_more'
            }
          </span>
        </span>

        <form className={`form ${showIcons ? '' : 'hide-form'}`}>
          <div className="form-center">

            <div className="input-container">
              <input 
                type="radio" 
                name="icon" 
                id="leading"
                onClick={handleIcon}
                checked={icon === 'leading'}
              />
              <label htmlFor="leading-icon">leading icon</label>
            </div>

            <div className="input-container">
              <input 
                type="radio" 
                name="icon" 
                id="lagging"
                onClick={handleIcon}
                checked={icon === 'lagging'}
              />
              <label htmlFor="lagging-icon">lagging icon</label>
            </div>
            
            <div className="input-container">
              <input 
                type="radio" 
                name="icon" 
                id="none"
                onClick={handleIcon}
                checked={icon === 'none'}
              />
              <label htmlFor="none">none</label>
            </div>

          </div>
        </form>
      </li>
    </>
  )
}

