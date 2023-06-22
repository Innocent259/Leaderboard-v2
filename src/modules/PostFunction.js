import {url} from './GameData.js';

const createGame = async (userName, userScore) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
  });
  const data = await response.json();
  return data
};

export default createGame;