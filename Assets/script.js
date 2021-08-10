var timeEl = document.querySelector("#time");
console.log(timeEl);
var secondsLeft = 30;
var questionEl = document.querySelector("#question");
var buttonEl = document.querySelector("#startQuiz");
var choicesList = document.querySelector("#choices");
var questionIndex = 0;
var score;
var scoreCount = document.querySelector("#score");

var allQuestions = [
  {
    question: "What's 9 + 10?",
    rightAnswer: "19",
    answers: ["3", "19", "21", "4"]
  },
  {
    question: "What color is the sky?",
    rightAnswer: "Blue",
    answers: ["Red", "Yellow", "Green", "Blue"]
  },
  {
    question: "Who was the third president of the United States?",
    rightAnswer: "Thomas Jefferson",
    answers: ["John Adams", "Thomas Jefferson", "George Washington", "William Howard Taft"]
  },
  {
    question: "What is the official language of Brazil?",
    rightAnswer: "Portuguese",
    answers: ["Spanish", "Portuguese", "English", "French"]
  },
  {
    question: "Which of these is a fruit?",
    rightAnswer: "Tomato",
    answers: ["Beet", "Radish", "Cucumber", "Tomato"]
  },
  {
    question: "What is the largest continent on Earth?",
    rightAnswer: "Asia",
    answers: ["Africa", "Asia", "Australia", "Antarctica"]
  }
]
// timeEl.textContent = allQuestions[1].rightAnswer;
//setInterval(function(){ alert("Time's up!"); }, 5);
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left on clock.";
    //console.log(secondsLeft);
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append Time Over image
function sendMessage() {
  timeEl.textContent = " ";
  //var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

//setTime();

function displayQuestion(index) {
  questionEl.textContent = allQuestions[index].question;
  //display answers
  //google "display elements from array js onto html"
    var choices = allQuestions[index].answers;
    console.log(choices);
    for(var i = 0; i < choices.length; i++) {
      var listItem = document.createElement("li");
      var button = document.createElement("button");
      //elem.value=choice[0];
      button.innerHTML=choices[i];
      button.addEventListener("click", function() {
        //console.log(this.innerText);
      //tell checkAnswer what answer was selected
      checkAnswer(this.innerText);
      })
      listItem.appendChild(button);
      choicesList.appendChild(listItem);
    }
}

function checkAnswer(choice) {
  //logic to check if answer is correct
  //console.log(choice);
  if(choice == allQuestions[questionIndex].rightAnswer) {
    score++;
    scoreCount.textContent = score;
  } else {
    secondsLeft-=10;
  }
  //console.log("Score: " + score);
  //move on to next question
  choicesList.innerHTML = "";
  if(secondsLeft <= 0) {
    gameOver();
  } else if(questionIndex < allQuestions.length - 1) {
    questionIndex++;
    displayQuestion(questionIndex);
  }
   else {
    gameOver();
  }
  //console.log(questionIndex);
}

function gameOver() {
  console.log("Game over! Final score: " + score);
  questionEl.textContent="Game over! Final score: " + score;
  timeEl.style.visibility = "hidden";
}

buttonEl.addEventListener("click", function(){
  console.log("Click");
  score = 0;
  displayQuestion(questionIndex);
  buttonEl.style.visibility = "hidden";
  setTime();
});