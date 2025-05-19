export const handleDropFinal = (e, setEspaco, valorAtual, setPilhas) => {
    e.preventDefault();

    const data = JSON.parse(e.dataTransfer.getData('application/json')); //aqui eu estou recuperando os dados e desestruturando o json para autilizar os valores
    const { carta ,pilhaIndex } = data;

    const numeroProx = carta.slice(0, carta.length -1)
    const naipeProx = carta.slice(-1); 

    const numeroAtual = valorAtual.slice(0, carta.length -1)
    const naipeAtual = valorAtual.slice(-1);

    if (numeroAtual == (numeroProx-1) && (naipeAtual == naipeProx) ) {
        setEspaco(carta);
        
        setPilhas((prevPilhas) => {
    const novasPilhas = [...prevPilhas];
    novasPilhas[pilhaIndex] = [...novasPilhas[pilhaIndex]];
    novasPilhas[pilhaIndex].pop();
    return novasPilhas;})
    }else{
        window.alert("As cartas tem que ter o mesmo naipe e serem inseridas em ordem do A até o Rei");
        console.log(`${numeroAtual} ${numeroProx} ${naipeAtual} ${naipeProx} `)
        return
    }
};