function sumar() {
	var x = document.getElementById('num1').value;
	var y = document.getElementById('num2').value;
	var res = parseInt(x) + parseInt(y);
	document.getElementById("resultado").innerHTML = res;
}
function restar() {
	var x = document.getElementById('num1').value;
	var y = document.getElementById('num2').value;
	var res = parseInt(x) - parseInt(y);
	document.getElementById("resultado").innerHTML = res;
}
function multiplicar() {
	var x = document.getElementById('num1').value;
	var y = document.getElementById('num2').value;
	var res = parseInt(x) * parseInt(y);
	document.getElementById("resultado").innerHTML = res;
}
function dividir() {
	var x = document.getElementById('num1').value;
	var y = document.getElementById('num2').value;
	var res = parseInt(x) / parseFloat(y);
	document.getElementById("resultado").innerHTML = res;
}