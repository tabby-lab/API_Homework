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

let shuffledQuestions=[]
let currentQuestionIndex, lastQuestion

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

let correctAnswer= 0
let wrongAnswer=0
//something is up with the classlist!
//before begining all the functions think about the workflow of each
//starting the quiz;change game to quiz
function startGame() {
    console.log('started')
    startButton.classList.add('hide')

    shuffledQuestions = questions.sort(() => Math.random() - .5)
    console.log(shuffledQuestions)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')

    setNextQuestion()
    startTimer()
}



function startTimer() {


    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter <=0 ) {
           mainDiv.classList.add('hide')
           // questionElement.classList.add('hide')
            scoreBoard.classList.remove('hide')


            correctSpan.innerHTML=correctAnswer
            wrongSpan.innerHTML=wrongAnswer
            alert('sorry, out of time');
            clearInterval(counter);
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


// function renderProgress(){

//     for(let currentQuestionIndex = 0; currentQuestionIndex <= lastQuestion; currentQuestionIndex++){

//         progress.innerHTML += "<div class='prog' id="+ currentQuestionIndex +"></div>";

//     }

// }

//   if (answer.correct)
//              button.dataset.correct = answer.correct

//      button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(startButton)

// function selectAnswer(event) {
// answerButtonsElement.appendChild(startButton)

// }
//MAYBE USE?
//quizContainer.innerHTML = output.join('');





