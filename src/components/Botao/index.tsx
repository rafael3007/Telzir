import React from "react";
import style from './Botao.module.scss'

interface button {
    text: String;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void; 
    
}

export default function Botao({text, type = "button", onClick}: button){

    return(
        <button
            type={type}
            className={style.botao}
            onClick={onClick}
        >
            {text}
        </button>
    )
}