import React, {useState} from 'react';

import style from './BlockInput.module.css';
import Input from "./Input/Input";
import Button from "./Button/Button";

const BlockInput = ({props}) => {

    const [str, setStr] = useState();

    const go = () => {
        props.dispatch({
            type: 'GET-WORDS',
            text: str,
        })
    }

    return (
        <div className={style.body}>
            <Input
                set={setStr}
                hint={'String identifier'}
            />
            <Button
                onClick={go}
                image={'https://img.crazylister.com/10897/images/sign-check-icon.png?versionId=iTRWi9X48qzKdPzMYms1itpxiHPOsfdr&pid=369'}
            />
        </div>
    )
};

export default  BlockInput;