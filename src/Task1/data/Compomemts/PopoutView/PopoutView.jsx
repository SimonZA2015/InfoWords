import React from "react";
import BlockInput from "../BlockInput/BlockInput";
import BlockResult from "../BlockResult/BlockResult";

import style from './PopoutView.module.css';

const PopoutView = ({props}) => {

    return (
        <div className={style.body}>
            <BlockInput props={props} />
            <BlockResult props={props} />
        </div>
    )
};

export default PopoutView;