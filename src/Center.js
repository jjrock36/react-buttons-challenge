import React from 'react'

export const Center = ({button, icon, size, color, isDisabled, isBoxShadow}) => {
  return (
    <>
      <div className="section-center">

        <button className={`btn  ${size} ${color} ${isDisabled ? 'disabled' : ''} ${isBoxShadow ? 'shadow' : ''} ${button}`}>
          <span class={`material-icons ${icon === 'leading' ? '' : 'hide-icon'}`}>star</span>

          <span className="btn-text">button</span>

          <span class={`material-icons ${icon === 'lagging' ? '' : 'hide-icon'}`}>star</span>
        </button>

      </div>
    </>
  )
}
