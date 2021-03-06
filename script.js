
'use strict';

// window.onload = function() { -- put your code here};
    
//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');   //get element by query selector
const score1El = document.getElementById('score--1');  //get element by getElementById both are work same its just to show that this is also exist
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let score, currentScore, activePlayer, playing;


const init = function () {

//Starting Condition
score = [0,0]
activePlayer = 0
currentScore = 0
playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

diceEl.classList.add('hidden');
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active'); 
};

init();

const switchPlayer = function() {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;  //switch the player
        activePlayer = activePlayer === 0 ? 1 : 0; //Here 0 and 1 is player 
        
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
};
//Rolling dice functionality

btnRoll.addEventListener('click', function () {

        if(playing) {
        //Generating a rendom dice roll 
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        //Display dice 
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //Check for rolled 1 : and check condtion and according to condition switch the player
        if(dice !== 1) {
                currentScore += dice;
                document.getElementById(`current--${activePlayer}`).textContent = currentScore;  
        }else {
                switchPlayer();
        }
   }
});

btnHold.addEventListener('click', function() {

        if(playing) {
                score[activePlayer] += currentScore; //add current score to active player!
        // score[1] = score[1] + currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        
        if(score[activePlayer] >= 100) {
                
                playing = false;
                diceEl.classList.add('hidden');

                document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
                console.log(activePlayer);

                
        }else {
                switchPlayer(); //switch player
                }
        }
        
        
});


//New Game!
btnNew.addEventListener('click', init);

