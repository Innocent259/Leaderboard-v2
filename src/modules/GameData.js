let gameId = 'mygameID';
let url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

console.log(gameId)
const newGame = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'name': 'Sodoku'})
    });
    const data = await response.json();
    gameId = data.result.replace('Game with ID: ', '').replace(' added.', '');
    url= `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
    
    return gameId;
  };


export {url, newGame};