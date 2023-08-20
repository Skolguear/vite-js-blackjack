import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCartas Ejemplo: ['C','D','H','S']
 * @param {Array<String>} cartasEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */


export const crearDeck = (tiposDeCartas, cartasEspeciales) => {


    if(!tiposDeCartas || tiposDeCartas.length === 0) 
        throw new Error('tipos de cartas es obligatorio como un arreglo de string');
    if(!cartasEspeciales || cartasEspeciales.length === 0) 
        throw new Error('tipos de cartas es obligatorio como un arreglo de string');
    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of cartasEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}



