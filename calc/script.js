// borra valor
function clearScreen() {
    document.getElementById("resultado").value = "";
}
// plugea los valores
function display(value) {
    document.getElementById("resultado").value += value;
}
// esta realiza las operaciones
function calculate() {
    var p = document.getElementById("resultado").value;
    var q = eval(p);
    document.getElementById("resultado").value = q;
}