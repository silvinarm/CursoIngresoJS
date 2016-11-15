/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var nuno;
	var ndos;
	var resultado;

	nuno = document.getElementById('numeroUno').value;
	nuno = parseInt (nuno);
	ndos = document.getElementById ('numeroDos').value;
	ndos = parseInt (ndos);
	resultado = (nuno + ndos);
	alert ("la suma es "+resultado);
	
}

function restar()
{	var nuno;
	var ndos;
	var resultado;

	nuno = document.getElementById('numeroUno').value;
	nuno = parseInt (nuno);
	ndos = document.getElementById ('numeroDos').value;
	ndos = parseInt (ndos);
	resultado = (nuno - ndos);
	alert ("la resta es "+resultado);
	
}

function multiplicar()
{	var nuno;
	var ndos;
	var resultado;

	nuno = document.getElementById('numeroUno').value;
	nuno = parseInt (nuno);
	ndos = document.getElementById ('numeroDos').value;
	ndos = parseInt (ndos);
	resultado = (nuno * ndos);
	alert ("la multiplicacion es "+resultado);
	
}

function dividir()
{	var nuno;
	var ndos;
	var resultado;

	nuno = document.getElementById('numeroUno').value;
	nuno = parseInt (nuno);
	ndos = document.getElementById ('numeroDos').value;
	ndos = parseInt (ndos);
	resultado = (nuno / ndos);
	alert ("la division es "+resultado);
	
}

