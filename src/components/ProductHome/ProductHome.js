import React from 'react';
import './ProductHome.scss';

const ProdcutHome = ({
    image,
    productName,
    productDetail,
    productDetailPolicy,
    priceDC,
    priceDefault,
    badgeType,
    packageInfo}) => {

    return (
        <div className={`product-home`}>
            <p className={`image-wrap`}><img src={image} alt=""/></p>
            <p className={`product-name`}>{productName}</p>
            <p className={`product-detail`}>{productDetail} | <span>{productDetailPolicy}</span></p>
            <p className={`product-info`}>
                <span>{priceDC}</span>
                <span>{priceDefault}</span>
                <span>{badgeType}</span>
            </p>
            
            <p className={`package-info`}><b>PACKAGE</b> {packageInfo}</p>
        </div>
    );
};

export default ProdcutHome;
