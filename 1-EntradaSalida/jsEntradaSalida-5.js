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
{	var nombre;
	nombre = document.getElementById('elNombre').value;
	var edad;
	edad = document.getElementById('laEdad').value;
	alert ("Usted se llama "+nombre+ " y tiene "+edad+" años");

		
}

