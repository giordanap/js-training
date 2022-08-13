import { getJoke } from "./http-provider";


const body = document.body;
let btnOther, olList;
let njoke = 1;

const createJokeHtml = () => {

    const html = `
        <h1 class="mt-5">Test</h1>
        <hr>
    
        <button class="btn btn-primary">Other joke</button>
    
        <ol class="mt-2 list-group"> </ol>
    `;

    const divJoke = document.createElement('div');
    divJoke.innerHTML = html;

    body.append(divJoke);

}

const events = () => {

    olList   = document.querySelector('ol');
    btnOther = document.querySelector('button');

    btnOther.addEventListener('click', async() => {
        
        btnOther.disabled = true;
        
        drawJoke( await getJoke() );
        
        btnOther.disabled = false;

    });

}

// chiste { id, value }
const drawJoke = ( joke ) => {

    const olItem = document.createElement('li');
    
    olItem.innerHTML = `<b>${ njoke++ }. ${ joke.id }</b>: ${ joke.value }`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);

}



export const init = () => {
    createJokeHtml();
    events();
}
