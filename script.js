let state = {
    playGame: false,
    totalScoreP: 0,
    totalScoreC: 0,
    choices: ['rock','paper','scissors']
}



document.querySelector('#rock').addEventListener('click', () => {
    state.playGame = true;
    play('rock');
});
document.querySelector('#paper').addEventListener('click', () => {
    state.playGame = true;
    play('paper');
});
document.querySelector('#scissor').addEventListener('click', () => {
    state.playGame = true;
    play('scissor');
})


function play(choice){
    if(state.playGame === false){
        document.querySelector('#playGround').removeChild();
    }
    else{
        let playGround = document.querySelector('#result');
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
        divResult.append(divPlayer);

        playGround.replaceWith(divResult);

    }
}

