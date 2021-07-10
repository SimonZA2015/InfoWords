import React from "react";
import ValueBlock from "./ValueBlock/ValueBlock";

import style from './BlockResult.module.css';

const BlockResult = ({props}) => {

    const adapter = props.dispatch({type: 'GET-RESULT'});

    return (
        <div className={style.body}>
            {adapter.map((data) => (
                <ValueBlock text={data[0]} lenV={data[1]} lenW={data[2]} />
            ))}
        </div>
    )
};

export default BlockResult;