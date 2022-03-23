import * as http from './http.js' //Import http functions
import * as view from './view.js' //Import http functions
const GET_TRIVIA = `https://opentdb.com/api.php?amount=1&difficulty=easy`; //Trivia GET endpoint
const state = {
    score: 0,
    timer: 20,
    intervalId: null,
    trivia: null
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
const createGame = () => { //CREATE function
    state.timer = 20; //set timer
    state.intervalId = setInterval(countdown, 1000); //set interval id
    playGame(); //call PLAY function
}
window.start = async () => { //START function
    createGame(); //call CREATE function
}
window.addEventListener('load', start); //When window loads execute start