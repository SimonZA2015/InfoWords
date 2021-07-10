import React from "react";

import style from './Text.module.css';

const Text = (props) => {

    return (
        <div className={style.body}>
            <text>{'Текст: ' + props.text}</text>
        </div>
    )
};

export default Text;