
//A variable to keep track when to open and when to close the rules page

let rulesCount = 0;

//A varible to keep track when the result is showing 

let resultShowing = 0;

//a variable to check if the player chose or not

let playerChose = false;

//The game section

let game = document.querySelector('.rock-paper-scissors ');

//The title section

let titleAndScore = document.querySelector('.title-score')

//The rules section close button

let closeRulesBtn = document.querySelector('.rules-close');

//The rules section open button

let openRulesBtn = document.querySelector('.readrules');

//The rules section

let rules = document.querySelector('.rules');
rules.style.display = 'none';


// The result section

let result = document.querySelector('.result');

result.style.display = 'none';

//The Restart button

let resultBtn = document.querySelector('.result-btn');

//The Array that will keep the other two choices left for the house

let houseChoice = [];


//The varabile that will keep track of the choise of the player

let thePlayerChose = '';


//The score holder

let score = document.querySelector('.score');


//The score number

let scoreNum = 0;




//Paper

let paper = document.querySelector('.paper');

paper.addEventListener('click', playerChosePaper);

function playerChosePaper() {
  resultShowing++;
  houseChoice.push('scissor');
  houseChoice.push('rock');
  playerChose = true;
  playerVsHouse.style.display = '';
  game.style.display = 'none';
  thePlayerChose += 'paper';
  document.querySelector('.pic-paper').src = '/Rock-Paper-Scissors/images/icon-paper.svg';
  document.querySelector('.player-pic').style.border = '15px solid var(--Paper-Gradient)';
  house()
}

//Rock

let rock = document.querySelector('.rock');

rock.addEventListener('click', playerChoseRock);

function playerChoseRock() {
  resultShowing++;
  houseChoice.push('scissor');
  houseChoice.push('paper');
  playerChose = true;
  playerVsHouse.style.display = '';
  game.style.display = 'none';
  thePlayerChose += 'rock';
  document.querySelector('.pic-paper').src = '/Rock-Paper-Scissors/images/icon-rock.svg';
  document.querySelector('.player-pic').style.border = '15px solid var(--Rock-Gradient)';
  house()
}


//Scissor

let scissor = document.querySelector('.scissor');


scissor.addEventListener('click', playerChoseScissor);

function playerChoseScissor() {
  resultShowing++;
  houseChoice.push('paper');
  houseChoice.push('rock');
  playerChose = true;
  playerVsHouse.style.display = '';
  game.style.display = 'none';
  thePlayerChose += 'scissor';
  document.querySelector('.pic-paper').src = '/Rock-Paper-Scissors/images/icon-scissors.svg';
  document.querySelector('.player-pic').style.border = '15px solid var(--Scissors-Gradient)';
  house()

}


//The house choise section

let houseSec = document.querySelector('.house');


//The win or lose text changing depends on the choices of both sides

let resultText = document.querySelector('.win-lose');


function house() {
  let randomHouseChoice = Math.floor(Math.random() * 2);
  if(houseChoice[randomHouseChoice] == 'paper' && thePlayerChose == 'rock')  {
    document.querySelector('.pic-house').src = '/Rock-Paper-Scissors/images/icon-paper.svg';
    document.querySelector('.house-pic').style.border = '15px solid var(--Paper-Gradient)';
    document.querySelector('.house-pic').style.backgroundColor = 'white';
    resultText.innerHTML = 'LOSE'

  } else if (houseChoice[randomHouseChoice] == 'paper' && thePlayerChose == 'scissor') {
    document.querySelector('.pic-house').src = '/Rock-Paper-Scissors/images/icon-paper.svg';
    document.querySelector('.house-pic').style.border = '15px solid var(--Paper-Gradient)';
    document.querySelector('.house-pic').style.backgroundColor = 'white';
    resultText.innerHTML = 'WIN';
    scoreNum++;
    score.innerHTML = scoreNum;
  }
  
  else if(houseChoice[randomHouseChoice] == 'rock' && thePlayerChose == 'paper') {
    document.querySelector('.pic-house').src = '/Rock-Paper-Scissors/images/icon-rock.svg';
    document.querySelector('.house-pic').style.border = '15px solid var(--Rock-Gradient)';
    document.querySelector('.house-pic').style.backgroundColor = 'white';
    resultText.innerHTML = 'WIN';
    scoreNum++;
    score.innerHTML = scoreNum;

  } else if (houseChoice[randomHouseChoice] == 'rock' && thePlayerChose == 'scissor') {
  document.querySelector('.pic-house').src = '/Rock-Paper-Scissors/images/icon-rock.svg';
  document.querySelector('.house-pic').style.border = '15px solid var(--Rock-Gradient)';
  document.querySelector('.house-pic').style.backgroundColor = 'white';
  resultText.innerHTML = 'LOSE' 
}
  else if (houseChoice[randomHouseChoice] == 'scissor' && thePlayerChose == 'rock') {
    document.querySelector('.pic-house').src = '/Rock-Paper-Scissors/images/icon-scissors.svg';
    document.querySelector('.house-pic').style.border = '15px solid var(--Scissors-Gradient)';
    document.querySelector('.house-pic').style.backgroundColor = 'white';
   scoreNum++;
    score.innerHTML = scoreNum;

    
  } else {
    document.querySelector('.pic-house').src = '/Rock-Paper-Scissors/images/icon-scissors.svg';
    document.querySelector('.house-pic').style.border = '15px solid var(--Scissors-Gradient)';
    document.querySelector('.house-pic').style.backgroundColor = 'white';
    resultText.innerHTML = 'LOSE' 
  }
  finalResult()
}


function finalResult() {
  result.style.display = '';
}

//The chosing section

let playerVsHouse = document.querySelector('.playerVsHouse');
playerVsHouse.style.display = 'none'


openRulesBtn.addEventListener('click', openThePage);

function openThePage() {
   if(rulesCount === 0) {
    rulesCount++;
    openRulesBtn.style.display = 'none';
    document.body.style.overflow = 'hidden';
    rules.style.display = '';
    document.body.style.padding = '0';
    game.style.display = 'none';
    playerVsHouse.style.display = 'none';
    titleAndScore.style.display = 'none';
    result.style.display = 'none';
    resultWrapper.style.display = 'none';
   
   } 

   

}



closeRulesBtn.addEventListener('click', closeThePage);

function closeThePage() {

    if(rulesCount == 1) {
      document.body.style.padding = '2rem';
      document.body.style.overflow = '';
      rules.style.display = 'none';
      titleAndScore.style.display = '';
      openRulesBtn.style.display = '';
      resultWrapper.style.display = '';
      rulesCount--;
    } 

    if(resultShowing === 0) {
      game.style.display = '';
      playerVsHouse.style.display = 'none';
      result.style.display = 'none';
    } else {
      game.style.display = 'none';
      playerVsHouse.style.display = '';
      result.style.display = '';
    }
  
  
}

//Start over the game

resultBtn.addEventListener('click', startOver);

function startOver() {
  
  while(houseChoice.length != 0) {
    houseChoice.pop();
  };
  playerChose = false;
  game.style.display = '';
  thePlayerChose = '';
  result.style.display = 'none';
  resultText.innerHTML = '';
  playerVsHouse.style.display = 'none';
  rulesCount = 0;
  resultShowing = 0;
}