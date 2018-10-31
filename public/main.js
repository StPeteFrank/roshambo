let p1choice = ''
let p2choice = ''
let whoWon = document.querySelector('.winner')

// AND  is  &&
// OR   is  ||
// ===    equal to

//what each player selected
const detectWinner = () => {
  if (
    (p1choice === 'rock' && p2choice === 'scissors') ||
    (p1choice === 'paper' && p2choice === 'rock') ||
    (p1choice === 'scissors' && p2choice === 'paper')
  ) {
    whoWon.textContent = ' PLAYER ONE IS A BEAST !'
  }

  if (
    (p2choice === 'rock' && p1choice === 'scissors') ||
    (p2choice === 'paper' && p1choice === 'rock') ||
    (p2choice === 'scissors' && p1choice === 'paper')
  ) {
    whoWon.textContent = ' PLAYER TWO IS UNSTOPPABLE !'
  }

  if (
    (p1choice === 'rock' && p2choice === 'rock') ||
    (p1choice === 'paper' && p2choice === 'paper') ||
    (p1choice === 'scissors' && p2choice === 'scissors')
  ) {
    whoWon.textContent = ' GREAT MINDS THINK ALIKE !'
  }
}

const goAgain = () => {
  p1choice = ''
  p2choice = ''
  whoWon.textContent = ''
}

const playerOneClicksRock = () => {
  p1choice = 'rock'
  console.log('player one chose', p1choice)
  detectWinner()
}
const playerOneClicksPaper = () => {
  p1choice = 'paper'
  console.log('player one chose', p1choice)
  detectWinner()
}
const playerOneClicksScissors = () => {
  p1choice = 'scissors'
  console.log('player one chose', p1choice)
  detectWinner()
}
const playerTwoClicksRock = () => {
  p2choice = 'rock'
  console.log('player two chose', p2choice)
  detectWinner()
}
const playerTwoClicksPaper = () => {
  p2choice = 'paper'
  console.log('player two chose', p2choice)
  detectWinner()
}
const playerTwoClicksScissors = () => {
  p2choice = 'scissors'
  console.log('player two chose', p2choice)
  detectWinner()
}
// Assigning variables to my classes, ex: '.player .rock' = playerOneChoseRock
// Then adding and event listener to that variable
const main = () => {
  let playerOneChoseRock = document.querySelector('.player-1 .rock')
  playerOneChoseRock.addEventListener('click', playerOneClicksRock)

  let playerOneChosePaper = document.querySelector('.player-1 .paper')
  playerOneChosePaper.addEventListener('click', playerOneClicksPaper)

  let playerOneChoseScissors = document.querySelector('.player-1 .scissors')
  playerOneChoseScissors.addEventListener('click', playerOneClicksScissors)

  let playerTwoChoseRock = document.querySelector('.player-2 .rock')
  playerTwoChoseRock.addEventListener('click', playerTwoClicksRock)

  let playerTwoChosePaper = document.querySelector('.player-2 .paper')
  playerTwoChosePaper.addEventListener('click', playerTwoClicksPaper)

  let playerTwoChoseScissors = document.querySelector('.player-2 .scissors')
  playerTwoChoseScissors.addEventListener('click', playerTwoClicksScissors)

  // Button for play again
  document.querySelector('.play-again').addEventListener('click', () => {
    document.location = '/'
  })
}
// document.querySelector('h1').textContent += '?'

document.addEventListener('DOMContentLoaded', main)

// Remember when player 1 chose "rock"

// Indicate when players have made a choice
