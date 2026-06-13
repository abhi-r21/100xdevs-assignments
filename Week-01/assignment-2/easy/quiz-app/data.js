//  use this quizData in your app.
 const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]

const questionEl = document.getElementById("question");

questionEl.textContent = quizData[0].question;

const optionsEl = document.getElementById("options");

optionsEl.innerHTML = `
    <p>${quizData[0].a}</p>
    <p>${quizData[0].b}</p>
    <p>${quizData[0].c}</p>
    <p>${quizData[0].d}</p>
`;
const answers = document.querySelectorAll('input[name="answer"]');