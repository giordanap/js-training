/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */


(() => {

    'use strict';

    let deck        = [],
        pointsPlayers = [];

    const types     = ['C', 'D', 'H', 'S'],
          specials  = ['A', 'J', 'Q', 'K'];

    const btnNew  = document.querySelector('#btnNew'),
          btnDraw = document.querySelector('#btnDraw'),
          btnStop = document.querySelector('#btnStop');
    
    const divCardsPlayers = document.querySelectorAll('.divCards'),
          ptjHTML        = document.querySelectorAll('small');

    
    // Init game
    const initGame = (numPlayers = 2) => {
        
        deck = createDeck();

        pointsPlayers = [];
        for(let i = 0; i < numPlayers; i++){
            pointsPlayers.push(0);
        }

        ptjHTML.forEach(e => e.innerText = 0);
        divCardsPlayers.forEach(e => e.innerText = '');
        
        btnDraw.disabled = false;
        btnStop.disabled = false;

    }

    // create a new deck
    const createDeck = () => {
        
        deck = [];
        
        for( let type of types ) {
            for(let i = 2; i <= 10; i++) {
                deck.push(i + type);
            }
            for(let special of specials){
                deck.push(special + type);
            }
        }
        
        return _.shuffle(deck);

    }

    // give a card
    const giveCard = () => {

        if (deck.length === 0) { throw 'There is not cards' } 
        return deck.pop();

    }

    const valueCard = card => {
        
        const value = card.substring(0, card.length - 1);
        return  ( isNaN(value)  )?
                ( value === 'J' )? 11 :
                ( value === 'Q' )? 12 :
                ( value === 'K' )? 13 : 
                ( value === 'A' )? 11 : 10
                : value * 1;

    }
            
    const accumPoints = ( card, turn) => {

        pointsPlayers[turn] += valueCard(card);
        ptjHTML[turn].innerText = pointsPlayers[turn];

        return pointsPlayers[turn];

    }

    const createCard = ( card, turn ) => {

        const imgCard = document.createElement('img');
        imgCard.src = `assets/cartas/${card}.png`;
        imgCard.classList.add('card');
        divCardsPlayers[turn].append(imgCard);

    }

    const determineWinner = () => {

        const [ minPoints, pointsComputer ] = pointsPlayers;

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

        }, 1000);
        
    }
    
    const computerTurn = (minPoints) => {

        let pointsComputer = 0;

        do {

            const card = giveCard();

            pointsComputer = accumPoints( card, pointsPlayers.length - 1 );
            createCard( card,  pointsPlayers.length - 1);

        } while ( (pointsComputer < minPoints) && (minPoints <= 21) );

        determineWinner();

    }
    
    btnNew.addEventListener('click', () => {
        
        initGame();

    });

    btnDraw.addEventListener('click', () => {

        const card = giveCard();
        
        const pointsPlayer = accumPoints( card, 0 );

        createCard( card, 0 );

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

    btnStop.addEventListener('click', () => {

        btnDraw.disabled = true;
        btnStop.disabled = true;

        computerTurn( pointsPlayers[0] );

    });

})();



