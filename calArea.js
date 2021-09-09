//referencing html
const inputBase = document.querySelector("#input-base");
const inputHeight = document.querySelector("#input-height");
const checkButton = document.querySelector("#check-area");
const outputDiv = document.querySelector("#output");

function calArea(base, height){
    const totalArea = (base*height)*(1/2); //formula to cal area
    
    return totalArea;
}

function submitCheckButton(){
    var finalAns = calArea(Number(inputBase.value), Number(inputHeight.value)); //pass two inputs as base and height
    outputDiv.innerText = "the area of the triangle is " + finalAns;
}

checkButton.addEventListener("click", submitCheckButton);
