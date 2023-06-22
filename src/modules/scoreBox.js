import getScore from './GetFunction.js';

const scoreBox = async () => {
  const dataGetScore = await getScore();
  const scoreBoard = document.getElementById('score-board');
  const scoreBoxWrapper = document.createElement('section');
  scoreBoxWrapper.classList.add('score-box');
  scoreBoard.innerHTML = '';
  for (let i = 0; i < dataGetScore.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add('block');
    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = `${dataGetScore[i].user}:`;
    const score = document.createElement('p');
    score.classList.add('score');
    score.textContent = `${dataGetScore[i].score}`;

    div.appendChild(name);
    div.appendChild(score);

    scoreBoxWrapper.appendChild(div);

    scoreBoard.appendChild(scoreBoxWrapper);
  }
};
export default scoreBox;
