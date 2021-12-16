
//A variable to keep track when to open and when to close the rules page

let rulesCount = 0;

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

//The chosing section

let playerVsHouse = document.querySelector('.playerVsHouse');


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
   }

}


closeRulesBtn.addEventListener('click', closeThePage);

function closeThePage() {

    if(rulesCount == 1) {
      document.body.style.padding = '2rem';
      document.body.style.overflow = '';
      rules.style.display = 'none';
      game.style.display = '';
      titleAndScore.style.display = '';
      openRulesBtn.style.display = '';
      game.style.display = '';
      
      rulesCount--;
    }

    if(playerChose == true) {
      playerVsHouse.style.display = '';
      game.style.display = 'none';
    } else {
      playerVsHouse.style.display = 'none';
      game.style.display = '';
    }
}







//The varabile that will keep track of the choise of the player

let thePlayerChose = '';

//Paper

let paper = document.querySelector('.paper');

paper.addEventListener('click', playerChosePaper);

function playerChosePaper() {
  game.style.display = 'none';
  thePlayerChose += 'paper';
}

//Rock

let rock = document.querySelector('.rock');

rock.addEventListener('click', playerChoseRock);

function playerChoseRock() {
  game.style.display = 'none';
  thePlayerChose += 'rock';
}


//Scissor

let scissor = document.querySelector('.scissor');


scissor.addEventListener('click', playerChoseScissor);

function playerChoseScissor() {
  game.style.display = 'none';
  thePlayerChose += 'scissor';
}



game.style.display = 'none';



