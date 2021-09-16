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
    if(inputBase.value > 0) {
        if(inputHeight.value > 0) {
    var finalAns = calArea(Number(inputBase.value), Number(inputHeight.value)); //pass two inputs as base and height
    outputDiv.innerText = "the area of the triangle is " + finalAns;
    }
    else{
        outputDiv.innerText = "Lengths cannot be 0 or -ve"
    }
}
    else{
        outputDiv.innerText = "Lengths cannot be 0 or -ve"
    }
}

checkButton.addEventListener("click", submitCheckButton);
