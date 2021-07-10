import React from "react";

import style from './Input.module.css';

const Input = (props) => {

    return (
        <div className={style.body}>
            <input
                onChange={
                    (event) => props.set(event.currentTarget.value)
                }
                placeholder={props.hint}
            />
        </div>
    )
};

export default Input;