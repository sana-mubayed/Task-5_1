// functions

function addNumber(value) {
    document.getElementById('resultInput').value += value;
}

function calculateResult() {
    let expression = document.getElementById('resultInput').value;
        let result = eval(expression); 
        document.getElementById('resultInput').value = result;
    
}

function clearInput() {
    document.getElementById('resultInput').value = '';

}

function applyPercentage() {
    let currentValue = document.getElementById('resultInput').value;
    if (currentValue) {
        document.getElementById('resultInput').value = currentValue / 100;
    }
}

function deleteLast() {
    let currentValue = document.getElementById('resultInput').value;
    document.getElementById('resultInput').value = currentValue.slice(0, -1);
}