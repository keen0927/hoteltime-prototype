import React, {Component} from 'react';
import GNB from "../../components/GNB";
import TransitionComponent from "../../components/TransitionComponent";
import MoreMenu from '../../containers/MoreMenu';

class BottomGnb extends Component {

    handlerOpenMoreMenu = () => {
        const target = document.querySelector('.right-to-left');
        target.classList.add('run');
        setTimeout(() => {
            const targetListHome = document.getElementById('list-home');
            targetListHome.classList.add('hide');
        },400);
    }

    render() {
        return (
            <div>
                <GNB handlerOpenMoreMenu={this.handlerOpenMoreMenu} />
                <TransitionComponent 
                    children={<MoreMenu />} 
                    direction="right-to-left"
                />
            </div>
        );
    }
}

export default BottomGnb;
