/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var PrimerNumero;
var SegundoNumero;
var Operador;

function comenzar()
{
	document.getElementById ('Respuesta').value = null;
	PrimerNumero = Math.floor ((Math.random ()*10)+1);
 	document.getElementById('PrimerNumero').value = PrimerNumero;	
 	SegundoNumero = Math.floor ((Math.random ()*10)+1);
 	document.getElementById ('SegundoNumero').value = SegundoNumero;
 	Operador = ["*","+","/","-"] [Math.floor (Math.random()*4)];
 	document.getElementById('Operador').value = Operador;
	

}//FIN DE LA FUNCIÓN
function Responder()
{
	var CalculoCorrecto;
	var Respuesta;

	
	if (Operador == "*")
	{
		CalculoCorrecto = (PrimerNumero*SegundoNumero);
	}
	if (Operador == "/")
	{
		CalculoCorrecto = (PrimerNumero/SegundoNumero);
	}
	if (Operador == "+")
	{
		CalculoCorrecto = (PrimerNumero+SegundoNumero);
	}
	if (Operador == "-")
	{
		CalculoCorrecto = (PrimerNumero-SegundoNumero);
	}
	console.log ("El resultado correcto es "+CalculoCorrecto);
	Respuesta = document.getElementById('Respuesta').value;
	if (CalculoCorrecto == Respuesta)
	{
		alert("El resultado es correcto");
	}
	else
	{
		alert("El resultado es incorrecto");
	}

	

}//FIN DE LA FUNCIÓN
