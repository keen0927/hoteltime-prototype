import React from 'react';
import './ProductHome.scss';

const ProdcutHome = () => {
    return (
        <div className={`product-home`}>
            <p className={`image-wrap`}><img src="https://image.goodchoice.kr/event/view/event/643/list/6387.jpg" alt=""/></p>
            <p className={`product-name`}>제휴점명 상품명</p>
            <p className={`product-detail`}>상품 상세정보 | <span>정책에 따라 노출</span></p>
            <p className={`product-info`}>
                <span>50%</span>
                <span>000,000원</span>
                <span>BADGE A</span>
            </p>
            <p className={`package-info`}><b>PACKAGE</b> 패키지 정보</p>
        </div>
    );
};

export default ProdcutHome;
