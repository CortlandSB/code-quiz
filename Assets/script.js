var timeEl = document.querySelector(".time");
console.log(timeEl);
var secondsLeft = 10;
var questionEl = document.querySelector("#question");
var buttonEl = document.querySelector("#startQuiz");
var choicesList = document.querySelector("#choices");
var questionIndex = 0;
var score = 0;

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

function checkAnswer(choices) {
  //logic to check if answer is correct
  console.log(choices);
  if(choices == allQuestions.rightAnswer) {
    score++;
  }
  console.log("Score: " + score);
  //move on to next question
  choicesList.innerHTML = "";
  questionIndex++;
  displayQuestion(questionIndex);
  console.log(questionIndex);
}

//timeEL is element on Dom
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      //timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  }

function sendMessage() {
    timeEl.textContent = " ";
}
setTime();

buttonEl.addEventListener("click", function(){
  console.log("Click");
  displayQuestion(questionIndex);
  buttonEl.style.visibility = "hidden";
});