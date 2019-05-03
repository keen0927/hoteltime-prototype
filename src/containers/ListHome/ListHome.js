import React, {Component, Fragment} from 'react';
import ProdcutHome from "../../components/ProductHome";
import TitleHome from "../../components/TitleHome";

class ListHome extends Component {
    render() {
        return (
            <Fragment>
                <TitleHome />
                <ProdcutHome />
            </Fragment>
        );
    }
}

export default ListHome;
