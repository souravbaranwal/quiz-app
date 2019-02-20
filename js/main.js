var question;
var data = [{
        title: 'Inside which HTML element do we put the JavaScript?',
        options: [
            '<scripting>',
            '<script>',
            '<js>',
            'javascript'
        ],
        index: 0
    },
    {
        title: 'Where is the correct place to insert a JavaScript?',
        options: [
            'The <body> section',
            'The <head> section',
            'Both are correct',
        ],
        index: 2
    },
    {
        title: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        options: [
            '<script href="xxx.js">',
            '<script name="xxx.js">',
            '<script src="xxx.js">',
        ],
        index: 2
    },
    {
        title: 'The external JavaScript file must contain the <script> tag.',
        options: [
            'True',
            'False',
        ],
        index: 1
    },
]
var score = 0;
var questionIndex = 0;
let displayQuiz = document.getElementById('displayQuiz');

class Questions {
    constructor(title, options, answer) {
        this.title = title;
        this.options = options;
        this.answer = answer;
    }
    displayQuestion() {
        displayQuiz.innerHTML = null;
        var pTag = document.createElement('p');
        pTag.textContent = this.title;
        displayQuiz.appendChild(pTag);

        this.options.forEach((option, index) => {
            var optionBtn = document.createElement('button');
            optionBtn.setAttribute('data-index', index);
            optionBtn.textContent = option;
            displayQuiz.appendChild(optionBtn);
            optionBtn.addEventListener('click', changeQuestion);
        });
    }
}

function changeQuestion(e) {
    console.log(e.target);
    var optionIndex = e.target.dataset.index;
    if (question.answer == optionIndex) {
        score++;
        console.log(score);
    }
    displayNext();
}



function displayNext() {
    if (data.length  === questionIndex) {
        displayQuiz.innerHTML = `
        <p>Your score is ${score}</p>
        <p>Thank you for playing</p>
        `;
        return;
    }

    question = new Questions(data[questionIndex].title, data[questionIndex].options, data[questionIndex].index);
    questionIndex++;
    question.displayQuestion();
}
displayNext();