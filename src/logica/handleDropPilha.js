    function verificaNaipe(naipeAtual,naipeProx){ //retorna verdadeiro se o naipe for de cores opostas
        
        if(naipeAtual == 'c' && (naipeProx == 'p' || naipeProx == 'e')){
            return true;
        }
        if(naipeAtual == 'o' && (naipeProx == 'p' || naipeProx == 'e')){
            return true;
        }
        if(naipeAtual == 'p' && (naipeProx == 'c' || naipeProx == 'o')){
            return true;
        }
        if(naipeAtual == 'e' && (naipeProx == 'c' || naipeProx == 'o')){
            return true;
        }
        return false
    }


export const handleDropPilha = (e, pilhaIndex, setPilhas, pilhas, setEspaco1, setEspaco2, setEspaco3, setEspaco4) => {
    e.preventDefault();
    const setEspacos = {  //mapa de funções só pra não fazer if else no quando for verificar qual setEspaco está sendo passado
    1: setEspaco1,
    2: setEspaco2,
    3: setEspaco3,
    4: setEspaco4,
    };
    
    const data = JSON.parse(e.dataTransfer.getData('application/json'));
    const { carta, indexMovimentacao } = data;
    const cartaTopo = pilhas[pilhaIndex]?.[pilhas[pilhaIndex].length - 1]; //pega a ultima carta do final / primeira da pilha 
    
    if(cartaTopo === undefined){ //tratamento para quando a pilha está fazia
        setPilhas((prevPilhas) => {
        const novasPilhas = [...prevPilhas]; //cria um novo array. o React não aceita o push() porque séria uma mudança de estado direta no use state
        novasPilhas[pilhaIndex] = [...novasPilhas[pilhaIndex], carta];
        return novasPilhas})
        if(data.isPilha){
            setPilhas((prevPilhas) => {
            const novasPilhas = [...prevPilhas];
            novasPilhas[data.pilhaIndex] = [...novasPilhas[data.pilhaIndex]];
            novasPilhas[data.pilhaIndex].pop();
            return novasPilhas;})
        }
        else{
            setEspacos[indexMovimentacao](null);
        } 
    }

    const numeroProx = carta.slice(0, (carta.length -1))
    const naipeProx = carta.slice(-1); 

    const numeroAtual = cartaTopo.slice(0, (cartaTopo.length -1))
    const naipeAtual = cartaTopo.slice(-1);

    if(numeroProx == (numeroAtual-1) && verificaNaipe(naipeAtual, naipeProx)){
    setPilhas((prevPilhas) => {
    const novasPilhas = [...prevPilhas];
    novasPilhas[pilhaIndex] = [...novasPilhas[pilhaIndex], carta];
    return novasPilhas})

    if(data.isPilha){
    setPilhas((prevPilhas) => {
    const novasPilhas = [...prevPilhas];
    novasPilhas[data.pilhaIndex] = [...novasPilhas[data.pilhaIndex]];
    novasPilhas[data.pilhaIndex].pop();
    return novasPilhas;})
    }
    else{
        setEspacos[indexMovimentacao](null);
    } 
    }
    else{
        window.alert("Naipe tem que ser de cor diferente e seguindo a ordem decrescente")
    }
    
    
};