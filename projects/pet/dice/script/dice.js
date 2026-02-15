

//create elements of main menu
let temporalElement;
const diceHowTo = "Use the following virtual cube to simulate cubes that have a different number of faces than a regular 6-faceted cube. The most common physical cubes have 4, 6, 8, 10, 12 and 20 faces, respectively, and the 6-faceted cube makes up the majority of the cubes. This virtual cube can have six faces and can generate random numbers, simulating the roll of dice based on the number of points.";
const diciImplement = 'A dice is typically a small, throwable object that has multiple faces (most commonly six) and possible positions that indicate a number (or something else), used for generating random numbers and events. They are typically used for tabletop games, which include a wide variety of games, as well as for gambling. Examples of tabletop games that involve the use of dice include games like backgammon, Boggle, and Yahtzee, where dice are a central component of the game. Some other well-known tabletop games include Monopoly, Risk, Dungeons and Dragons, and Settlers of Catan. There are however, numerous others.';
const authorSite = 'https://serhii-hrynyshyn.github.io/portfolio/';
const authorMail = 'hrynyshyn.serhii@gmail.com';






let allMenuObjArr = new Array;

let settingsElementsArr = ['settings', 'skin', 'darck', 'white', 'signature', 'cube', 'circle'];
let settingsObjArr = [];
for (let el = 0; el < settingsElementsArr.length; el++) {
    temporalElement = document.getElementById(settingsElementsArr[el]);
    settingsObjArr.push(temporalElement);
    if (el > 0) allMenuObjArr.push(temporalElement);
}

let infoElementsArr = ['info', 'how', 'imp'];
let infoObjArr = [];
for (let el = 0; el < infoElementsArr.length; el++) {
    temporalElement = document.getElementById(infoElementsArr[el]);
    infoObjArr.push(temporalElement);
    if (el > 0) allMenuObjArr.push(temporalElement);
}

let contactElementsArr = ['contact', 'mail', 'site'];
let contactObjArr = [];
for (let el = 0; el < contactElementsArr.length; el++) {
    temporalElement = document.getElementById(contactElementsArr[el]);
    contactObjArr.push(temporalElement);
    if (el > 0) allMenuObjArr.push(temporalElement);
}

//hidden true/false main button (button of dice throw )
function buttonIsHidden(value){
    document.getElementById('getRandom').hidden = value;
}

//create events for elements of main menu
function mainMenu(thisId) {
    switch (thisId) {
        case 'settings': buttonIsHidden(true); menuSettingsON(); break;
        case 'info': buttonIsHidden(true); menuInfoON(); break;
        case 'contact': buttonIsHidden(true); menuContactON(); break;
        case 'cube': makeTheBorders('cube'); break;
        case 'circle': makeTheBorders('circle'); break;
        case 'white': makeTheBackgrounds('white'); break;
        case 'darck': makeTheBackgrounds('darck'); break;
        case 'how': makeTheAlert('how'); break;
        case 'imp': makeTheAlert('imp'); break;
        case 'mail': makeTheAlert('mail'); break;
        case 'site': makeTheAlert('site'); break;
    };
}

let messageP = document.getElementById('messageP');
let closeButton = document.querySelector('.closeButton');
let nav = document.querySelector('nav');
let main = document.getElementById('main');
let table = document.getElementById('table');
let msg = document.getElementById('message');
let boxArr = ['id1', 'id2', 'id3', 'id4', 'id5', 'id6', 'id7', 'id8', 'id9'];
let all = document.addEventListener('click', function (event) {
    mainMenu(event.target.id); 
});

closeButton.addEventListener('click', function () {
    document.getElementById('message').style.display = 'none';
    main.style.display = 'block';
    msg.style.display = 'none';
    nav.style.display = 'inline-flex';
})

document.body.addEventListener('click', function (event) {
    for (let el of allMenuObjArr) {
        if (el === event.target.id) return;
    }
    allMenuElemHide();
    buttonIsHidden(false);
})

function allMenuElemHide() {
    for (let el of allMenuObjArr) {
        el.style.display = 'none';
    }
}

function menuSettingsON() {
    allMenuElemHide();
    for (let el = 1; el < settingsObjArr.length; el++) {
        settingsObjArr[el].style.display = 'block';
    }
}

function menuInfoON() {
    allMenuElemHide();
    for (let el = 1; el < infoObjArr.length; el++) {
        infoObjArr[el].style.display = 'block';
    }
}

function menuContactON() {
    allMenuElemHide();
    for (let el = 1; el < contactObjArr.length; el++) {
        contactObjArr[el].style.display = 'block';
    }
}

function makeTheAlert(myAlert) {

    let txt;
    document.getElementById('messageP').style.display = 'none';
    if (myAlert === 'how') {
        txt = diceHowTo;
    } else
        if (myAlert === 'imp') {
            txt = diciImplement;
        } else
            if (myAlert === 'mail') {
                txt = `<a href="mailto:${authorMail}" target="_blank">${authorMail}</a>`;
            } else txt = `<a href="${authorSite}" target="_blank">${authorSite}</a>`;
    
       
    nav.style.display = 'none';
    main.style.display = 'none';
    msg.style.display = 'block';


    messageP.innerHTML = txt;
    messageP.style.display = 'block';
    msg.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    closeButton.style.display = 'absolute';

}

function makeTheBorders(bStyle) {
    let el = document.getElementsByClassName('cells');
    for (let member of el) {
        if (bStyle === 'cube') {
            member.style.borderRadius = '15px';
        }
        else {
            member.style.borderRadius = '50%';
        }
    }
}

function makeTheBackgrounds(bgStyle) {
    if (bgStyle === 'white') {
        document.body.style.backgroundColor = 'white';
    }
    else {
        document.body.style.backgroundColor = 'black';
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getRandom = document.getElementById('getRandom');
getRandom.addEventListener('click', function () {
    for (let elem of boxArr) {
        
        document.getElementById(elem).style.backgroundColor = document.body.style.backgroundColor;
    }
    makeBone();
})

function makeBone() {
    const choice = getRandomInt(1, 6);
    switch (choice) {
        case 1: return filler('id5');
        case 2: return filler('id4', 'id6');
        case 3: return filler('id7', 'id5', 'id3');
        case 4: return filler('id1', 'id3', 'id7', 'id9');
        case 5: return filler('id1', 'id3', 'id5', 'id7', 'id9');
        case 6: return filler('id1', 'id2', 'id3', 'id7', 'id8', 'id9');
    }
}

function filler(...elem) {
    let fieldColor = document.body.style.backgroundColor;
    boxArr.forEach(function (item, i, boxArr) {
        document.getElementById(item).style.visibility = 'hidden';
    })

    if (fieldColor == 'white') {
        fieldColor = 'black'
    } else fieldColor = 'white';



    for (let number of elem) {
        let tmp = document.getElementById(number);
        tmp.style.backgroundColor = fieldColor;

       

        tmp.style.borderColor = 'red';
        tmp.style.visibility = 'visible';
    }
}

window.onload = function () {
    setInterval(changeBgColor, 100);
    document.body.style.backgroundColor = 'white';

}

function changeBgColor() {
    
    switch (getRandomInt(0, 2)) {
        case 0: getRandom.style.backgroundColor = 'red'; break;
        case 1: getRandom.style.backgroundColor = 'green'; break;
        case 2: getRandom.style.backgroundColor = 'blue'; break;
    }
}