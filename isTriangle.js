//referencing html elements
const inputs = document.querySelectorAll(".input-angle");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputDiv = document.querySelector("#output");


function CalSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles= angle1 + angle2 + angle3; // sumOfAngles = 45 + 45 + 90 = 180
    // console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle(){
    if(inputs[0].value > 0 && inputs[1].value && inputs[2].value){ 
    //passing 3 inputs to calculate their sum
    const sumOfAngles = CalSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value)); // 45 45 90
    if(sumOfAngles === 180){
        outputDiv.innerText = "Angles form a triangle!"; //true
    }
    else{
        outputDiv.innerText = "Sorry! the angles does not form a triangle";
    }
}
else{
    outputDiv.innerText = "Angles cannot be 0 or -ve";
}
}

isTriangleBtn.addEventListener("click", isTriangle);