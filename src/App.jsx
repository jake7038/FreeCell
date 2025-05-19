import PilhaIntermediaria from "./front/pilhaintermediaria"
import EstiloGlobal from './styles'
import Movimentacao from "./front/movimentacao"
import Pilhafinal from "./front/pilhafinal"
import { useState } from "react"
import Embaralha from "./logica/embaralha"

function App() {

  const baralho = Embaralha();
  //declaração das cartas intermediarias. é uma pilha (ou array) de Pilhas :)
  const [pilhas, setPilhas] = useState([
    baralho.slice(0, 7),
    baralho.slice(7, 14),
    baralho.slice(14, 21),
    baralho.slice(21, 28),
    baralho.slice(28, 34),
    baralho.slice(34, 40),
    baralho.slice(40, 46),
    baralho.slice(46, 52),
        ]);
      
  //declaraçao dos espaços de movimentacao
  const [espaco1, setEspaco1] = useState(null); 
  const [espaco2, setEspaco2] = useState(null); 
  const [espaco3, setEspaco3] = useState(null); 
  const [espaco4, setEspaco4] = useState(null);

  //declaraçao da pilha final // não tratei como uma pilha de fato
  const [copas, setCopas] = useState(`0c`);
  const [paus, setPaus] = useState(`0p`);
  const [ouros, setOuros] = useState(`0o`);
  const [espadas, setEspadas] = useState(`0e`);

  //estruturar melhor isso depois para que não seja necessário passar tantos argumentos assim
  return (
  <>
    <EstiloGlobal></EstiloGlobal>
    <ul style={{listStyle:"none" , display: "flex", justifyContent: "center"}}>
      <li>
        <Movimentacao espaco1={espaco1} espaco2={espaco2} espaco3={espaco3} espaco4={espaco4} setEspaco1={setEspaco1} setEspaco2={setEspaco2} setEspaco3={setEspaco3} setEspaco4={setEspaco4} pilhas={pilhas} setPilhas={setPilhas} ></Movimentacao>
      </li>
      <li>
          <Pilhafinal pilhas={pilhas} setPilhas={setPilhas}></Pilhafinal>
      </li>
    </ul>
    
    <>
      <PilhaIntermediaria setEspaco1={setEspaco1} setEspaco2={setEspaco2} setEspaco3={setEspaco3} setEspaco4={setEspaco4} pilhas={pilhas} setPilhas={setPilhas} ></PilhaIntermediaria>
    </>
    
  </>
  )
}

export default App
