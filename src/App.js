import React from "react";
import PopoutView from "./Task1/data/Compomemts/PopoutView/PopoutView";

import style from './App.module.css';

const App = (props) => {

    return (
        <div className={style.body}>
            <PopoutView props={props} />
        </div>
    );
};

export default App;
