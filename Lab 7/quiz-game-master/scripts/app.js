import * as http from './http.js' //Import http functions
import * as view from './view.js' //Import http functions
const GET_TRIVIA = `https://opentdb.com/api.php?amount=1&difficulty=easy`; //Trivia GET endpoint
const BIN_ID = '623cc81806182767437ef5f4';
const GET_LEADERBOARD = `https://api.jsonbin.io/b/${BIN_ID}/latest`;
const PUT_LEADERBOARD = `https://api.jsonbin.io/b/${BIN_ID}`;
const state = {
    score: 0,
    timer: 20,
    intervalId: null,
    trivia: null,
    topScores: []
}; //Game state
window.playGame = async () => { //PLAY function
    const json = await http.sendGETRequest(GET_TRIVIA); //GET Request for trivia data
    [state.trivia] = json.results; //Destructure trivia data from array
    view.PlayScene(state); //Pass trivia data to vie
    console.log(json);
}
window.checkAnswer = (attempt) => { //CHECK_ANSWER function
    const answer = state.trivia.correct_answer; //Dereference answer
    if (attempt == answer) { //When Attempt is correct
        state.score += state.timer; //Add to Score based on time
        state.timer += 10; //Add 10 bonus seconds
        playGame(); //Play Next Round of Trivia
    }
    else { //When Attempt is incorrect
        clearInterval(state.intervalId); //stop countdown interval
        view.GameoverScene(state); //show gameover view
    }
}
const countdown = () => { //COUNTDOWN function
    if (state.timer) { //check if time remains
        state.timer--; //decrement timer
        view.PlayScene(state); //view render play scene
    } else { //when timer is 0
        clearInterval(state.intervalId); //stop countdown interval
        view.GameoverScene(state); //show gameover view
    }
}
window.createGame = () => { //CREATE function
    state.timer = 20; //set timer
    state.intervalId = setInterval(countdown, 1000); //set interval id
    playGame(); //call PLAY function
}
window.start = async () => {
    state.topScores = await http.sendGETRequest(GET_LEADERBOARD); //Fetch LeaderBoard
    console.log(state.topScores); //Print LeaderBoard
    state.score = 0; //reset score
    state.timer = 20; //reset timer
    view.StartMenu(state); //render Start Menu
}
const getTop5 = async (newScore) => {
    let top5 = await http.sendGETRequest(GET_LEADERBOARD);
    top5.push(newScore);
    top5.sort((a, b) => b.score - a.score);
    top5.pop();
    return top5
}
window.updateLeaderboard = async () => {
    const name = document.getElementById('name').value;
    const currentScore = { name: name, score: state.score };
    const top5 = await getTop5(currentScore);
    await http.sendPUTRequest(PUT_LEADERBOARD, top5);
    start();
}

window.addEventListener('load', start); //When window loads execute start