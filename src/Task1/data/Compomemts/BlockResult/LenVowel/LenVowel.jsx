import React from "react";

import style from './LenVowel.module.css';

const LenVowel = (props) => {

    return (
        <div className={style.body}>
            <text>{props.len + ' = кол-во гласных'}</text>
        </div>
    )
};

export default LenVowel;