let displayValue = ""
let ansValue =""
//buttons
function append(value) {
    displayValue += value
    inputDisplay()
}
//display
function inputDisplay() {
    let display = document.getElementById('display').value = displayValue;
    let ans = document.getElementById('ans').value = ansValue;
}
//ac
function clearP() {
    displayValue = ''
    inputDisplay()
    ansValue = ''
    inputDisplay()

}
//delete
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    inputDisplay()
}
//sum
function sum() {
    try {
        ansValue = eval(displayValue);
    } catch (error) {
        ansValue = "error"
    }
    inputDisplay()
}