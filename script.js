var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var counter = 15 * questions.length;
var scoreBoard = document.getElementById('score')
var mainDiv = document.getElementById('main')
var correctSpan= document.getElementById('correct')
var wrongSpan= document.getElementById('wrong')
var highScores=document.getElementById('highscores')
var restartButton=document.getElementById('restart')



 restartButton.addEventListener('click', restartQuiz)
function restartQuiz (){
    counter= 15 * questions.length
    questionContainerElement.classList.add('hide')
    nextButton.classList.add('hide')
    startButton.classList.remove('hide');
    restartButton.classList.remove('hide')
    scoreBoard.classList.add('hide')
    // setNextQuestion()
   

}

// var timer=''
// function resetQuiz(){
//     questionElement=0
//     counter=15 * questions.length
//     correctSpan=0
//     scoreBoard.innerHTML=''
//     setNextQuestion()
//     clearInterval(timer);
//     timer= setInterval(function){
//        counter--;
        
//     }
// }


let shuffledQuestions=[]
let currentQuestionIndex, lastQuestion

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

let correctAnswer= 0
let wrongAnswer=0

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    nextButton.classList.add('hide')

    shuffledQuestions = questions.sort(() => Math.random() - .5)
    console.log(shuffledQuestions)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')

    setNextQuestion()
    startTimer()
}



function startTimer() {

    var Interval = setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter <=0 ) {
            
           mainDiv.classList.add('hide')
           // questionElement.classList.add('hide')
            // scoreBoard.classList.remove('hide')
            
            




            correctSpan.innerHTML=correctAnswer
            wrongSpan.innerHTML=wrongAnswer
            scoreBoard.classList.remove('hide');
       
           // alert('sorry, out of time');
             clearInterval(Interval);
             saveScore()
             
            //returnHome.getElementById('home')
            
        }
    }, 1000);
}




//goes to next question
function setNextQuestion() {
    //resetState() when i removed questions started up
    showQuestion()
}




function showQuestion() {
    console.log(shuffledQuestions)
    if(shuffledQuestions[currentQuestionIndex] != null){
        questionElement.innerText = shuffledQuestions[currentQuestionIndex].question;
        answerButtonsElement.innerHTML = "";
    
        shuffledQuestions[currentQuestionIndex].choices.forEach(answer => {
            var button = document.createElement('button');
            button.classList.add('btn');
            button.textContent = answer;
            var correctAnswer = questions[currentQuestionIndex].answer;
    
            if (answer === correctAnswer) {
                button.setAttribute("data-answer", "true");
            } else {
                button.setAttribute("data-answer", "false");
            }
    
            answerButtonsElement.appendChild(button);
    
    
        })
    }
   
}

answerButtonsElement.addEventListener("click", function (event) {
    var itemClicked = event.target;

    if (itemClicked.matches("button")) {
        if (itemClicked.getAttribute("data-answer") === "true") {
            correctAnswer++
            alert("correct");
        }
        else {
            counter = counter - 15
            wrongAnswer++
            alert("wrong");
        }


    }

    currentQuestionIndex++;
    setNextQuestion();

}

); 



// userScore = {
//     userInitials: "ma",
//     numCorrect: "20"
//   }
//   localStorage.setItem("user", JSON.stringify(userScore));
//   localStorge.getItem("user");



function saveScore(){
var userInitials = prompt ("Quiz over! Please enter your initials to save to view highscores");

var userObj = {
    name: userInitials,
    score: correct
};

var userInfo = localStorage.getItem(userInfo);
var userArr;
if (!userInfo){
    useArr =[];
}else{
userArr = JSON.parse(userInfo);
}

userArr.push(userObj);
localStorage.setItem("userInfo", JSON.stringify(userArr));

for (var end = userArr.length -1, userCount = 1; end > -1; end -- , userCount++){
    highScores.innerHTML = (userArr[end].score + " - " + userArr.name);

}



};



     

//MAYBE USE?
//quizContainer.innerHTML = output.join('');





