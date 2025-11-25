// function submit (){

//     const name = document.getElementById("name").value;
//     const fatherName = document.getElementById("fatherName").value;
//     const rollNumber = document.getElementById("rollNumber").value;

//     if(name === ""  || fatherName === "" || rollNumber === "") {
//         alert("Please fill all fields");
//     } else {
//         alert("Successfully");

//     }

// }


function submit () {
    const name = document.getElementById("name").value;
    const fatherName = document.getElementById("fatherName").value;
    const rollNumber = document.getElementById("rollNumber").value;


    if(name === "" || fatherName === "" || rollNumber === ""){
        alert("Please fill All Filed")
    }

    else{
        alert("Successfully")
    }
document.getElementById("name").value = "";
document.getElementById("fatherName").value = "";
document.getElementById("rollNumber").value = "";



const input = document.getElementById("input");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btn1 = document.getElementById("btn1");

input.style.display = 'none';
input1.style.display = 'none';
input2.style.display = 'none';
btn1.style.display = 'none';

const maincontainer = document.getElementById("maincontainer")
maincontainer.style.display = 'none'
quizapp.style.display = 'block'

}


const quizapp = document.getElementById("quizapp")
    quizapp.style.display = 'none'

    const questions = [
    {
        question: "JavaScript kis language ka part hai?",
        options: ["Front-end", "Back-end", "Operating System", "Hardware"],
        answer: 0
    },
    {
        question: "HTML ka full form kya hai?",
        options: ["Hyper Text Makeup Language", "Hyperlinks Text Markup", "Hyper Text Markup Language", "None"],
        answer: 2
    },
    {
        question: "CSS kis ka short form hai?",
        options: ["Color Style Sheet", "Cascading Style Sheets", "Coding Secure System", "None"],
        answer: 1
    }
];

let index = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[index].question;
    const btns = document.querySelectorAll(".option");

    btns.forEach((btn, i) => {
        btn.innerText = questions[index].options[i];
    });

    document.getElementById("score").innerText = `Score: ${score}`;
}

function checkAnswer(selected) {
    if (selected === questions[index].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}

function nextQuestion() {
    index++;

    if (index >= questions.length) {
        alert(`Quiz Completed! Your score: ${score}`);
        index = 0;
        score = 0;
    }

    loadQuestion();
}

loadQuestion();





