var score = 0;
var banner = document.querySelector(".banner");
var question = document.querySelector(".question");
var highscore = document.querySelector(".highscore")
var buttonsrow = document.querySelector(".buttons");
var timer = document.querySelector(".timer");
var timerInterval;
var cw = document.querySelector(".cw");
var answertime = 2;
var seconds = 60;
var a1;
var a2;
var a3;
var a4;
var indexCurrentQuestion = 0;


// Quiz Start
function quizopening() {
    highscore.style.visibility = "hidden";

    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Start Quiz";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        question1();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "View Scores";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        scorepage();
    });
}
quizopening();

// // another function for starting quiz

// function startQuiz() {
//     var currentQuestion = questions[indexCurrentQuestion]
//     question.textContent = currentQuestion.title;
//     buttonsrow.innerHTML ="";


//     currentQuestion.answers.forEach(function(answer, i){
//         var answerButton = document.createElement("button");
//         answerButton.setAttribute("class","choicebutton");
//             answerButton.setAttribute("class", "choicebutton");
            
//             answerButton.onclick = questionClick;
            
//         })

// }

// function questionClick(){
//     // if { answerButton.value = questions[indexCurrentQuestions].truth}
//     // if { answerButton.value != questions[indexCurrentQuestions].truth}
// }



//Timer coundtown 
function countdown() {
    timerInterval = setInterval(function() {
    seconds --;
    timer.textContent = "Time left: " + seconds;
        if (seconds <= 0) {
            clearInterval (timerInterval);
            seconds = 0;
            timer.textContent = "Time left: 0"
            postquiz();
        }
    }, 1000);
}

//Adds remaining time to the score.
function timepoints() {
    score += seconds;
}



//right text display.
function rightcw() {
    var yesInterval = setInterval(function() {
    answertime --;
    cw.setAttribute("style", "color: rgb(112, 177, 112)")
    cw.textContent = "right!";
        if (answertime <= 0) {
            clearInterval (yesInterval);
            cw.textContent = "";
            answertime = 2;
        }
    }, 350);
}

//Wrong answer response.
function wrong() {
    seconds -=10;
}

//Wrong text display.
function wrongcw() {
    var noInterval = setInterval(function() {
    answertime --;
    cw.setAttribute("style", "color:rgb(185, 80, 80)");
    cw.textContent = "Wrong!";
        if (answertime <= 0) {
            clearInterval (noInterval);
            cw.textContent = "";
            answertime = 2;
        }
    }, 350);
}






//Question 1 layout.
function question1() {
    a1.remove();
    a2.remove();
    countdown();
    question.textContent = "Commonly used data types DO NOT include:";
        
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "String";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Boolean";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Number";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Float";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        rightcw();
        question2();
        right();

    });
}

//Question 2 layout.
function question2() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Using ___ statement is how you test for a specific condition.";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "For";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "If";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        rightcw();
        question3();
        right();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Select";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Switch";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });
}

//Question 3 
function question3() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = " Finding and fixing errors in programs is called ______?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Tech Support";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Debugging";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        rightcw();
        question4();
        right();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Decompose";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Fixing";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });
}
// Question 4 
function question4() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Which of the following is the correct syntax to redirect a url using JavaScript?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "window.location ";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        rightcw();
        question5();
        right();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "navigator.location ";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "browser.location ";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "document.location ";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });
}

//Question 5. Probably Could've done this way more efficient
function question5() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "sort()";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question6();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "splice()";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question6();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "toString()";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question6();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "unshift()";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        rightcw();
        question6();
        right();
    });
}

//Question 6
function question6() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "The C in CSS stands for: ";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Cursive";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question7()
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Coded";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question7()
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Cascading";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        rightcw();
        question7();
        right();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Coding";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question7()
        wrong();
    });
}

// Question 7 
function question7() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "HTML is in charge of the ___";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Content";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        rightcw();
        question8();
        right();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Colors";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question8()
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Size";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question8()
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Function";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question8()
        wrong();
    });
}

//Question 8
function question8() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "If . represents class, # represents ___";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Number";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question9()
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Id";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        rightcw();
        question9();
        right();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Pound";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question9()
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Hash";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question9()
        wrong();
    });
}

//Question 9
function question9() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Which of the following is NOT a loop?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "for";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question10()
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "while";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question10()
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "do-while";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question10()
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "don't";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        rightcw();
        question10();
        right();
    });
}

//Question 10
function question10() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Inside which HTML element (< >) do we put the JavaScript?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "js";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrong();
        wrongcw();
        postquiz();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "scripting";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrong();
        wrongcw();
        postquiz(); 
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "script";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        rightcw();
        postquiz();
        right();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "javascript";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrong();
        wrongcw();
        postquiz();
    });
}

//GAME END
function postquiz() {
    timepoints();
    seconds = 0; 
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    highscore.style.visibility = "visible";
    question.textContent = "Quiz Complete! Your score is " + score + ". Please enter your initials below."
    
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Submit";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        localStorage.setItem("user", highscore.value);
        localStorage.setItem("score", score);
        scorepage();
    });
}

// LIST OF SCORES
function scorepage() {
    clearInterval (timerInterval);
    a1.remove();
    a2.remove();
    highscore.style.visibility = "hidden";
    banner.textContent = "High Scores"
    
    question.textContent = localStorage.getItem("user") + ": " + localStorage.getItem("score");
    
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Restart Quiz";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        location.reload();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Clear Scores";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        localStorage.clear();
        question.textContent = "";
    });
}