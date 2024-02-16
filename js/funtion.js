function keyboardPressHandler(event){
    const playerPressed = event.key;

    if(playerPressed === 'Escape'){
        gameOver();
    }
    const correctAlphabet = document.getElementById('displayText');
    const alphabet = correctAlphabet.innerText;
    const expectedAlphabet = alphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
       const currentNewScore = setElementValueById('current-score');
        const newScore = currentNewScore + 1;

        setValue('current-score',newScore);

        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }else{
        const currentLife = setElementValueById('life');
        const newCurrentLife = currentLife - 1;

        setValue('life',newCurrentLife);

        if(newCurrentLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup',keyboardPressHandler);

function continueGame(){
    const mainAlphabet = findARandomNumber();
    
    const displayText = document.getElementById('displayText');
    displayText.innerText = mainAlphabet;

    setBackgroundColor(mainAlphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setValue('life',5);
    setValue('current-score',0)

    continueGame();
}
function gameOver(){
    const finalScore = setElementValueById('current-score');
    setValue('over-score',finalScore);
    

    hideElementById('play-ground');
    showElementById('final-score');
 
    const currentScore = getText('displayText');
    removeBackgroundColor(currentScore);

    
}