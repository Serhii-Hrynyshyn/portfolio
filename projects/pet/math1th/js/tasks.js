import { randomizer } from './random.js';
import { currentYear, currentMonth, currentDate, currentHour, currentMinute, currentSecond } from './get_current_time.js';

const MAX_ATTEMPTS = 12;

let firstValue;
let secondValue;
let thirdValue;
let result;
let sign;

let attempt = 1;
let totalReport = [];
let score = 0;

// Helper function to format current timestamp
function getFormattedTimestamp() {
    const now = new Date();
    return `[${currentYear(now)}:${currentMonth(now)}:${currentDate(now)}] [${currentHour(now)}:${currentMinute(now)}:${currentSecond(now)}]`;
}

const legend = document.querySelector('legend');
const taskField = document.querySelector('.label-tasc-one');
const answer = document.querySelector('.answer');
const button = document.querySelector('button');
const wrapper = document.querySelector('.wrapper');

//response params (name and email) from index.html
const urlParams = new URLSearchParams(window.location.search);
const taskType = urlParams.get('taskType');
const name = urlParams.get('name');
const email = urlParams.get('email');

//create totalReport array on load page
window.addEventListener("load", function () {
    totalReport.push(`  Учень: ${name} \n`);
    totalReport.push(`- початок уроку ${getFormattedTimestamp()} - \n`);
});

// Handle Enter key and button click
function handleTaskAction() {
    checkTask();
    setTask();
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleTaskAction();
    }
});

setTask();

button.addEventListener('click', handleTaskAction);



//create task value like as: ` 1 + 5 = `
function setTask() {
    attempt++;
    answer.value = '';
    answer.focus();

    const taskConfig = {
        'two_additions_till10': () => two_additions(10),
        'two_additions_till100': () => two_additions(100),
        'several_additions_till10': () => several_additions(10),
        'several_additions_till100': () => several_additions(100),
        'two_substraction_till10': () => two_substraction(10),
        'two_substraction_till100': () => two_substraction(100),
        'several_substraction_till10': () => several_substraction(10),
        'several_substraction_till100': () => several_substraction(100),
        'several_combination_till10': () => several_combination(10),
        'several_combination_till100': () => several_combination(100),
        'two_comparison_till10': () => two_comparison(10),
        'two_comparison_till100': () => two_comparison(100),
        'ppp': () => ppp()
    };

    if (taskConfig[taskType]) {
        taskConfig[taskType]();
    }
}

//check on correct answer value, write check report
function checkTask() {
    if (result == answer.value) {
        totalReport.push(`      ${taskField.innerHTML} ${result} : вірно\n`);
        score++;
    } else {
        totalReport.push(`      ${taskField.innerHTML} ${answer.value} : помилка, має бути (${result})\n`);
    }


    if (attempt > MAX_ATTEMPTS) {
        totalReport.push(`- кінець уроку ${getFormattedTimestamp()} - \n`);
        totalReport.push(`      Оцінка(максимум ${MAX_ATTEMPTS} балів): ${score}.`);
        wrapper.remove();


        //Create DOM obj <textarea> for totalReport visualisation
        let reportArea = document.createElement('textarea');
        reportArea.className = 'reportAreaClass';
        reportArea.rows = '14';
        reportArea.readOnly = true;
        reportArea.textContent = totalReport.join('');
        document.body.appendChild(reportArea);

        //EXIT
        pointOfExit();
    }
}

//Exiting need 'mouse click' or pressing keyboard button 'Escape'
function pointOfExit() {
    

    window.onmousedown = function () {
        window.close();
    }
    window.onkeydown = function (event) {
        if (event.key == 'Escape') window.close();
    }
}

//--------------------EXERCISE PART start--------------------

//create task value like as: ` 1 + 5 = ` or ` 17 + 55 = `
function two_additions(max) {
    firstValue = randomizer(0, max);
    secondValue = randomizer(0, max - firstValue);
    result = firstValue + secondValue;
    taskField.innerHTML = `${firstValue} + ${secondValue} =`;
    legend.innerHTML = `Додавання двох чисел у межах ${max} (завдання№ ${attempt - 1})`;
}



//create task value like as: ` 1 + 5 + 2 = ` or ` 17 + 55 + 12 = `
function several_additions(max) {
    firstValue = randomizer(0, max);
    secondValue = randomizer(0, max - firstValue);
    thirdValue = randomizer(0, max - firstValue - secondValue);
    result = firstValue + secondValue + thirdValue;
    taskField.innerHTML = `${firstValue} + ${secondValue} + ${thirdValue} =`;
    legend.innerHTML = `Додавання кількох чисел у межах ${max} (завдання№ ${attempt - 1})`;
}


//create task value like as: ` 8 - 5 = ` or ` 17 - 5 = `
function two_substraction(max) {
    firstValue = randomizer(0, max);
    secondValue = randomizer(0, firstValue);
    result = firstValue - secondValue;
    taskField.innerHTML = `${firstValue} - ${secondValue} =`;
    legend.innerHTML = `Віднімання чисел у межах ${max} (завдання№ ${attempt - 1})`;
}


//create task value like as: ` 10 - 5 - 2 = ` or ` 17 - 5 - 12 = `
function several_substraction(max) {
    firstValue = randomizer(0, max);
    secondValue = randomizer(0, firstValue);
    thirdValue = randomizer(0, firstValue - secondValue);
    result = firstValue - secondValue - thirdValue;
    taskField.innerHTML = `${firstValue} - ${secondValue} - ${thirdValue} =`;
    legend.innerHTML = `Віднімання кількох чисел у межах ${max} (завдання№ ${attempt - 1})`;
}



//create task value like as: ` 10 + 5 - 2 = ` or ` 17 + 5 - 12 = `
function several_combination(max) {
    firstValue = randomizer(0, max);
    secondValue = randomizer(0, max - firstValue);
    thirdValue = randomizer(0, firstValue + secondValue);
    result = firstValue + secondValue - thirdValue;
    taskField.innerHTML = `${firstValue} + ${secondValue} - ${thirdValue} =`;
    legend.innerHTML = `Додавання та віднімання кількох чисел у межах ${max} (завдання№ ${attempt - 1})`;
}




//create a logic task value like as: ` 72 > 64 `
    function two_comparison(max) {
    firstValue = randomizer(0, max);
    secondValue = randomizer(0, max);
    let tmp_choise = randomizer(0, 2);
    legend.innerHTML = `Порівняння двох чисел у межах ${max}, де - 1 так а 0 - ні(завдання№ ${attempt - 1})`;
    
    const comparisonMap = {
        0: { sign: '<', check: () => firstValue < secondValue },
        1: { sign: '=', check: () => firstValue === secondValue },
        2: { sign: '>', check: () => firstValue > secondValue }
    };
    
    const comparison = comparisonMap[tmp_choise];
    sign = comparison.sign;
    result = comparison.check() ? 1 : 0;
    taskField.innerHTML = `${firstValue} ${sign} ${secondValue}`;

}



//--------------------EXERCISE PART finish--------------------
function ppp(){
    alert('pppppppppppppp');
}