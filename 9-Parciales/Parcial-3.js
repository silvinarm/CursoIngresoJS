/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	

function Mostar()
{
	var nombre;
	nombre = document.getElementById('elNombre').value;
	alert (nombre);
}
*/
function Mostar()
{	var Largo;
	var Ancho;
	var CantidadVueltas;
	var Perimetro;
	var MetrosHilo;


	Largo = document.getElementById('largo').value;
	Ancho = document.getElementById('ancho').value;
	CantidadVueltas = 3;
	Perimetro = ((Largo*2)+(Ancho*2));
	console.log ("El perímetro del terreno es "+Perimetro);
	MetrosHilo = (Perimetro*CantidadVueltas);
	alert ("Se necesitan "+MetrosHilo+" metros de hilo de alambrado");

}

