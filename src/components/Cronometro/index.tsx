import Botao from "../Botao";
import Relogio from "./Relogio";

export default function Cronometro() {
    const handleClick = () =>{

    }

    return(
        <div>
            <p>Escolha um card e inicie o cronometro.</p>
            <div>
                <Relogio/>
            </div>
            <Botao text={"Começar!"} click={handleClick}/>
        </div>
    )
};
