import React from 'react'

export const Sizes = ({size, showSizes, setShowSizes, handleSize}) => {
  return (
    <>
      <li>
        <span className="input-header" onClick={()=> setShowSizes(!showSizes)}>
          sizes
          <span className="material-icons">
            {
              showSizes ? 'expand_less' : 'expand_more'
            }
          </span>
        </span>

        <form className={`form ${showSizes ? '' : 'hide-form'}`}>
          <div className="form-center">

            <div className="input-container">
              <input 
                type="radio" 
                name="size" 
                id="small" 
                onClick={handleSize}
                checked={size === 'small'}
              />
              <label htmlFor="small">small</label>
            </div>

            <div className="input-container">
              <input 
                type="radio" 
                name="size" 
                id="medium" 
                onClick={handleSize}
                checked={size === 'medium'}
              />
              <label htmlFor="medium">medium</label>
            </div>

            <div className="input-container">
              <input 
                type="radio" 
                name="size" 
                id="large" 
                onClick={handleSize}
                checked={size === 'large'}
              />
              <label htmlFor="large">large</label>
            </div>

          </div>
        </form>
      </li>
    </>
  )
}

