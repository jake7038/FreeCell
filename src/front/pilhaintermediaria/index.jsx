import './style.css'
import { handleArrastar } from '../../logica/handleArrastar'
import { handleDropPilha } from '../../logica/handleDropPilha'

const  Pilha = ({pilhas, setPilhas , setEspaco1, setEspaco2, setEspaco3, setEspaco4  }) => {

    return(
        <>
            <ul className='pilha'>
            {pilhas.map((pilha, pilhaIndex) => (
                <li onDrop={(e) => handleDropPilha(e,pilhaIndex, setPilhas, pilhas, setEspaco1, setEspaco2, setEspaco3, setEspaco4)} onDragOver={(e) => e.preventDefault()}  key={pilhaIndex}>
                    {pilha.map((carta, cartaIndex) => {
                    const isUltima = (cartaIndex === pilha.length - 1)
                        const deslocamento = (isUltima)
                        ? cartaIndex * 40 
                        : cartaIndex * 35; 
                    return(
                    <img
                    key={cartaIndex}
                    draggable={cartaIndex === pilha.length - 1}
                    onDragStart={(e) =>
                    cartaIndex === pilha.length - 1 &&
                    handleArrastar(e, carta, pilhaIndex)}
                    src={`/assets/${carta}.png`}
                    alt={carta}
                    className="carta"
                    style={{ top: `${deslocamento}px`,zIndex: cartaIndex }}
                    />
                    )}
                        )
                    }
                        
                    
                </li>))}
            </ul>
        </>
        
    )
}
export default Pilha