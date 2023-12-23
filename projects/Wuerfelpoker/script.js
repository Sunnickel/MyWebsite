// Alexander Reiter

const pictures = [6, 6, 6, 6, 6];
const doNotChange = [0, 0, 0, 0, 0]
let trys = 0

window.addEventListener("load", nextPlayer)

function rollDice() {
    trys++
    const roll_button = document.getElementById("roll");
    roll_button.value = "   roll dice  " + trys + " ";

    if (trys === 3) {
        roll_button.setAttribute("disabled", "");
    }

    savedDice()
    for (let i = 0; i < 5; i++) {
        if (doNotChange[i] === 1) {
            continue
        }
        pictures[i] = getRandom(1, 6)
    }
    setPictures(false)
}

function getPicture(picture) {
    var img = pictures[picture]
    var imgName
    switch (img) {
        case 1:
            imgName = "eins"
            break
        case 2:
            imgName = "zwei"
            break
        case 3:
            imgName = "drei"
            break
        case 4:
            imgName = "vier"
            break
        case 5:
            imgName = "fuenf"
            break
        case 6:
            imgName = "sechs"
            break
    }
    return "./Bilder/" + imgName + ".jpg"
}

function savedDice() {
    for (let i = 0; i < 5; i++) {
        var checkbox = document.getElementById('dice' + (i + 1) + "checkbox");
        checkbox.removeAttribute("disabled");
        var isChecked = checkbox.checked
        if (isChecked === true) {
            doNotChange[i] = 1
        }
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setPictures(reset = false) {
    for (let i = 0; i < 5; i++) {
        const image = document.getElementById('dice' + (i + 1));

        if (reset) {
            doNotChange[i] = 0
            pictures[i] = 6
            transFromRandom(image)
        }
        if (doNotChange[i] === 1) {
            continue
        }

        if (!reset) {
            transFromRandom(image, true)
        }

        image.src = getPicture(i)
    }
}

function nextPlayer() {
    for (let i = 0; i < 5; i++) {
        let checkbox = document.getElementById('dice' + (i + 1) + "checkbox");
        checkbox.checked = false
        checkbox.setAttribute("disabled", "");
    }
    trys = 0
    setPictures(true)

    const roll_button = document.getElementById("roll");
    roll_button.value = "   roll dice  ";
    roll_button.removeAttribute("disabled");
}

function transFromRandom(object, doSetVars = false) {
    let rotation = 0
    let margin = 10
    if (doSetVars) {
        rotation = getRandom(1, 360)
        margin = getRandom(1, 350)
    }
    object.style.transform = "rotate(" + rotation + "deg)";
    object.style.marginTop = margin + "px";
}

