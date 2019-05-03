import React, {Component} from 'react';
import Header from '../../containers/Header';
import ListHome from '../../containers/ListHome';
import BottomGnb from "../../containers/BottomGNB";

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <ListHome />
                <BottomGnb />
            </div>
        );
    }
}

export default Home;
