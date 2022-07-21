/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck        = [];
const types     = ['C', 'D', 'H', 'S'];
const specials  = ['A', 'J', 'Q', 'K'];

let pointsPlayer = 0,
    pointsComputer = 0;

// References to HTML
const btnNew = document.querySelector('#btnNew');
const btnDraw = document.querySelector('#btnDraw');
const btnStop = document.querySelector('#btnStop');
const ptjHTML = document.querySelectorAll('small');
const playerCards = document.querySelector('#player-cards');
const computerCards = document.querySelector('#computer-cards');

// create a new deck
const createDeck = () => {
    
    for( let type of types ) {
        for(let i = 2; i <= 10; i++) {
            deck.push(i + type);
        }
        for(let special of specials){
            deck.push(special + type);
        }
    }
    
    deck = _.shuffle(deck);
    return deck;
}

createDeck();


// give a card
const giveCard = () => {

    const card = (deck.length === 0)? 'There is not cards' : deck.pop();
    return card;
    
}

// giveCard();

const valueCard = card => {
    
    const value = card.substring(0, card.length - 1);
    return  ( isNaN(value)  )?
            ( value === 'J' )? 11 :
            ( value === 'Q' )? 12 :
            ( value === 'K' )? 13 : 
            ( value === 'A' )? 11 : 10
            : value * 1;

}
        
const points = valueCard( giveCard() );
// console.log( points );


// Events
btnDraw.addEventListener('click', () => {

    const card = giveCard();
    
    pointsPlayer += valueCard(card);
    ptjHTML[0].innerText = pointsPlayer;

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add('card');
    playerCards.append(imgCard);

    if ( pointsPlayer > 21 ) {

        btnDraw.disabled = true;
        btnStop.disabled = true;
        computerTurn( pointsPlayer );
        
    } else if ( pointsPlayer === 21 ) {
        
        btnDraw.disabled = true;
        btnStop.disabled = true;
        computerTurn( pointsPlayer );

    }

});

const computerTurn = (minPoints) => {

    do {
        const card = giveCard();

        pointsComputer += valueCard(card);
        ptjHTML[1].innerText = pointsComputer;

        const imgCard = document.createElement('img');
        imgCard.src = `assets/cartas/${card}.png`;
        imgCard.classList.add('card');
        computerCards.append(imgCard);

        if ( minPoints > 21 ) {
            break;
        }

    } while ( (pointsComputer < minPoints) && (minPoints <= 21) );

    setTimeout(() => {
        if ( pointsComputer === minPoints ) {
            alert('Tie!');
        } else if ( minPoints > 21 ) {
            alert('Sorry, you lost!');
        } else if ( pointsComputer > 21 ) {
            alert('Great, you won!');
        } else {
            alert('Sorry, you lost!');
        }
    }, 25);

}

btnStop.addEventListener('click', () => {

    btnDraw.disabled = true;
    btnStop.disabled = true;

    computerTurn( pointsPlayer );

});

btnNew.addEventListener('click', () => {
    
    deck = createDeck();
    
    btnDraw.disabled = false;
    btnStop.disabled = false;
    
    pointsPlayer    = 0;
    pointsComputer  = 0;

    ptjHTML[0].innerText = pointsPlayer;
    ptjHTML[1].innerText = pointsComputer;

    playerCards.innerHTML = '';
    computerCards.innerHTML = '';

    console.clear();

});



