/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var PrimerNumero;
var SegundoNumero;
var Operador;
var temporizador;

function comenzar()
{
	document.getElementById ('Respuesta').value = null;
	PrimerNumero = Math.floor ((Math.random ()*10)+1);
 	document.getElementById('PrimerNumero').value = PrimerNumero;	
 	SegundoNumero = Math.floor ((Math.random ()*10)+1);
 	document.getElementById ('SegundoNumero').value = SegundoNumero;
 	Operador = ["*","+","/","-"] [Math.floor (Math.random()*4)];
 	document.getElementById('Operador').value = Operador;
	temporizador = setInterval(Responder,4000);


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
	CalculoCorrecto = parseInt (CalculoCorrecto);
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
	clearInterval (temporizador);
}