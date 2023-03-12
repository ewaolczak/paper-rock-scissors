{
  let computerScore = 0;
  let playerScore = 0;

  function playGame(playerInput) {
    clearMessages();
    clearScore();

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

    let argPlayerMove = getMoveId(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);

    function displayResults(argComputerMove, argPlayerMove) {
      console.log('moves:', argComputerMove, argPlayerMove);
      if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        playerScore++;
        printMessage('Ty wygrywasz!');
        printScore(computerScore + '-' + playerScore);
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        computerScore++;
        printMessage('Przegrywasz!');
        printScore(computerScore + '-' + playerScore);
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        playerScore++;
        printMessage('Ty wygrywasz!');
        printScore(computerScore + '-' + playerScore);
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        computerScore++;
        printMessage('Przegrywasz!');
        printScore(computerScore + '-' + playerScore);
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        playerScore++;
        printMessage('Ty wygrywasz');
        printScore(computerScore + '-' + playerScore);
      } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        computerScore++;
        printMessage('Przegrywasz');
        printScore(computerScore + '-' + playerScore);
      } else if (argComputerMove == argPlayerMove) {
        printMessage('REMIS!');
        printScore(computerScore + '-' + playerScore);
      } else if (argPlayerMove == 'nieznany ruch') {
        printMessage('Wpisz prawidłową liczbę');
        printScore(computerScore + '-' + playerScore);
      }
    }

    displayResults(argComputerMove, argPlayerMove);
    console.log('scores:', computerScore, playerScore);
  }

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });
  document
    .getElementById('play-scissors')
    .addEventListener('click', function () {
      playGame(3);
    });
  document.getElementById('reset').addEventListener('click', function () {
    clearMessages();
    clearScore();
  });
}
