var divDataKey = document.querySelectorAll("div[data-key]");
var click = false;
var keyDown = false;

for (var i = 0; i < divDataKey.length; i++) {
    divDataKey[i].addEventListener("click", function () {
        console.log("click1 = " + click);
        click = true;
        console.log("click2 = " + click);
        makeSound(this.dataset.key);
    });
}

document.addEventListener("keydown", function (event) {
    keyDown = true;
    makeSound(event.keyCode.toString());
});

document.addEventListener("keyup", function (event) {
    makeSound(event.keyCode.toString());
});

function makeSound(key) {
    switch (key) {
        case "65":
            highlightOn(key);
            var audio = new Audio("sounds/clap.wav");
            if (keyDown === true || click === true) {
                audio.play();
                keyDown = false;
            }
            if (click === true) {
                highlightOn(key);
                click = false;
            }
            break;
        case "83":
            highlightOn(key);
            var audio = new Audio("sounds/hihat.wav");
            if (keyDown === true || click === true) {
                audio.play();
                keyDown = false;
            }
            if (click === true) {
                highlightOn(key);
                click = false;
            }
            break;
        case "68":
            highlightOn(key);
            var audio = new Audio("sounds/kick.wav");
            if (keyDown === true || click === true) {
                audio.play();
                keyDown = false;
            }
            if (click === true) {
                highlightOn(key);
                click = false;
            }
            break;
        case "70":
            highlightOn(key);
            var audio = new Audio("sounds/openhat.wav");
            if (keyDown === true || click === true) {
                audio.play();
                keyDown = false;
            }
            if (click === true) {
                highlightOn(key);
                click = false;
            }
            break;
        case "71":
            highlightOn(key);
            var audio = new Audio("sounds/boom.wav");
            if (keyDown === true || click === true) {
                audio.play();
                keyDown = false;
            }
            if (click === true) {
                highlightOn(key);
                click = false;
            }
            break;
        case "72":
            highlightOn(key);
            var audio = new Audio("sounds/ride.wav");
            if (keyDown === true || click === true) {
                audio.play();
                keyDown = false;
            }
            if (click === true) {
                highlightOn(key);
                click = false;
            }
            break;
        case "74":
            highlightOn(key);
            var audio = new Audio("sounds/snare.wav");
            if (keyDown === true || click === true) {
                audio.play();
                keyDown = false;
            }
            if (click === true) {
                highlightOn(key);
                click = false;
            }
            break;
        case "75":
            highlightOn(key);
            var audio = new Audio("sounds/tom.wav");
            if (keyDown === true || click === true) {
                audio.play();
                keyDown = false;
            }
            if (click === true) {
                highlightOn(key);
                click = false;
            }
            break;
        case "76":
            highlightOn(key);
            var audio = new Audio("sounds/tink.wav");
            if (keyDown === true || click === true) {
                audio.play();
                keyDown = false;
            }
            if (click === true) {
                highlightOn(key);
                click = false;
            };
            break;
        default:
            console.log(key);
    }
}

function highlightOn(number) {
    document.querySelector("div[data-key='" + number + "']").classList.toggle("playing");
    console.log("light on");
}