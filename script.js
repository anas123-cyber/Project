const questions = [//this array stores the question and answer keys inside an object.
    {
        question: "which is the largest animal in the world?",
        answers :[
                {text: "Shark", correct: false},
                {text: "Blue Whale", correct: true},
                {text: "Elephant", correct: false} ,
                {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is the smallest country in the world?",
        answers :[
                {text: "Vatican city", correct: true},
                {text: "Bhutan", correct: false},
                {text: "Nepal", correct: false} ,
                {text: "Sri Lanka", correct: false},
        ] 
    },
    {
        question: "which is the largest desert in the world?",
        answers :[
                {text: "Kalahari", correct: false},
                {text: "Gobi", correct: false},
                {text: "Sahara", correct: false} ,
                {text: "Antarctica", correct: true},
        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answers :[
                {text: "Asia", correct: false},
                {text: "Australia", correct: true},
                {text: "Arctic", correct: false} ,
                {text: "Africa", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-button");

const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score= 0;

function startQuiz(){//when the quiz starts
    currentQuestionIndex = 0;//displays the strting question number and increses it. 
    score = 0;//displays out 4 how many questions is correct.
    nextButton.innerHTML = "Next";
    showQuestion();     
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];//questons array ka index me jaake question key ko uthake uska value currentQuestion me store kardega
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;//changes the text of the queston element with the current question number,. and the question inside the object inside the array(currentQuestion.question).

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);


        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
function resetState(){
            nextButton.style.display = "none";
            while(answerButtons.firstChild){
                answerButtons.removeChild(answerButtons.firstChild);
            }
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {//it converts the children of the answer-button into array and iterates over them, if the button's dataset.correct value is true then it adds the correct class to that particular button.
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = block;
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz(); 
    }
});

startQuiz();

