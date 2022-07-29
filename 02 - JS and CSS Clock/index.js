//VERSION 1.0 - INCOMPLETE

// let oneSecond = 1000;
//
// window.setInterval(rotateSecondHand, oneSecond);
// window.setInterval(rotateMinuteHand, (oneSecond * 60));
// window.setInterval(rotateHourHand, ((oneSecond * 3600)/5)); //hand makes 5 movements per hour
//
// function rotateSecondHand() {
//     let secondsDegree = 90 + ((new Date().getSeconds()) * 6);
//     console.log("seconds = " + new Date().getSeconds());
//     document.querySelector(".second-hand").style.transform = "rotate(" + secondsDegree + "deg)";
// }
//
// function rotateMinuteHand() {
//     let minutesDegree = 90 + ((new Date().getMinutes()) * 6);
//     console.log("minutes = " + new Date().getMinutes());
//     document.querySelector(".minute-hand").style.transform = "rotate(" + minutesDegree + "deg)";
// }
//
// function rotateHourHand() {
//     let hoursDegree = 90 + ((new Date().getHours()) * 6);
//     console.log("hour = " + new Date().getHours());
//     document.querySelector(".hour-hand").style.transform = "rotate(" + hoursDegree + "deg)";
// }

//VERSION FAIL

// comments Anouk:
// should work with callback function
// new Date should be created once (as a separate variable)
// there is no need to add quotes to a string variable

let oneSecond = 1000;
let seconds = new Date().getSeconds();
let minutes = new Date().getMinutes();
let hours = new Date().getHours();
let secondsDegree = 90 + ((seconds / 60) * 360);
let minutesDegree = 90 + ((minutes / 60) * 360);
let hoursDegree = 90 + ((hours / 12) * 360);

// Using an anonymous function
window.setInterval(() => { rotateHand("second-hand", secondsDegree) }, oneSecond);
window.setInterval(() => { rotateHand("minute-hand", minutesDegree) }, oneSecond);
window.setInterval(() => { rotateHand("hour-hand", hoursDegree) }, oneSecond);

// Using bind()
setInterval(rotateHand.bind("second-hand", secondsDegree), oneSecond);
setInterval(rotateHand.bind("minute-hand", minutesDegree), oneSecond);
setInterval(rotateHand.bind("hour-hand", hoursDegree), oneSecond);

function rotateHand(handType, degree) {
    console.log('"' + handType + '"');
    console.log("degree = " + degree);
    document.querySelector('"' + handType + '"').style.transform = "rotate(" + degree + "deg)";
}


//EXAMPLE

//what makes this the winning solution:
//it has one interval function every second which checks the value of seconds/minutes/hours
//when the value increases, the rotation (in degrees) increases along with it

window.setInterval(rotateHand1, 1000);
let startingAngleSeconds = 90;
let startingAngleMinutes = 90;
let startingAngleHours = 90;

function rotateHand1() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let secondsDegree = startingAngleSeconds + ((seconds / 60) * 360);
    // console.log("seconds = " + new Date().getSeconds());
    // console.log("secondsDegree = " + secondsDegree);
    if (seconds === 59) {
        startingAngleSeconds = secondsDegree + 6;
    }
    let sound = new Audio("Ringt-nature-duck1.mp3");
    // sound.play();
    document.querySelector(".second-hand").style.transform = "rotate(" + secondsDegree + "deg)";
    document.querySelector(".second-hand-back").style.transform = "rotate(" + (secondsDegree - 180) + "deg)";

    let minutesDegree = startingAngleMinutes + ((minutes / 60) * 360);
    // console.log("minutes = " + new Date().getMinutes());
    // console.log("minutesDegree = " + minutesDegree);
    if (minutes === 59 && seconds === 59) {
        startingAngleMinutes = minutesDegree + 6;
    }
    document.querySelector(".minute-hand").style.transform = "rotate(" + minutesDegree + "deg)";
    document.querySelector(".minute-hand-back").style.transform = "rotate(" + (minutesDegree - 180) + "deg)";


    let hoursDegree = startingAngleHours + ((hours / 12) * 360);
    // console.log("hour = " + new Date().getHours());
    if (hours === 59 && minutes === 59 && seconds === 59) {
        startingAngleHours = hoursDegree + 6;
    }
    document.querySelector(".hour-hand").style.transform = "rotate(" + hoursDegree + "deg)";
    document.querySelector(".hour-hand-back").style.transform = "rotate(" + (hoursDegree - 180) + "deg)";
}
