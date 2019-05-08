import React from 'react'
import './TransitionComponent.scss';

const TransitionComponent = ({children, direction}) => {

  return (
    <div className={`transition-component ${direction}`}>
        {children}
    </div>
  )
}

export default TransitionComponent;
