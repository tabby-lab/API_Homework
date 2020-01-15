var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

//something is up with the classlist!
//before begining all the functions think about the workflow of each
//starting the quiz;change game to quiz
function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')

    setNextQuestion()
}

//goes to next question
function setNextQuestion() {
    //resetState() when i removed questions started up
    showQuestion(shuffledQuestions[currentQuestionIndex])
}




function showQuestion(question) {
    questionElement.innerText = question.question
    question.choices.forEach(answer => {
        var button = document.createElement('button')
        var buttonArea = document.getElementById("answer-buttons")
        button.classList.add('btn');
        button.textContent = answer;
        buttonArea.appendChild(button);   

        
    })
}

//   if (answer.correct)
//              button.dataset.correct = answer.correct
    
//      button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(startButton)

// function selectAnswer(event) {
// answerButtonsElement.appendChild(startButton)

// }
//MAYBE USE?
//quizContainer.innerHTML = output.join('');





