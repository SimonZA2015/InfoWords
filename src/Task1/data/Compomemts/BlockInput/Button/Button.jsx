import React from "react";

import style from './Button.module.css';

const Button = (props) => {

    return (
        <div className={style.body} onClick={props.onClick}>
            <img
                src={props.image}
                alt={'summit button'}
            />
        </div>
    )
};

export default Button;