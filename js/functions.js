function printMessage(msg) {
  let div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function printScore(score) {
  let div = document.createElement('div');
  div.innerHTML = score;
  document.getElementById('result').appendChild(div);
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

function clearScore() {
  document.getElementById('result').innerHTML = '';
}