import React from 'react';
import './InputButtonDefault.scss';

const InputButtonDefault = ({text, handlerOpenAreaMenu}) => {
    return (
        <div>
            <button 
                className="input-button__default" 
                type="button"
                onClick={handlerOpenAreaMenu}>
                {text}
            </button>
        </div>
    );
};

export default InputButtonDefault;
