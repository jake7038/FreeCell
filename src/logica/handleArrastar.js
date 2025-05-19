export const handleArrastar = (e, carta, pilhaIndex) => { //função quando carta é arrastada
    const data = { carta, pilhaIndex, isPilha: true}; //objeto criado com o valor da carta e o index da pilha
    e.dataTransfer.setData('application/json', JSON.stringify(data)); //transferindo o data em forma de json para o componente que vai ser dropado a carta

    }

    export const handleArrastarSec = (e, carta, indexMovimentacao) => { //função quando carta é arrastada do campo de movimentacao ou final
    const data = { carta, indexMovimentacao, isPilha: false}
    e.dataTransfer.setData('application/json', JSON.stringify(data)); //transferindo o valor da carta e qual campo
        
    }