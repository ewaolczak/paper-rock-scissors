function getMoveId(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to:', randomNumber);

let argComputerMove = getMoveId(randomNumber);
printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ', playerInput);

let argPlayerMove = getMoveId(playerInput);
printMessage('Twój ruch to: ' + argPlayerMove);

function displayResults(argComputerMove, argPlayerMove) {
  console.log('moves:', argComputerMove, argPlayerMove);
  if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Przegrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Przegrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Przegrywasz');
  } else if (argComputerMove == argPlayerMove) {
    printMessage('REMIS!');
  } else if (argPlayerMove == 'nieznany ruch') {
    printMessage('Wpisz prawidłową liczbę');
  }
}

displayResults(argComputerMove, argPlayerMove);
