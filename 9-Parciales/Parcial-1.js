/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/

/*id="elNombre">

document.g tab shift i

function Mostar()
{
	var nombre;
	nombre = document.getElementById('elNombre').value;
	alert (nombre);
}

*/

function Mostar()
{
	var Base;
	var Perimetro;

	Base = document.getElementById('Base').value;
	Perimetro = (Base*4);
	console.log ("el Perimetro es "+Perimetro);
	alert ("El perímetro del cuadrado es "+Perimetro);

}


