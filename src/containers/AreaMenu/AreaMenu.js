import React, { Component } from 'react'
import SVG_backword from '../../asset/svg/ic_backward.svg';
import './AreaMenu.scss';

export class AreaMenu extends Component {

  close = () => {
    const target = document.querySelector('.top-to-bottom');
    const targetListHome = document.getElementById('list-home');
    targetListHome.classList.remove('hide');
    target.classList.remove('run');
  }
  
  render() {
    return (
      <div className="area-menu">
          
          <button 
            type="button"
            onClick={this.close}
            className="close-area-menu">
            <img src={SVG_backword} alt="" />
          </button>

          
          
      </div>
    )
  }
}

export default AreaMenu;
