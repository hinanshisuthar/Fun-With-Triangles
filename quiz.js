const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-button");
const outputDiv = document.querySelector("#output");

//list of correct answers
const correctAnswers = ["90°", "right angled", "32cm", "17.16 meter sq", "12cm"];

function calScore() {
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    console.log(formResult)
    for(let value of formResult.values()){
        console.log(value);
        if(value === correctAnswers[index]){
            score=score+1
        }
        index = index + 1;
    }
    // console.log(score);
    outputDiv.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calScore);
