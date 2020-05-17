const display = document.querySelector('.display');
const searchDivision = /[/]/g;

document.querySelectorAll('.digits button')
.forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
.forEach(button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
    if (isNumeric(display.value.substr(display.value.length - 1))) {
        display.value += ev.target.innerText;
    } else {
       display.value = display.value.substr(0, display.value.length - 1) + ev.target.innerText
    }
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    const divisionOperation = display.value.search(searchDivision)
    if (divisionOperation != null && divisionOperation != display.value.length -1 && display.value[divisionOperation + 1] == '0') {
        display.value = 'На нуль не ділимо'
    } else {
        display.value = eval(display.value);
    }
}

document.querySelector('.reset').addEventListener('click', reset);
function reset() {
    display.value = " ";
}

document.querySelector('.point').addEventListener('click', point);
function point() {
    if (isNumeric(display.value.substr(display.value.length - 1))) {
    display.value = display.value + ".";
    } else {
         display.value = display.value.substr(0, display.value.length - 1)
    }
}

function isNumeric(str){
    return /^\d+$/.test(str);
}
