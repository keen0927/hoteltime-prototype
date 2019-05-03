import React from 'react';
import './GNB.scss';

import Search from '../../asset/svg/ic_nav_search.svg';
import Discover from '../../asset/svg/ic_nav_discover.svg';
import Res from '../../asset/svg/ic_nav_res.svg';
import Fav from '../../asset/svg/ic_nav_fav.svg';
import More from '../../asset/svg/ic_nav_more.svg';

const GNB = () => {
    return (
        <ul className={`bottom-gnb`}>
            <li><img src={Search} alt="탐색" />탐색</li>
            <li><img src={Discover} alt="발견" />발견</li>
            <li><img src={Res} alt="예약내역" />예약내역</li>
            <li><img src={Fav} alt="찜목록" />찜목록</li>
            <li><img src={More} alt="더보기" />더보기</li>
        </ul>
    );
};

export default GNB;
