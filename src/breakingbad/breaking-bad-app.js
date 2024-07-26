/***
 * @returns {Object} information
 */
let id_personaje = 1;

const fetchQuote = async()=>{
    
    const url_api = 'https://rickandmortyapi.com/api/character/';
    const res =await fetch(`${url_api}${id_personaje.toString()}`);
    
    const data = await res.json();
    console.log( data );
    return data;
}
/**
 * 
 * @param {HTMLDivElement} element 
 */
const Breakingbad = async(element)=>{
    document.querySelector('#app-title').innerHTML = 'Breakingbad App'
    //element.innerHTML = 'Loading...'
    
    //fetchQuote();
    const quoteLabel = document.createElement('blockqoute');
    const authoLabel = document.createElement('h3');
    const nextQouteButton = document.createElement('button');

    nextQouteButton.innerHTML = 'Next Quote';

    const renderQoute = ( data )=>{
        quoteLabel.innerHTML = data.name;
        authoLabel.innerHTML = data.location.name;

        element.replaceChildren( quoteLabel , authoLabel ,nextQouteButton );
    }

    //listener
    nextQouteButton.addEventListener('click',async()=>{
        element.innerHTML = 'Loading...';
        id_personaje++;
        const quote = await fetchQuote();
        renderQoute( quote );
    })

    fetchQuote()
        .then( (renderQoute) );
    
}

export {
    Breakingbad
}