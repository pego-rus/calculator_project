let mainStr = ''
let commonNumber = ''
const expr = new Array()
const mainStrInput = document.querySelector('.res span');
const buttons = document.querySelectorAll('button');

const saveHistory = (expr) => {
    let history = document.querySelector('.history');
    let text = document.createElement('span');
    text.textContent = expr;
    console.log(text)
    history.appendChild(text);
}

const calculate = (expr) => {
    try {
        let result
        eval(expr) == undefined ? result = 0 : result = eval(expr);
        if (eval(expr) !== undefined) {
            saveHistory(expr + ' ' + '=' + ' ' + eval(expr));
        }
        return result
    } catch (error) {
        return `Error detected: ${error.message}`
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.dataset.value == '=') {
            mainStrInput.innerHTML = calculate(mainStr);
            mainStr = '';
            commonNumber = '';
            expr.length = 0
    } else if (button.dataset.value == 'delete') {
        mainStr = mainStr.slice(0, mainStr.length-1);
        mainStr == '' ? mainStrInput.innerHTML = 0 : mainStrInput.innerHTML = mainStr;
    } else {
        mainStr += String(button.innerHTML);
        mainStrInput.innerHTML = mainStr;
    }
    })
})

