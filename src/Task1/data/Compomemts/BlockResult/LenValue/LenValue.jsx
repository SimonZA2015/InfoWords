import React from "react";

import style from './LenValue.module.css';

const LenValue = (props) => {

    return (
        <div className={style.body}>
            <text>{props.len + ' = кол-во слов'}</text>
        </div>
    )
};

export default LenValue;