import React, { useState } from "react";
import Botao from "../Botao";
import Modal from "../Modal";

import style from './Formulario.module.scss'


export default function Formulario(){
    const [codCaller,setCodCaller] = useState("");
    const [codReceiver,setCodReceiver] = useState("")
    const [time,setTime] = useState("00:00:00")
    const [plan,setPlan] = useState("")
    const [isVisible,SetIsVisible] = useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        //not refresh page
        event.preventDefault()

        //send data and return calc
        console.log({
            caller: codCaller,
            receiber: codReceiver,
            time: time,
            plan: plan
        })
        SetIsVisible(true)
        //show result


    }

    const handleCloseModal = () =>{
        SetIsVisible(false)
    }
    
    return(
        <form className={style.novaTarefa} onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Seu numero</label>
                <input 
                    type={"text"}
                    name="codCaller" 
                    id="codCaller"
                    value={codCaller}
                    onChange={event=>setCodCaller(event.target.value)}
                    placeholder="Digite o codigo de origem"
                    
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Numero a receber a chamada</label>
                <input 
                    type={"text"} 
                    name="codReceiver" 
                    id="codReceiver"
                    value={codReceiver}
                    onChange={event=>setCodReceiver(event.target.value)}
                    placeholder="Digite o Numero de Destino"
                    
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo da ligação</label>
                <input 
                
                    type={"time"} 
                    name="codReceiver" 
                    id="codReceiver"
                    value={time}
                    onChange={event=>setTime(event.target.value)}
                    placeholder="Digite o tempo da ligação"
                    
                />
                
            </div>
            <div>
                <label>
                Escolha seu plano
                <select value={plan} onChange={event=>setPlan(event.target.value)}>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                </select>
                </label>

            </div>
            <Botao 
                type="submit"
                text="Calcular!"
            />
            {isVisible && <Modal onClick={handleCloseModal}/>}
        </form>
       
        
    )
}

/**
 * 
 * <datalist id="browsers">
                    <option value="Edge">
                    <option value="Firefox">
                    <option value="Chrome">
                    <option value="Opera">
                    <option value="Safari">
                </datalist>
 */