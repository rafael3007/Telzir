import style from './Modal.module.scss'

interface Props {
    onClick: () => void;
}

export default function Modal({onClick}: Props) {
    return(
        <div>
            Mostrar Resultado!
            <button onClick={onClick}>Fechar</button>
        </div>
    )
};
