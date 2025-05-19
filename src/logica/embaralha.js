

function Embaralha () {
    const baralho = [
        '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p', '12p', '13p',
        '1c', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', '11c', '12c', '13c',
        '1o', '2o', '3o', '4o', '5o', '6o', '7o', '8o', '9o', '10o', '11o', '12o', '13o',
        '1e', '2e', '3e', '4e', '5e', '6e', '7e', '8e', '9e', '10e', '11e', '12e', '13e'
        ];
        
        for (let i = baralho.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [baralho[i], baralho[j]] = [baralho[j], baralho[i]];
        }
        return baralho;

}


export default Embaralha

