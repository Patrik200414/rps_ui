let state = {
    playGame: false,
    totalScoreP: 0,
    totalScoreC: 0,
    playerRoundS: 0,
    computerRoundS: 0,
    clickCount: 0,
    choices: ['rock', 'paper', 'scissor'],
    isElementAppended: false
}


document.querySelector('#rock').addEventListener('click', () => {
    state.clickCount++;
    
    state.playGame = true;
    let choice = 'rock';
    let choiceC = computerChoice();
    playPerson(choice, choiceC);
});
document.querySelector('#paper').addEventListener('click', () => {
    state.clickCount++;
    state.playGame = true;
    let choice = 'paper';
    let choiceC = computerChoice();
    playPerson(choice, choiceC);
});
document.querySelector('#scissor').addEventListener('click', () => {
    state.clickCount++;
    state.playGame = true;
    let choice = 'scissor';
    let choiceC = computerChoice();
    playPerson(choice, choiceC);
})


function playPerson(choice, choiceC){
    if(state.playGame === false){
        document.querySelector('article').removeChild();
    }
    else{
        let playGround = document.querySelector('#playGround');
        let divResult = document.createElement('div');
        divResult.setAttribute('class','result');
        divResult.setAttribute('id', 'result');

        //player choice
        let divPlayer = document.createElement('div');
        divPlayer.setAttribute('class','player');
        divPlayer.setAttribute('id', 'player');

        let h2Player = document.createElement('h2');
        switch(choice.toLowerCase()){
            case 'rock':
                h2Player.textContent = 'You: Rock';
                break;
            case 'paper': 
                h2Player.textContent = 'You: Paper';
                break;
            case 'scissor':
                h2Player.textContent = 'You: Scissors';
                break;
        }

        let imgPlayer = document.createElement('img');
        imgPlayer.setAttribute('class', 'player-img');
        
        switch(choice.toLowerCase()){
            case 'rock':
                imgPlayer.setAttribute('src', 'https://thumbs.dreamstime.com/b/cartoon-rock-pebbles-digital-illustration-147192308.jpg')
                break;
            case 'paper': 
                imgPlayer.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqx-rJKSD_PpQMUv10YgkoF-akjUeo7fBlg&usqp=CAU')
                break;
            case 'scissor':
                imgPlayer.setAttribute('src', 'https://img.freepik.com/premium-vector/vector-doodle-hand-drawn-illustration-cartoon-scissors-isolated-white_364586-724.jpg?w=2000')
                break;
        }

        divPlayer.append(h2Player, imgPlayer);
        //computer choice
        let divComputer = document.createElement('div');
        divComputer.setAttribute('class','computer');
        divComputer.setAttribute('id', 'computer');

        let h2Computer = document.createElement('h2');
        switch(choiceC.toLowerCase()){
            case 'rock':
                h2Computer.textContent = 'Computer: Rock';
                break;
            case 'paper': 
                h2Computer.textContent = 'Computer: Paper';
                break;
            case 'scissor':
                h2Computer.textContent = 'Computer: Scissors';
                break;
        }

        let imgComputer = document.createElement('img');
        imgComputer.setAttribute('class', 'computer-img');
        
        switch(choiceC.toLowerCase()){
            case 'rock':
                imgComputer.setAttribute('src', 'https://thumbs.dreamstime.com/b/cartoon-rock-pebbles-digital-illustration-147192308.jpg')
                break;
            case 'paper': 
                imgComputer.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqx-rJKSD_PpQMUv10YgkoF-akjUeo7fBlg&usqp=CAU')
                break;
            case 'scissor':
                imgComputer.setAttribute('src', 'https://img.freepik.com/premium-vector/vector-doodle-hand-drawn-illustration-cartoon-scissors-isolated-white_364586-724.jpg?w=2000')
                break;
        }

        divComputer.append(h2Computer, imgComputer);






        divResult.append(divPlayer, divComputer);


        //playGround.append(divResult);
        if(document.querySelector('#playGround').childElementCount >= 1){
            document.querySelector('#result').replaceWith(divResult);
        }
        else{
            playGround.append(divResult);
        }


        scoreBoard(choice,choiceC);
        

       


        let divScoreBoard = document.createElement('div');
        divScoreBoard.setAttribute('class','score-board');
        divScoreBoard.setAttribute('id', 'scoreBoard');

        let divPlayerScoreBoard = document.createElement('div');
        divPlayerScoreBoard.setAttribute('class', 'player-score');

        let h3PlayerScore = document.createElement('h3');
        h3PlayerScore.textContent = `Your score:\n${state.playerRoundS}`;
        divPlayerScoreBoard.append(h3PlayerScore);



        let divComputerScore = document.createElement('div');
        divComputerScore.setAttribute('class', 'computer-score');

        let h3ComputerScore = document.createElement('h3');
        h3ComputerScore.textContent = `Your score:\n${state.computerRoundS}`;
        divComputerScore.append(h3ComputerScore);





        divScoreBoard.append(divPlayerScoreBoard, divComputerScore);



        if(document.querySelector('article').childNodes.length < 6){
            document.querySelector('article').appendChild(divScoreBoard);
        }
        else{
            document.querySelector('#scoreBoard').replaceWith(divScoreBoard);
        }


        if(state.clickCount % 5 === 0){
            endRound();
        }

    }
}



function scoreBoard(choice,choiceC){

    if(choice === 'rock' && choiceC === 'scissor'){
        state.playerRoundS++;
        
    }
    else if(choice === 'paper' && choiceC === 'rock'){
        state.playerRoundS++;
        
    }
    else if(choice === 'scissor' && choiceC === 'paper'){
        state.playerRoundS++;
        
    }
    else if(choice === 'scissor' && choiceC === 'rock'){
        state.computerRoundS++;
        
    }
    else if(choice === 'rock' && choiceC === 'paper'){
        state.computerRoundS++;
        
    }
    else if(choice === 'paper' && choiceC === 'scissor'){
        state.computerRoundS++;
    }
}



function endRound(){
    document.querySelector('#playGround').innerHTML = '';
    document.querySelector('#scoreBoard').innerHTML = '';
    document.querySelector('#scoreBoard').remove();

    let divReply = document.createElement('div');
    divReply.setAttribute('class','choice');
    divReply.setAttribute('id', 'choice');

    let buttonreplay = document.createElement('button');
    buttonreplay.setAttribute('class','re-play');
    buttonreplay.setAttribute('id', 'rePlay');
    buttonreplay.textContent = 'Play again!';

    let pText = document.createElement('h2');
    pText.textContent = 'Do you want to play another round?';

    let declineButton = document.createElement('button');
    declineButton.setAttribute('class', 'decline');
    declineButton.setAttribute('id', 'decline');
    declineButton.textContent = 'No, thenk you!';

    divReply.append(pText, buttonreplay, declineButton);

    document.querySelector('#playGround').replaceWith(divReply);
    state.playGame = false;

    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissor').disabled = true;
    state.totalScoreP += state.playerRoundS;
    state.totalScoreC += state.computerRoundS;


    document.querySelector('#rePlay').addEventListener('click', () => {
        document.querySelector('#rock').disabled = false;
        document.querySelector('#paper').disabled = false;
        document.querySelector('#scissor').disabled = false;
        state.playerRoundS = 0;
        state.computerRoundS = 0;

        let divPlayground = document.createElement('div');
        divPlayground.setAttribute('class', 'play-ground');
        divPlayground.setAttribute('id', 'playGround');


        document.querySelector('#choice').remove();
        document.querySelector('article').append(divPlayground);


    });


    document.querySelector('#decline').addEventListener('click', () => {
        document.querySelector('article').remove();

        let divTotal = document.createElement('div');
        divTotal.setAttribute('class', 'total');
        divTotal.setAttribute('id', 'total');

        let divPlayerTotalScore = document.createElement('div');
        divPlayerTotalScore.setAttribute('class','player-total-score');

        let playerh3 = document.createElement('h3');
        playerh3.textContent = `Your total score: ${state.totalScoreP}`;

        divPlayerTotalScore.append(playerh3);
        divTotal.append(divPlayerTotalScore);


        let divComputerTotalScore = document.createElement('div');
        divComputerTotalScore.setAttribute('class','player-total-score');

        let computerH3 = document.createElement('h3');
        computerH3.textContent = `Computer's total score: ${state.totalScoreC}`;

        divComputerTotalScore.append(computerH3);
        divTotal.append(divComputerTotalScore);


        document.querySelector('main').append(divTotal)
    })

}


function computerChoice(){
    return state.choices[Math.floor(Math.random() * (3 - 0) ) + 0];
}

