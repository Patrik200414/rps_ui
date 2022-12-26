let state = {
    playGame: false,
    totalScoreP: 0,
    totalScoreC: 0,
    clickCount: 0,
    choices: ['rock', 'paper', 'scissor']
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
        document.querySelector('#result').remove();
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
                h2Player.textContent = 'Rock';
                break;
            case 'paper': 
                h2Player.textContent = 'Paper';
                break;
            case 'scissor':
                h2Player.textContent = 'Scissors';
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
        divPlayer.setAttribute('class','computer');
        divPlayer.setAttribute('id', 'computer');

        let h2Computer = document.createElement('h2');
        switch(choiceC.toLowerCase()){
            case 'rock':
                h2Computer.textContent = 'Rock';
                break;
            case 'paper': 
                h2Computer.textContent = 'Paper';
                break;
            case 'scissor':
                h2Computer.textContent = 'Scissors';
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

        if(playGround.childNodes.length > 1){
            document.querySelector('#result').replaceWith(divResult);
        }
        else{
            playGround.append(divResult);
        }

        

    }
}


function computerChoice(){
    return state.choices[Math.floor(Math.random() * (3 - 0) ) + 0];
}

