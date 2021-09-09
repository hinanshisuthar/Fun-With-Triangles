//referencing HTML elements
const inputs = document.querySelectorAll(".input-side");
const submitBtn = document.querySelector("#submit");
const outputDiv = document.querySelector("#output");

function CalHyp(a, b){
    const hyp= Math.pow((a*a)+(b*b),1/2); //root of a^2 + b^2
    console.log(hyp);
    return hyp;
}

function checkHyp(){
    //pass the inputs
    const hyp = CalHyp(Number(inputs[0].value), Number(inputs[1].value));

    outputDiv.innerText = "the length of the hypotenuse is " +  hyp;
}

submitBtn.addEventListener("click", checkHyp); //listen to click event