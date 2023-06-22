import createGame from './PostFunction.js';
import scoreBox from './scoreBox.js';
import { newGame } from './GameData.js';


const form = document.querySelector('form');
const userName = document.getElementById('name-input');
const userScore = document.getElementById('score-input');
const refresh = document.querySelector('.refresh');
const createBtn = document.querySelector('.create');

const postActivator = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    createGame(userName.value, userScore.value);
    form.reset();
  });
};

const getActivator = () => {
  refresh.addEventListener('click', async () => {
    await scoreBox();
  });
};


const gameActivator = ()=>{
  createBtn.addEventListener('click', async ()=>{
    await newGame();
  })
}

export { postActivator, getActivator, gameActivator};

