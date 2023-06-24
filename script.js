var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("startreset").onclick = function () {
    if (playing == true) {
        location.reload();
    }
    else {
        playing = true;
        score = 0;

        document.getElementById("scorevalue").innerHTML = score;
        //show count
        show("timeremaining");
        timeremaining = 60;

        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        //hide game over
        hide("gameOver");

        //change start to reset		
        document.getElementById("startreset").innerHTML = "Reset Game";

        //start count
        startCountdown();

        //generate quetion
        generateQA();

    }
}

for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function () {
        if (playing == true) {
            if (this.innerHTML == correctAnswer) {

                //increase score
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);
                generateQA();

            } else {
                //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function () {
                    hide("wrong");
                }, 1000);
            }
        }
    }
}

//functions
//start count
function startCountdown() {
    action = setInterval(function () {
        timeremaining -= 1;


        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0) {
            stopCountdown();
            show("gameOver");

            //game over			
            document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;

            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}

//stop count
function stopCountdown() {
    clearInterval(action);
}

//hide
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

//show
function show(Id) {
    document.getElementById(Id).style.display = "block";
}
//generate question
// function generateQA() {
//     var x = 1 + Math.round(9 * Math.random());
//     var y = 1 + Math.round(9 * Math.random());
//     var z = 1 + Math.round(9 * Math.random());

//     var randomNumber1 = Math.floor(Math.random() * 3);

//     // Select the operator based on the random number
//     var randomOperator1;
//     if (randomNumber1 === 0) {
//         randomOperator1 = "+";
//     } else if (randomNumber1 === 1) {
//         randomOperator1 = "-";
//     } else {
//         randomOperator1 = "*";
//     }

//     var randomNumber2 = Math.floor(Math.random() * 3);

//     // Select the operator based on the random number
//     var randomOperator2;
//     if (randomNumber2 === 0) {
//         randomOperator2 = "+";
//     } else if (randomNumber2 === 1) {
//         randomOperator2 = "-";
//     } else {
//         randomOperator2 = "*";
//     }

//     // correctAnswer = x * y;
//     var expression = x + " " + randomOperator1 + " " + y + " " + randomOperator2 + " " + z;
//     correctAnswer = eval(expression);

//     // document.getElementById("question").innerHTML = x + "x" + y;
//     // document.getElementById("question").innerHTML = x + " " + randomOperator + " " + y;
//     document.getElementById("question").innerHTML = x + " " + randomOperator1 + " " + y + " " + randomOperator2 + " " + z;
//     var correctPosition = 1 + Math.round(3 * Math.random());

//     document.getElementById("box" + correctPosition).innerHTML = correctAnswer;//correct answer

//     //wrong answers
//     var answers = [correctAnswer];

//     for (i = 1; i < 5; i++) {
//         if (i != correctPosition) {
//             var wrongAnswer;
//             do {
//                 wrongAnswer = (1 +
//                     Math.round(9 * Math.random())) * (1 +
//                         Math.round(9 * Math.random()));//wrong answer

//             } while (answers.indexOf(wrongAnswer) > -1)

//             document.getElementById("box" + i).innerHTML = wrongAnswer;
//             answers.push(wrongAnswer);
//         }
//     }
// }

function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    var z = 1 + Math.round(9 * Math.random());

    var randomNumber1 = Math.floor(Math.random() * 3);

    // Select the operator based on the random number
    var randomOperator1;
    if (randomNumber1 === 0) {
        randomOperator1 = "+";
    } else if (randomNumber1 === 1) {
        randomOperator1 = "-";
    } else {
        randomOperator1 = "*";
    }

    var randomNumber2 = Math.floor(Math.random() * 3);

    // Select the operator based on the random number
    var randomOperator2;
    if (randomNumber2 === 0) {
        randomOperator2 = "+";
    } else if (randomNumber2 === 1) {
        randomOperator2 = "-";
    } else {
        randomOperator2 = "*";
    }

    // Generate a random number to determine whether to include brackets
    var includeBrackets = Math.random() < 0.5;

    var expression;
    if (includeBrackets) {
        var bracketPosition = Math.floor(Math.random() * 2);
        if (bracketPosition === 0) {
            expression = "(" + x + " " + randomOperator1 + " " + y + ")" + " " + randomOperator2 + " " + z;
        } else if (bracketPosition === 1) {
            expression = x + " " + randomOperator1 + " " + "(" + y + " " + randomOperator2 + " " + z + ")";
        } 
    } else {
        expression = x + " " + randomOperator1 + " " + y + " " + randomOperator2 + " " + z;
    }

    correctAnswer = eval(expression);

    document.getElementById("question").innerHTML = expression;
    var correctPosition = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer; // correct answer

    // Wrong answers
    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random())); // wrong answer

            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

