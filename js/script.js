let roundNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to:', roundNumber);

let computerMove = 'nieznany ruch';

if (roundNumber === 1) {
  computerMove = 'kamień';
}

printMessage('Mój ruch to: ' + computerMove);

