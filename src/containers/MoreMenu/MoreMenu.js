import React, { Component } from 'react'
import Close from '../../asset/svg/ic_close.svg';
import './MoreMenu.scss';

export class MoreMenu extends Component {

  close = () => {
    const target = document.querySelector('.right-to-left');
    const targetListHome = document.getElementById('list-home');
    targetListHome.classList.remove('hide');
    target.classList.remove('run');
  }
  
  render() {
    return (
      <div>
          <div className="top-gnb">
            <button type="button" onClick={this.close}><img src={Close} alt="" /></button>
            <h2>더 보기</h2>
          </div>
      </div>
    )
  }
}

export default MoreMenu;
