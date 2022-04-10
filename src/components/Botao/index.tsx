import React from "react";
import style from './Botao.module.scss'

interface button {
    text: String;
    click: () => void; 
    
}

export default function Botao({click, text}: button){
    return(
        <button 
            className={style.botao}
            onClick={click}
        >
            {text}
        </button>
    )
}