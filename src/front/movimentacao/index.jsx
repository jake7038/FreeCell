import './style.css'
import { useState } from 'react'
import { handleArrastarSec } from '../../logica/handleArrastar';
import { handleDropMovimentacao } from '../../logica/handleDropMovimentacao';

    const  Movimentacao = ({pilhas, setPilhas, espaco1 , espaco2, espaco3, espaco4, setEspaco1, setEspaco2, setEspaco3, setEspaco4  }) => {

    return(
        <ul className='lista'>
            <li onDrop={(e) => handleDropMovimentacao(e,setEspaco1,espaco1, setPilhas)} onDragOver={(e) => e.preventDefault()}  className='retangulo'> 
                {espaco1 && <img draggable onDragStart={(e) => handleArrastarSec(e, espaco1, 1)} src={`/assets/${espaco1}.png`} alt=""  style={{ width: '100%', height: '100%', objectFit: 'contain' }} />} 
            </li>

            <li onDrop={(e) => handleDropMovimentacao(e,setEspaco2,espaco2, setPilhas)} onDragOver={(e) => e.preventDefault()}  className='retangulo'> 
                {espaco2 && <img draggable onDragStart={(e) => handleArrastarSec(e, espaco2, 2)} src={`/assets/${espaco2}.png`} alt=""  style={{ width: '100%', height: '100%', objectFit: 'contain' }} />} 
            </li> 

            <li onDrop={(e) => handleDropMovimentacao(e,setEspaco3,espaco3, setPilhas)} onDragOver={(e) => e.preventDefault()}  className='retangulo'> 
                {espaco3 && <img draggable onDragStart={(e) => handleArrastarSec(e, espaco3, 3)} src={`/assets/${espaco3}.png`} alt=""  style={{ width: '100%', height: '100%', objectFit: 'contain' }} />} 
            </li>
            
            <li onDrop={(e) => handleDropMovimentacao(e,setEspaco4,espaco4, setPilhas)} onDragOver={(e) => e.preventDefault()}  className='retangulo'> 
                {espaco4 && <img draggable onDragStart={(e) => handleArrastarSec(e, espaco4, 4)} src={`/assets/${espaco4}.png`} alt=""  style={{ width: '100%', height: '100%', objectFit: 'contain' }} />} 
            </li>
        </ul>
    )
}
export default Movimentacao