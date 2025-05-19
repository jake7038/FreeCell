import './style.css'
import { useState } from 'react'
import { handleDropFinal } from '../../logica/handleDropfinal';
import { handleArrastarSec } from '../../logica/handleArrastar';
    const  Pilhafinal = ({pilhas, setPilhas}) => {
        const [copas, setCopas] = useState(`0c`);
        const [paus, setPaus] = useState(`0p`);
        const [ouros, setOuros] = useState(`0o`);
        const [espadas, setEspadas] = useState(`0e`);



    return(
        <ul className='lista'>
            <li className='retangulo' onDrop={(e) => handleDropFinal(e,setCopas,copas, setPilhas)} onDragOver={(e) => e.preventDefault()} >
                <img draggable onDragStart={(e) => handleArrastarSec(e, carta)} src={`/assets/${copas}.png`} alt=""  style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </li>
            <li className='retangulo' onDrop={(e) => handleDropFinal(e,setPaus,paus, setPilhas)} onDragOver={(e) => e.preventDefault()} >
                <img src={`/assets/${paus}.png`} alt=""  style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </li>
            <li className='retangulo' onDrop={(e) => handleDropFinal(e,setOuros,ouros, setPilhas)} onDragOver={(e) => e.preventDefault()} >
                <img src={`/assets/${ouros}.png`} alt=""  style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </li>
            <li className='retangulo' onDrop={(e) => handleDropFinal(e,setEspadas,espadas, setPilhas)} onDragOver={(e) => e.preventDefault()} >
                <img src={`/assets/${espadas}.png`} alt=""  style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </li>
        </ul>
    )
}
export default Pilhafinal