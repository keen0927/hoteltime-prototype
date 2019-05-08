import React, {Component, Fragment} from 'react';
import ProdcutHome from "../../components/ProductHome";
import TitleHome from "../../components/TitleHome";

class ListHome extends Component {

    state = {
        products: [
            {
                image: 'https://image.goodchoice.kr/event/view/event/643/list/6387.jpg',
                productName: '제휴점명 상품',
                productDetail: '상품 상세정보',
                productDetailPolicy: '정책에 따라 노출',
                priceDC: '50%',
                priceDefault: '356,000',
                badgeType: 'Badge A',
                packageInfo: '패키지 정보'
            },
            {
                image: 'https://image.goodchoice.kr/event/view/event/643/list/6387.jpg',
                productName: '제휴점명 상품',
                productDetail: '상품 상세정보',
                productDetailPolicy: '정책에 따라 노출',
                priceDC: '50%',
                priceDefault: '356,000',
                badgeType: 'Badge A',
                packageInfo: '패키지 정보'
            },
            {
                image: 'https://image.goodchoice.kr/event/view/event/643/list/6387.jpg',
                productName: '제휴점명 상품',
                productDetail: '상품 상세정보',
                productDetailPolicy: '정책에 따라 노출',
                priceDC: '50%',
                priceDefault: '356,000',
                badgeType: 'Badge A',
                packageInfo: '패키지 정보'
            },
            {
                image: 'https://image.goodchoice.kr/event/view/event/643/list/6387.jpg',
                productName: '제휴점명 상품',
                productDetail: '상품 상세정보',
                productDetailPolicy: '정책에 따라 노출',
                priceDC: '50%',
                priceDefault: '356,000',
                badgeType: 'Badge A',
                packageInfo: '패키지 정보'
            },
            {
                image: 'https://image.goodchoice.kr/event/view/event/643/list/6387.jpg',
                productName: '제휴점명 상품',
                productDetail: '상품 상세정보',
                productDetailPolicy: '정책에 따라 노출',
                priceDC: '50%',
                priceDefault: '356,000',
                badgeType: 'Badge A',
                packageInfo: '패키지 정보'
            },
            {
                image: 'https://image.goodchoice.kr/event/view/event/643/list/6387.jpg',
                productName: '제휴점명 상품',
                productDetail: '상품 상세정보',
                productDetailPolicy: '정책에 따라 노출',
                priceDC: '50%',
                priceDefault: '356,000',
                badgeType: 'Badge A',
                packageInfo: '패키지 정보'
            }
        ]        
    }
    render() {

        const ProductMap = this.state.products.map(
            (product, index) => {
                return <ProdcutHome
                    image={product.image}
                    productName={product.productName}
                    productDetail={product.productDetail}
                    productDetailPolicy={product.productDetailPolicy}
                    priceDC={product.priceDC}
                    priceDefault={product.priceDefault}
                    badgeType={product.badgeType}
                    packageInfo={product.packageInfo}
                    key={index}
                 />
            }
        )

        return (
            <Fragment>
                <div id="list-home">
                    <TitleHome />
                    {ProductMap}
                </div>
            </Fragment>
        );
    }
}

export default ListHome;
