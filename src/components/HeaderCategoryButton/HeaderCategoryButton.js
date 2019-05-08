import React from 'react';
import './HeaderCategoryButton.scss'

const HeaderCategoryButton = ({name}) => {

    return (
        <div className="header-category-button">
            <button type="button">{name}</button>
        </div>
    );
};

export default HeaderCategoryButton;