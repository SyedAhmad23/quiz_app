const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    }, {
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",
    }
]
const question = document.getElementById('question');
const option_a = document.getElementById('option-a');
const option_b = document.getElementById('option-b');
const option_c = document.getElementById('option-c');
const option_d = document.getElementById('option-d');
const answerElements = document.querySelectorAll('.answer');
const submit = document.getElementById('submit');
const scoreContainer = document.getElementById('score-container');
const finalScoreElement = document.getElementById('final-score');
const retryButton = document.getElementById('retry');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    question.textContent = quiz[currentQuestion].question;
    option_a.textContent = quiz[currentQuestion].ans1text;
    option_b.textContent = quiz[currentQuestion].ans2text;
    option_c.textContent = quiz[currentQuestion].ans3text;
    option_d.textContent = quiz[currentQuestion].ans4text;
}

function showScore() {
    scoreContainer.style.display = 'block';
    question.style.display = 'none';
    submit.style.display = 'none';
    finalScoreElement.textContent = score + ' out of ' + quiz.length;
}
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    scoreContainer.style.display = 'none';
    question.style.display = 'block';
    submit.style.display = 'block';
    answerElements.forEach((answer) => {
        answer.checked = false;
    });
}

submit.addEventListener("click", () => {
    const checkedAnswer = document.querySelector('input[type="radio"]:checked');

    if (!checkedAnswer) {
        alert("Please select an answer");
    } else {
        if (checkedAnswer.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quiz.length) {
            loadQuestion();
            checkedAnswer.checked = false;
        } else {
            showScore();
        }
    }
});
retryButton.addEventListener("click", () => {
    resetQuiz();
});
loadQuestion();