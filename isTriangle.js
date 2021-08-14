const inputs = document.querySelectorAll(".input-angle");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputDiv = document.querySelector("#output");

function CalSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles= angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = CalSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputDiv.innerText = "Angles form a triangle!";
    }
    else{
        outputDiv.innerText = "Sorry! the angles does not form a triangle";
    }
}

isTriangleBtn.addEventListener("click", isTriangle);