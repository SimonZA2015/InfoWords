import React from "react";
import Text from "../Text/Text";
import LenValue from "../LenValue/LenValue";
import LenVowel from "../LenVowel/LenVowel";

import style from './ValueBlock.module.css';

const ValueBlock = (props) => {

    return (
        <div className={style.body}>
            <Text text={props.text} />
            <LenValue len={props.lenV} />
            <LenVowel len={props.lenW} />
        </div>
    )
};

export default ValueBlock;