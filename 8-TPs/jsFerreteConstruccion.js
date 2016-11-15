/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{	var Largo;
	var Ancho;
	var rectangulo;

	Largo = document.getElementById('Largo').value;
	Largo = parseInt (Largo);
	Ancho = document.getElementById('Ancho').value;
	Ancho = parseInt (Ancho);
	rectangulo = (((Largo + Ancho)*2)*3); //3 vueltas
	alert ("Se necesitan "+rectangulo+" metros de alambre");


}
function Circulo () 
{	var Radio;
	var circulo;

	Radio = document.getElementById('Radio').value;
	Radio = parseInt (Radio);
	circulo = (((Radio*2)*3.14)*3); //3 vueltas
	alert ("Se necesitan "+circulo+" metros de alambre");
	
}
function Materiales () 
{	var Largo;
	var Ancho;
	var Cemento;
	var Cal;

	Largo = document.getElementById('Largo').value;
	Largo = parseInt (Largo);
	Ancho = document.getElementById('Ancho').value;
	Ancho = parseInt (Ancho);
	Cemento = ((Largo*Ancho)*2);
	Cal = ((Largo*Ancho)*3);
	alert ("Se necesitan "+Cemento+" bolsas de cemento y "+Cal+" bolsas de cal")


	
}