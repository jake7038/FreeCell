

export const handleDropMovimentacao = (e, setEspaco, valorAtual, setPilhas) => {
    e.preventDefault();
    if (valorAtual) {
        console.log('Espaço ocupado');
        return;
    }

    const data = JSON.parse(e.dataTransfer.getData('application/json')); //aqui eu estou recuperando os dados e desestruturando o json par autilizar os valores
    const { pilhaIndex, carta } = data;
    setEspaco(carta);
    setPilhas((prevPilhas) => {
    const novasPilhas = [...prevPilhas];
    novasPilhas[pilhaIndex] = [...novasPilhas[pilhaIndex]];
    novasPilhas[pilhaIndex].pop();
    return novasPilhas;})
    
};