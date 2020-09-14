
// Variables to control timer:
// const time = questions.length * 15; 
// const questions = [
//     {
//         question: "What is Javascript?", 
//         choices: ["Programing Language", "Coffee Shop", "Name of Play", "Story Book"],
//         answer: "Programing Language" 
//     }, {}, {}, {}, {}, {}, {}
// ]; 
// const timerEL = document.getElementById("time");
// const startBtn = document.getElementById("Start");
// // $(startBtn).on('click')

// let timerID;

// // Function to start quiz:
// startBtn.addEventListener('click', function StartQuiz() {
//     timerID = setInterval(clockTick, 1000);
//     timerEL.textContent = time;
// })


// // Function to Stop Quiz / Counter:
// function EndQuiz() {
//     clearInterval(timerID);
// }

// // Function for ClockTick:
// function clockTick() {
//     time--;
//     timerEL.textContent = time;
//     // check if user ran out of time:
//     if (time <= 0){
//         EndQuiz();
//     }

// }

const startButton = document.getElementById('start');
const questionContainerElement = document.getElementById('question-container');
const questionEL = document.getElementById('question');
const answerBtnsEL = document.getElementById('answer-buttons');
let shuffledQuestions, currectQuestionIndex

startButton.addEventListener('click' , startQuiz);

function startQuiz(){
startButton.classList.add('hide');
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide');
setNextQuestion()
}
let questions = [
    {
        question: "What is Javascript?",
        choices: ["Programing Language", "Coffee Shop", "Name of Play", "Story Book"],
        answer: 0, correct: true
    },

    {
        question: "HTML is considered the________ of a website..",
        choices: ["Muscles", "Heart", "Skeleton", "Skin"],
        answer: 2, correct: true
    },

    {
        question: "What does 'document.getElementById' do?",
        choices: ["Rename an element", "Create a div", "Runs in live server", "Grabs a specific element"],
        answer: 3, correct: true
    },

    {
        question: "What does CSS do for a website?",
        choices: ["Gives them internet access", "Makes them look appealing", "CSS is another name for HTML", "None of the above"],
        answer: 1, correct: true
    },

    {
        question: "Which is the correct way to grab a class element in CSS?",
        choices: ["?Class", "!Class", "9Class", "None of the above"],
        answer: 3, correct: true
    },

    {
        question: "What syntax is this: '$()'?",
        choices: ["Javascript", "JQuery", "HTML", "CSS"],
        answer: 1, correct: true
    },

    {
        question: "Why is it good practice to keep JS and CSS separate from HTML?",
        choices: ["Easier to debug", "Makes code look tidy", "Add new features easier ", "All the above"],
        answer: 3, correct: true
    }
];

function setNextQuestion() {
    answerBtnsElement.innerHTML = '';
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionEL.innerText = question.question

}

function selectAnswer(){

}

