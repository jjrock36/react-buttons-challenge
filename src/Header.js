import React from 'react'

export const Header = ({showSidebar, handleSidebar, button, handleButton }) => {
  return (
    <>
      <div className="section-header">
          <ul className="button-type">
            <li>
              <span className={`${button === 'contained' ? 'active' : ''}`} id='contained' onClick={handleButton}>contained</span>
            </li>
            <li>
              <span className={`${button === 'outlined' ? 'active' : ''}`} id='outlined' onClick={handleButton}>outlined</span>
            </li>
            <li>
              <span className={`${button === 'text' ? 'active' : ''}`} id='text' onClick={handleButton}>text</span>
            </li>
          </ul>
          <span 
            className={
              `material-icons md-dark tune-btn ${showSidebar ? 'hide-icon' : ''}`
            }
            onClick={handleSidebar}
          >tune</span>
        </div>
    </>
  )
}
