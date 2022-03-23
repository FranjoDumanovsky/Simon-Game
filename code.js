            

var playerPattern = [];
var computerPattern = [];
var gameStarted = false;
var level = 0;     
const colors = ["green", "red", "blue", "yellow"];
var levelTitle = document.querySelector("#level-title");

if (!gameStarted) {
  window.addEventListener("keypress", randomColor)
}

// Function that returns random color from the Colors array
function randomColor() {
  var number =  Math.floor(Math.random() * colors.length);
  var color = colors[number];
  computerPattern.push(color);
  animate(color)
  gameStarted = true;
  levelTitle.innerHTML = "Level " + `${level}`;
 }

// function that animates color button
 function animate(color){
  var button = document.querySelector(`#${color}`);
  button.classList.add("pressed");
  window.setTimeout( function() {
      button.classList.remove("pressed");
  }, 200)
 }

 for (i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        playerPattern.push(this.id)
        console.log(this.id)
        compare();
    });
}

function compare () {
  if(playerPattern[playerPattern.length -1] === computerPattern[playerPattern.length -1]){

    if (playerPattern.length === computerPattern.length){
      playerPattern = []
      window.setTimeout( function() {
        randomColor();
     }, 200)
     level++
    }
  } 
  else {
    levelTitle.innerHTML = "Game over! Press any key to restart!"
    level = 0;
    gameStarted = false;
  }  
}
