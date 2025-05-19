function calcular() {
	var x = document.getElementById('horas').value;
	var y = document.getElementById('tipo').value;
	var res = parseInt(x) * parseInt(y);
	document.getElementById("resultado").innerHTML = 
		"Total a pagar: $"+parseFloat(res).toFixed(2);
	document.getElementById("resultado").style.padding = '5px';
}