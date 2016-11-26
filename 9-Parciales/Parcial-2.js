/*Realizar el algoritmo que lea un importe 
de un producto por prompt y muestre el importe
final sumándole el IVA (21%) 
*/

function Mostar()
{
	var Importe;
	var ImporteFinal;

	Importe = prompt ("Ingrese importe", "0");
	ImporteFinal = (Importe*1.21);
	alert ("El importe final es "+ImporteFinal);
}

