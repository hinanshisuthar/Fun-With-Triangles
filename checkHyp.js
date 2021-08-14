const inputs = document.querySelectorAll(".input-side");
const submitBtn = document.querySelector("#submit");
const outputDiv = document.querySelector("#output");

function CalHyp(a, b){
    const hyp= Math.pow((a*a)+(b*b),1/2);
    console.log(hyp);
    return hyp;
}

function checkHyp(){
    const hyp = CalHyp(Number(inputs[0].value), Number(inputs[1].value));

    outputDiv.innerText = "the length of the hupotenuse is" +  hyp;
}

submitBtn.addEventListener("click", checkHyp);