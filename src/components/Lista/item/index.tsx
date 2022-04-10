import React from "react";
import style from '../Lista.module.scss';

interface item {
    tarefa: String;
    tempo: String;
}

export default function Item({tarefa, tempo}: item) {

    return(
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )  
};
