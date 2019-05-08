import React, {Component, Fragment} from 'react';
import InputButtonDefault from '../../components/InputButtonDefault';
import HeaderCategoryButton from '../../components/HeaderCategoryButton';
import TransitionComponent from "../../components/TransitionComponent";
import AreaMenu from '../../containers/AreaMenu';

import SVG_Map from '../../asset/svg/ic_map.svg';

import './Header.scss';
class Header extends Component {

    state = {
        category: [
            {
                name: 'item1'
            },
            {
                name: 'item2'
            },
            {
                name: 'item3'
            },
            {
                name: 'item4'
            },                                    
        ]
    }

    headerAnimate = () => {
        window.addEventListener('scroll',function(){
            const scrollY = window.pageYOffset;
            const titleBar = document.querySelector('.title-bar');
            const titleHome = document.querySelector('.title-home');
            const header = document.querySelector('header');
            const datePersonalArea = document.querySelector('.date-personal-area');

            if ( scrollY === 0 ) {
                titleBar.classList.remove('hide');                
                datePersonalArea.classList.remove('hide');
                titleHome.classList.remove('hide');
                header.classList.remove('shadow-add');
            } else {
                titleBar.classList.add('hide');
                datePersonalArea.classList.add('hide');
                titleHome.classList.add('hide');
                header.classList.add('shadow-add');
            }
        });
    }

    handlerOpenAreaMenu = () => {
        const target = document.querySelector('.top-to-bottom');
        target.classList.add('run');
        setTimeout(() => {
            const targetListHome = document.getElementById('list-home');
            targetListHome.classList.add('hide');
        },400);            
    }    

    componentDidMount() {
        this.headerAnimate();
    }

    render() {

        const category = this.state.category.map((category, index) => {
            return <HeaderCategoryButton 
                name={category.name} 
                key={index}
            />
        });

        return (
            <Fragment>
                <header>
                    <div className="title-bar">
                        <h1>HOTELTIME</h1>
                        <button type="button"><img src={SVG_Map} alt="" /></button>
                    </div> 
                    <div className="area-bar">
                        <InputButtonDefault 
                            text="지역명(정책에 따름)"
                            handlerOpenAreaMenu={this.handlerOpenAreaMenu}
                        />                
                    </div>
                    <div className="date-personal-area">
                        <InputButtonDefault text="일정(정책에 따름)" />
                        <InputButtonDefault text="인원(정책에 따름" />                
                    </div>
                    <div className="swiper-area">
                        {category}
                    </div>
                </header>
                <TransitionComponent 
                    children={<AreaMenu />} 
                    direction="top-to-bottom"
                />     
            </Fragment>
        );
    }
}

export default Header;
