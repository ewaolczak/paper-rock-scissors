let roundNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to:', roundNumber);

let computerMove = 'nieznany ruch';

if (roundNumber == 1) {
  computerMove = 'kamień';
} else if (roundNumber == 2) {
  computerMove = 'papier';
} else if (roundNumber == 3) {
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ', playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else {
  playerMove = 'nieznany ruch';
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier') {
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage('Przegrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage('Przegrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Ty wygrywasz');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
  printMessage('Przegrywasz');
} else if (computerMove == playerMove) {
  printMessage('REMIS!');
} else if (playerMove == 'nieznany ruch') {
  printMessage('Wpisz prawidłową liczbę');
}
