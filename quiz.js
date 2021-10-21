const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-button");
const outputDiv = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "32cm", "17.16 meter sq", "12cm"]; //list of correct answers

submitBtn.addEventListener("click", () => {
    let score, index = 0;
    const formResult = new FormData(quizForm); // a new form data object is created. And it is populated with the current form's key/value pairs
//     console.log(formResult)
    for(let value of formResult.values()){ //value=value that is selected the user, fromData.values returns an array of selected answers
        console.log(value);
        if(value === correctAnswers[index]){ // if the selected answers match with any of the correctAnswers 
            score=score+1 // then increment the score
        }
        index = index + 1; // check for next index i.e. question
    }
    // console.log(score);
    outputDiv.innerText = "Your score is " + score;
});
